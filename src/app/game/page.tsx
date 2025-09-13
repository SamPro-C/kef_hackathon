
'use client';
import { useState, useMemo, useEffect, useCallback } from 'react';
import { generateThankYou } from '@/ai/flows/generate-thank-you-flow';
import Image from 'next/image';
import { GraduationCap, Shirt, Users } from 'lucide-react';

const STARTING_COINS = 18;
const STUDENT_COUNT = 6;
const REQUIRED_RESOURCES = {
  fees: 2,
  uniforms: 1,
  mentorship: 1,
};
const TOTAL_PER_STUDENT = Object.values(REQUIRED_RESOURCES).reduce((a, b) => a + b, 0);

const studentNames = ["Jomo", "Amina", "Baraka", "Wanjiru", "Simba", "Zola"];

type ResourceKey = keyof typeof REQUIRED_RESOURCES;

interface Student {
  id: number;
  name: string;
  image: string;
  funded: boolean;
  resources: {
    fees: number;
    uniforms: number;
    mentorship: number;
  };
  showSpeech: boolean;
  speechText: string;
}

const createInitialStudents = (): Student[] => 
  Array.from({ length: STUDENT_COUNT }, (_, i) => ({
    id: i + 1,
    name: studentNames[i % studentNames.length],
    image: `https://picsum.photos/seed/student${i + 1}/100/100`,
    funded: false,
    resources: { fees: 0, uniforms: 0, mentorship: 0 },
    showSpeech: false,
    speechText: 'Thank you!',
  }));

function shuffle<T>(array: T[]): T[] {
  let currentIndex = array.length, randomIndex;
  while (currentIndex > 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }
  return array;
}

export default function GamePage() {
  const [coinsLeft, setCoinsLeft] = useState(STARTING_COINS);
  const [students, setStudents] = useState<Student[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedCoin, setSelectedCoin] = useState<number | null>(null);

  useEffect(() => {
    setStudents(shuffle(createInitialStudents()));
  }, []);

  const careers = useMemo(() => [
    'Doctor', 'Teacher', 'Engineer', 'Entrepreneur', 'Community Leader', 'Mentor',
  ], []);

  const successes = useMemo(() => students.filter((s) => s.funded).length, [students]);

  const checkStudentFunded = useCallback((student: Student) => {
    return (
      student.resources.fees >= REQUIRED_RESOURCES.fees &&
      student.resources.uniforms >= REQUIRED_RESOURCES.uniforms &&
      student.resources.mentorship >= REQUIRED_RESOURCES.mentorship
    );
  }, []);

  const handleResourceClick = (studentId: number, resource: ResourceKey) => {
    if (selectedCoin === null || isGenerating) return;

    setStudents(prevStudents => {
      const newStudents = prevStudents.map(s => {
        if (s.id === studentId && s.resources[resource] < REQUIRED_RESOURCES[resource]) {
          const updatedStudent = {
            ...s,
            resources: { ...s.resources, [resource]: s.resources[resource] + 1 },
          };
          if (checkStudentFunded(updatedStudent)) {
            updatedStudent.funded = true;
          }
          return updatedStudent;
        }
        return s;
      });
      return newStudents;
    });

    setCoinsLeft(coinsLeft - 1);
    setSelectedCoin(null);
  };
  
  const handleStudentClick = async (id: number) => {
    const student = students.find(s => s.id === id);
    if (isGenerating || !student?.funded || student.showSpeech) return;

    setStudents(currentStudents => currentStudents.map(s => 
      s.id === id ? { ...s, showSpeech: true, speechText: '...' } : s
    ));
    setIsGenerating(true);

    try {
      if (student) {
        const result = await generateThankYou({ studentName: student.name, donorName: 'Donor' });
        setStudents(currentStudents => currentStudents.map(s =>
          s.id === id ? { ...s, speechText: result.message } : s
        ));
      }
    } catch (error) {
      console.error("Error generating thank you message:", error);
      setStudents(currentStudents => currentStudents.map(s =>
        s.id === id ? { ...s, speechText: 'Thank you so much!' } : s
      ));
    } finally {
      setIsGenerating(false);
      setTimeout(() => {
        setStudents(prev => prev.map(innerS => innerS.id === id ? { ...innerS, showSpeech: false } : innerS));
      }, 4000); 
    }
  };

  const handleReset = () => {
    setCoinsLeft(STARTING_COINS);
    setStudents(shuffle(createInitialStudents()));
    setSelectedCoin(null);
    const gameSection = document.getElementById('gameSection');
    if(gameSection) gameSection.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCoinClick = (index: number) => {
    if (coinsLeft <= 0) return;
    setSelectedCoin(selectedCoin === index ? null : index);
  }

  const rippleCircles = useMemo(() => {
    const base = Math.max(1, successes);
    const maxCircles = Math.min(6, base + 2);
    return Array.from({length: maxCircles});
  }, [successes]);

  return (
    <div className="container mx-auto px-4 py-8">
      <section id="gameSection" className="mt-20">
        <div className="game">
          <h3 className='text-3xl font-bold text-center mb-2'>Sponsor a Dream — The Giving Game</h3>
          <p className="text-muted-foreground text-center mb-8">You have <strong>{STARTING_COINS} coins</strong> to change lives. Click a coin, then click a need on a student's card to fund it.</p>
          
          <div className="mb-8">
            <div className="text-sm text-muted-foreground mb-2 text-center">Your Donation</div>
            <div className="coins-pile" id="coinsPile" aria-label="coins pile">
                {Array.from({ length: STARTING_COINS }).map((_, i) => (
                    <div 
                      key={i} 
                      className={`coin ${i < coinsLeft ? 'available' : 'spent'} ${selectedCoin === i ? 'selected' : ''}`} 
                      role="button"
                      onClick={() => i < coinsLeft && handleCoinClick(i)}
                    >¢</div>
                ))}
                {coinsLeft === 0 && (
                    <div className="text-sm text-muted-foreground p-2">
                        No coins left! See the impact you've made below.
                    </div>
                )}
            </div>
          </div>

          <div className="mt-8">
            <div className="text-center mb-4">
              <h4 className="font-bold">Students Awaiting Support</h4>
              <p className="text-sm text-muted-foreground">Click a sponsored student to hear their thanks!</p>
            </div>

            <div className="students-grid" id="studentsGrid">
              {students.map((s) => (
                  <div key={s.id} 
                      className={`student-card ${s.funded ? 'success' : ''} ${(isGenerating || !s.funded) ? '' : 'clickable'}`}
                      onClick={() => handleStudentClick(s.id)}
                  >
                      <div className="speech" style={{ display: s.showSpeech ? 'block' : 'none' }}>
                          {s.speechText}
                      </div>
                      <div className='flex items-center gap-4'>
                        <div className="avatar">
                          <Image 
                            src={s.image} 
                            alt={s.name} 
                            width={68} 
                            height={68} 
                            className="rounded-full object-cover" 
                            data-ai-hint="student portrait"
                          />
                        </div>
                        <div className='flex-grow'>
                            <div className="name">{s.name}</div>
                            <div className={`role ${s.funded ? 'text-primary' : 'text-muted-foreground'}`}>{s.funded ? 'Fully Sponsored!' : 'Needs Support'}</div>
                        </div>
                      </div>
                      <div className="needs">
                        <div className={`need-item ${s.resources.fees >= REQUIRED_RESOURCES.fees ? 'filled' : ''}`} onClick={() => !s.funded && handleResourceClick(s.id, 'fees')}>
                          <GraduationCap className='icon' />
                          <span>{s.resources.fees}/{REQUIRED_RESOURCES.fees}</span>
                        </div>
                        <div className={`need-item ${s.resources.uniforms >= REQUIRED_RESOURCES.uniforms ? 'filled' : ''}`} onClick={() => !s.funded && handleResourceClick(s.id, 'uniforms')}>
                          <Shirt className='icon' />
                          <span>{s.resources.uniforms}/{REQUIRED_RESOURCES.uniforms}</span>
                        </div>
                        <div className={`need-item ${s.resources.mentorship >= REQUIRED_RESOURCES.mentorship ? 'filled' : ''}`} onClick={() => !s.funded && handleResourceClick(s.id, 'mentorship')}>
                          <Users className='icon' />
                          <span>{s.resources.mentorship}/{REQUIRED_RESOURCES.mentorship}</span>
                        </div>
                      </div>
                  </div>
              ))}
            </div>

            <div className="text-center mt-8 space-x-4">
              <button className="btn secondary" id="resetBtn" onClick={handleReset}>Reset Game</button>
            </div>
          </div>
        </div>
      </section>

      <section id="rippleSection" className="mt-16">
        <div className="ripple-wrap">
            <h3 className='text-3xl font-bold'>The Ripple Effect — Your Real-Time Impact</h3>
            <p className="text-muted-foreground mt-2 mb-8">
            You've sponsored <strong className='text-primary'>{successes}</strong> students who are now on track to become...
            </p>
            
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="w-full lg:w-1/2 flex justify-center items-center">
                  <div className="ripple-canvas" id="rippleCanvas">
                      {successes > 0 && rippleCircles.map((_, i) => {
                          const size = 60 + i * 80;
                          return (
                              <div key={i} className="ripple-circle" style={{
                                  width: `${size}px`,
                                  height: `${size}px`,
                                  animationDelay: `${i * 150}ms`,
                              }}></div>
                          );
                      })}
                      <span className="text-6xl font-bold text-primary">{successes}</span>
                  </div>
              </div>

              <div className="w-full lg:w-1/2">
                  <div className="career-grid" id="careerGrid">
                      {successes > 0 ? (
                          Array.from({ length: successes }).map((_, i) => (
                              <div key={i} className="career">
                                  <div className="font-bold text-lg">{careers[i % careers.length]}</div>
                                  <div className="text-sm text-muted-foreground mt-1">An outcome of your support</div>
                              </div>
                          ))
                      ) : (
                          <div className="text-muted-foreground text-center py-8">
                              Fund a student to see the ripple effects of your donation!
                          </div>
                      )}
                  </div>
              </div>
            </div>

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

    