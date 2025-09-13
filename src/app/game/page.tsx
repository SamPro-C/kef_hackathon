'use client';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { generateAspiration } from '@/ai/flows/generate-aspiration-flow';
import { generateThankYou } from '@/ai/flows/generate-thank-you-flow';
import Image from 'next/image';
import { GraduationCap, CheckCircle2, Award, Users, RefreshCw } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import WordUnscramble from '@/components/game/WordUnscramble';

const YEARS_TO_FUND = 4;
const STUDENT_COUNT = 4;

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
  const shuffledData = [...studentData].sort(() => 0.5 - Math.random());
  return Array.from({ length: STUDENT_COUNT }, (_, i) => ({
    id: i,
    name: shuffledData[i].name,
    gender: shuffledData[i].gender as 'male' | 'female',
    image: `https://picsum.photos/seed/student${i + 1}/200/200`,
    fundedYears: 0,
    isSponsored: false,
    aspiration: '',
    quote: '',
    isRevealed: false,
  }));
};

export default function GamePage() {
  const [playerName, setPlayerName] = useState('');
  const [coins, setCoins] = useState(0);
  const [students, setStudents] = useState<Student[]>([]);
  const [gameState, setGameState] = useState<'intro' | 'word_game' | 'playing' | 'finished'>('intro');
  const [isGenerating, setIsGenerating] = useState<number | null>(null);

  const sponsoredCount = useMemo(() => students.filter(s => s.isSponsored).length, [students]);

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      setGameState('word_game');
    }
  };

  const handleGameStart = (earnedCoins: number) => {
    setCoins(earnedCoins);
    setStudents(createInitialStudents());
    setGameState('playing');
  };

  const handleFundYear = async (studentId: number) => {
    const student = students.find(s => s.id === studentId);
    if (coins <= 0 || !student || student.isSponsored) return;

    let updatedStudent = {
      ...student,
      fundedYears: student.fundedYears + 1,
    };
    
    setCoins(c => c - 1);
    
    if (updatedStudent.fundedYears >= YEARS_TO_FUND) {
      updatedStudent.isSponsored = true;
      setIsGenerating(studentId);
      try {
        const [aspirationResult, thankYouResult] = await Promise.all([
          generateAspiration({ studentName: updatedStudent.name, studentGender: updatedStudent.gender }),
          generateThankYou({ studentName: updatedStudent.name, donorName: playerName })
        ]);
        updatedStudent.aspiration = aspirationResult.career;
        updatedStudent.quote = thankYouResult.message;
      } catch (error) {
        console.error("Error generating content:", error);
        updatedStudent.aspiration = 'Future Leader';
        updatedStudent.quote = `Thank you for believing in me, ${playerName}!`;
      } finally {
        updatedStudent.isRevealed = true;
        setIsGenerating(null);
      }
    }
    
    setStudents(prev => prev.map(s => s.id === updatedStudent.id ? updatedStudent : s));
  };
  
  const handleReset = () => {
    setPlayerName('');
    setCoins(0);
    setStudents([]);
    setGameState('intro');
  }

  useEffect(() => {
    if(gameState === 'playing' && coins === 0 && students.every(s => !s.isSponsored || s.fundedYears < YEARS_TO_FUND)){
      const allSponsored = students.every(s => s.isSponsored);
      if(!allSponsored && sponsoredCount < STUDENT_COUNT) {
         setTimeout(() => setGameState('finished'), 1500);
      }
    }
    if(gameState === 'playing' && students.length > 0 && students.every(s => s.isSponsored)){
      setTimeout(() => setGameState('finished'), 1500);
    }
  }, [coins, students, gameState, sponsoredCount]);


  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="text-center mb-10">
          <h3 className='text-4xl font-bold'>The KEF Supporter Challenge</h3>
          <p className="text-muted-foreground mt-2 max-w-3xl mx-auto">
            Your support starts with a challenge. See how your choices can unlock the potential of deserving students.
          </p>
      </div>

      <AnimatePresence mode="wait">
        {gameState === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <Card className="word-unscramble-card max-w-lg mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Welcome, Supporter!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-center text-muted-foreground mb-4">What name should our students thank?</p>
                <form onSubmit={handleNameSubmit} className="flex flex-col items-center gap-4">
                  <input
                    type="text"
                    value={playerName}
                    onChange={(e) => setPlayerName(e.target.value)}
                    className="unscramble-input"
                    placeholder="Enter your name..."
                    aria-label="Your name"
                  />
                  <button type="submit" className="btn" disabled={!playerName.trim()}>
                    Start the Challenge
                  </button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {gameState === 'word_game' && (
          <motion.div
            key="word_game"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <WordUnscramble onGameEnd={handleGameStart} />
          </motion.div>
        )}

        {(gameState === 'playing' || gameState === 'finished') && (
          <motion.div
            key="playing"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="flex justify-between items-center mb-6 sticky top-24 bg-background/80 backdrop-blur-sm py-4 z-10 rounded-lg px-4 border">
                <div>
                    <p className="text-sm text-muted-foreground">Scholarship Years Earned</p>
                    <p className="text-4xl font-bold text-primary">{coins}</p>
                </div>
                <div>
                    <p className="text-sm text-muted-foreground text-right">Students Sponsored</p>
                    <p className="text-4xl font-bold">{sponsoredCount} / {STUDENT_COUNT}</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {students.map(student => (
                    <Card key={student.id} className={`student-card-game ${student.isSponsored ? 'sponsored' : ''}`}>
                        <CardContent className="p-4">
                             <div className="flex items-center gap-4">
                                <Image
                                    src={student.image}
                                    alt={student.name}
                                    width={80}
                                    height={80}
                                    className="rounded-full object-cover border-4 border-card"
                                    data-ai-hint="student portrait"
                                />
                                <div className="flex-1">
                                    <h4 className="text-2xl font-bold">{student.name}</h4>
                                    <div className="scholarship-tracker mt-2">
                                        {Array.from({length: YEARS_TO_FUND}).map((_, i) => (
                                            <div key={i} className={`year-marker ${i < student.fundedYears ? 'funded' : ''}`}></div>
                                        ))}
                                    </div>
                                </div>
                                {student.isSponsored && <CheckCircle2 className="h-8 w-8 text-green-500"/>}
                             </div>
                             
                            {student.isRevealed && (
                                <motion.div 
                                  className="aspiration-reveal"
                                  initial={{ opacity: 0, y: 10 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ duration: 0.8, delay: 0.2 }}
                                >
                                     <p className="text-primary font-semibold text-md italic">&ldquo;{student.quote}&rdquo;</p>
                                     <div className="flex items-center justify-center gap-2 mt-2">
                                        <Award className="h-5 w-5 text-muted-foreground" />
                                        <p className="text-lg font-bold">Future {student.aspiration}</p>
                                     </div>
                                </motion.div>
                            )}
                             {isGenerating === student.id && (
                                <div className="aspiration-reveal">
                                    <p className="text-sm">Unlocking {student.name}'s bright future...</p>
                                </div>
                            )}

                        </CardContent>
                        <div className="px-4 pb-4">
                             <button 
                                onClick={() => handleFundYear(student.id)} 
                                disabled={coins <= 0 || student.isSponsored || isGenerating !== null}
                                className="btn w-full"
                            >
                                <GraduationCap className="mr-2 h-5 w-5" />
                                Fund One Year
                            </button>
                        </div>
                    </Card>
                ))}
            </div>
            
            <AnimatePresence>
            {gameState === 'finished' && (
              <motion.div 
                className="fixed inset-0 bg-black/60 z-40 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                  <Card className="w-full max-w-lg text-center z-50 m-4"
                     as={motion.div}
                     initial={{ opacity: 0, scale: 0.7 }}
                     animate={{ opacity: 1, scale: 1 }}
                     exit={{ opacity: 0, scale: 0.7 }}
                     transition={{type: 'spring', stiffness: 200, damping: 20}}
                  >
                      <CardHeader>
                          <CardTitle className="text-3xl">Challenge Complete!</CardTitle>
                      </CardHeader>
                      <CardContent>
                          <p className="text-5xl font-bold my-4">You sponsored <span className="text-primary">{sponsoredCount}</span> student{sponsoredCount !== 1 ? 's' : ''}!</p>
                          <p className="text-muted-foreground">
                              Every year of support makes a difference. You can see how strategic choices can change lives. Now, imagine the impact you could make for real.
                          </p>
                      </CardContent>
                      <div className="cta-row p-6">
                         <button onClick={handleReset} className="btn secondary">
                            <RefreshCw className="mr-2 h-4 w-4" />
                            Play Again
                         </button>
                         <a href="https://www.kenyaeducationfund.org/donate/" target="_blank" className="btn">Sponsor a Real Student</a>
                      </div>
                  </Card>
              </motion.div>
            )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
