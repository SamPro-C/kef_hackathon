
'use client';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { generateThankYou } from '@/ai/flows/generate-thank-you-flow';
import { generateAspiration } from '@/ai/flows/generate-aspiration-flow';
import Image from 'next/image';
import { GraduationCap, CheckCircle2, Award } from 'lucide-react';

const STARTING_COINS = 8;
const YEARS_TO_FUND = 4;
const STUDENT_COUNT = 6;

const studentData = [
  { name: 'Jomo', gender: 'male' },
  { name: 'Amina', gender: 'female' },
  { name: 'Baraka', gender: 'male' },
  { name: 'Wanjiru', gender: 'female' },
  { name: 'Simba', gender: 'male' },
  { name: 'Zola', gender: 'female' },
];

interface Student {
  id: number;
  name: string;
  gender: 'male' | 'female';
  image: string;
  fundedYears: number;
  isSponsored: boolean;
  aspiration: string;
  quote: string;
  isRevealed: boolean;
}

const createInitialStudents = (): Student[] => {
  const shuffledData = [...studentData].sort(() => Math.random() - 0.5);
  return Array.from({ length: STUDENT_COUNT }, (_, i) => ({
    id: i,
    name: shuffledData[i].name,
    gender: shuffledData[i].gender,
    image: `https://picsum.photos/seed/student${i + 1}/200/200`,
    fundedYears: 0,
    isSponsored: false,
    aspiration: '',
    quote: '',
    isRevealed: false,
  }));
};

export default function GamePage() {
  const [coins, setCoins] = useState(STARTING_COINS);
  const [students, setStudents] = useState<Student[]>([]);
  const [currentStudentIndex, setCurrentStudentIndex] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);
  const [sponsoredCount, setSponsoredCount] = useState(0);

  useEffect(() => {
    setStudents(createInitialStudents());
  }, []);

  const currentStudent = useMemo(() => {
    return students[currentStudentIndex];
  }, [students, currentStudentIndex]);
  
  const handleFundYear = async () => {
    if (coins <= 0 || !currentStudent || currentStudent.isSponsored) return;

    const updatedStudent = {
      ...currentStudent,
      fundedYears: currentStudent.fundedYears + 1,
    };
    
    setCoins(c => c - 1);
    
    if (updatedStudent.fundedYears >= YEARS_TO_FUND) {
      updatedStudent.isSponsored = true;
      setIsGenerating(true);
      try {
        const result = await generateAspiration({ studentName: updatedStudent.name, studentGender: updatedStudent.gender });
        updatedStudent.aspiration = result.career;
        updatedStudent.quote = result.quote;
      } catch (error) {
        console.error("Error generating aspiration:", error);
        updatedStudent.aspiration = 'Future Leader';
        updatedStudent.quote = 'Thank you for believing in me!';
      } finally {
        updatedStudent.isRevealed = true;
        setSponsoredCount(sc => sc + 1);
        setIsGenerating(false);
      }
    }

    setStudents(prev => prev.map(s => s.id === updatedStudent.id ? updatedStudent : s));
  };

  const handleNextStudent = () => {
    if(currentStudentIndex < students.length - 1) {
      setCurrentStudentIndex(i => i + 1);
    } else {
      // Optional: Loop back to the start
      setCurrentStudentIndex(0);
    }
  };

  const handleReset = () => {
    setCoins(STARTING_COINS);
    setStudents(createInitialStudents());
    setCurrentStudentIndex(0);
    setSponsoredCount(0);
    const gameSection = document.getElementById('gameSection');
    if(gameSection) gameSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <section id="gameSection" className="mt-20">
        <div className="text-center mb-10">
            <h3 className='text-4xl font-bold'>The Scholarship Journey</h3>
            <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">You have **{STARTING_COINS} years** of scholarships to give. Your donation can fund a student's entire 4-year high school education and unlock their future.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {/* Donation Panel */}
            <div className="md:col-span-1 bg-card p-6 rounded-lg border shadow-sm">
                <h4 className="font-bold text-xl mb-4 text-center">Your Donation Fund</h4>
                <div className="text-center mb-6">
                    <p className="text-muted-foreground">Years of Scholarship Left</p>
                    <p className="text-6xl font-bold text-primary">{coins}</p>
                </div>
                <button 
                    onClick={handleFundYear} 
                    disabled={coins <= 0 || isGenerating || currentStudent?.isSponsored}
                    className="btn w-full text-lg py-3"
                >
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Fund One Year
                </button>
                 <p className="text-xs text-muted-foreground text-center mt-2">Fund a year of high school for {currentStudent?.name}.</p>
            </div>

            {/* Student Panel */}
            <div className="md:col-span-2">
                {currentStudent && (
                    <div className={`student-card-large ${currentStudent.isSponsored ? 'sponsored' : ''}`}>
                        <div className="flex flex-col md:flex-row items-center gap-6">
                            <div className="relative">
                                <Image
                                    src={currentStudent.image}
                                    alt={currentStudent.name}
                                    width={140}
                                    height={140}
                                    className="rounded-full object-cover border-4 border-card"
                                    data-ai-hint="student portrait"
                                />
                                {currentStudent.isSponsored && <CheckCircle2 className="absolute bottom-1 right-1 h-10 w-10 text-green-500 bg-white rounded-full p-1"/>}
                            </div>
                            <div className="text-center md:text-left">
                                <h4 className="text-3xl font-bold">{currentStudent.name}</h4>
                                <div className="scholarship-tracker">
                                    {Array.from({length: YEARS_TO_FUND}).map((_, i) => (
                                        <div key={i} className={`year-marker ${i < currentStudent.fundedYears ? 'funded' : ''}`}>
                                            Yr {i + 1}
                                        </div>
                                    ))}
                                </div>
                                <p className="text-muted-foreground mt-2">
                                  {currentStudent.isSponsored ? `is fully sponsored!` : `needs ${YEARS_TO_FUND - currentStudent.fundedYears} more year(s) of support.`}
                                </p>
                            </div>
                        </div>

                        {currentStudent.isRevealed && (
                            <div className="aspiration-reveal">
                                 <p className="text-primary font-semibold text-lg">&ldquo;{currentStudent.quote}&rdquo;</p>
                                 <div className="flex items-center justify-center gap-3 mt-3">
                                    <Award className="h-6 w-6 text-muted-foreground" />
                                    <p className="text-xl font-bold">Future {currentStudent.aspiration}</p>
                                 </div>
                            </div>
                        )}
                         {isGenerating && !currentStudent.isRevealed && (
                            <div className="aspiration-reveal">
                                <p>Unlocking {currentStudent.name}'s bright future...</p>
                            </div>
                        )}
                    </div>
                )}
                 <div className="flex items-center justify-between mt-4">
                    <button className="btn secondary" id="resetBtn" onClick={handleReset}>Reset Game</button>
                    <button onClick={handleNextStudent} className="btn">
                        Next Student &rarr;
                    </button>
                </div>
            </div>
        </div>
      </section>

      <section id="rippleSection" className="mt-16 text-center">
         <div className="ripple-wrap">
            <h3 className='text-3xl font-bold'>Your Impact So Far</h3>
            <p className="text-muted-foreground mt-2 mb-8">
                You've fully sponsored <strong className='text-primary'>{sponsoredCount}</strong> students, starting a ripple effect of change.
            </p>
            <div className="final-cta">
              <h2 className='text-2xl font-bold'>Your choice today can change a life.</h2>
              <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
                  The game shows how every contribution matters. You can make a real-world impact by sponsoring a KEF student today.
              </p>
              <div className="cta-row">
                  <a href="https://www.kenyaeducationfund.org/donate/" target="_blank" className="btn">Sponsor a Real Student</a>
                  <a href="/stories" className="btn secondary">Read Success Stories</a>
              </div>
            </div>
        </div>
      </section>
    </div>
  );
}
