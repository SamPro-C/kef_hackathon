'use client';
import { useState, useMemo } from 'react';
import { generateThankYou } from '@/ai/flows/generate-thank-you-flow';
import Image from 'next/image';

const STARTING_COINS = 10;
const STUDENT_COUNT = 6;
const REQUIRED_PER_STUDENT = {
  fees: 2,
  uniforms: 1,
  mentorship: 1,
};

const studentNames = [
    "Jomo", "Amina", "Baraka", "Wanjiru", "Simba", "Zola"
];

const initialStudents = Array.from({ length: STUDENT_COUNT }, (_, i) => ({
  id: i + 1,
  name: studentNames[i % studentNames.length],
  funded: false,
  progress: 0,
  showSpeech: false,
  speechText: 'Thank you!',
  image: `https://picsum.photos/seed/student${i+1}/100/100`
}));

export default function GamePage() {
  const [coinsLeft, setCoinsLeft] = useState(STARTING_COINS);
  const [pools, setPools] = useState({ fees: 0, uniforms: 0, mentorship: 0 });
  const [students, setStudents] = useState(initialStudents);
  const [resultsVisible, setResultsVisible] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const careers = useMemo(() => [
    'Doctor',
    'Teacher',
    'Engineer',
    'Entrepreneur',
    'Community Leader',
    'Mentor',
  ], []);

  const successes = useMemo(() => students.filter((s) => s.funded).length, [students]);

  const handleAllocateCoin = (bucketKey: keyof typeof pools) => {
    if (coinsLeft <= 0) return;
    setCoinsLeft(coinsLeft - 1);
    setPools((prevPools) => ({
      ...prevPools,
      [bucketKey]: prevPools[bucketKey] + 1,
    }));
  };

  const handleShowResults = () => {
    let feesPool = pools.fees;
    let uniformsPool = pools.uniforms;
    let mentorshipPool = pools.mentorship;

    const newStudents = students.map((s) => {
      let funded = false;
      let progress = 0;
      if (
        feesPool >= REQUIRED_PER_STUDENT.fees &&
        uniformsPool >= REQUIRED_PER_STUDENT.uniforms &&
        mentorshipPool >= REQUIRED_PER_STUDENT.mentorship
      ) {
        feesPool -= REQUIRED_PER_STUDENT.fees;
        uniformsPool -= REQUIRED_PER_STUDENT.uniforms;
        mentorshipPool -= REQUIRED_PER_STUDENT.mentorship;
        funded = true;
        progress = 1;
      }
      return { ...s, funded, progress };
    });

    setStudents(newStudents);
    setResultsVisible(true);
    setTimeout(() => {
        const rippleSection = document.getElementById('rippleSection');
        if (rippleSection) {
            rippleSection.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
  };
  
  const handleStudentClick = async (id: number) => {
    if (isGenerating || !students.find(s => s.id === id)?.funded) return;

    setStudents(currentStudents => currentStudents.map(s => 
      s.id === id ? { ...s, showSpeech: true, speechText: '...' } : s
    ));
    setIsGenerating(true);

    try {
      const student = students.find(s => s.id === id);
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
      }, 3000); 
    }
  };

  const handleReset = () => {
    setCoinsLeft(STARTING_COINS);
    setPools({ fees: 0, uniforms: 0, mentorship: 0 });
    setStudents(initialStudents);
    setResultsVisible(false);
    const gameSection = document.getElementById('gameSection');
    if(gameSection) gameSection.scrollIntoView({ behavior: 'smooth' });
  };

  const totalNeededFees = REQUIRED_PER_STUDENT.fees * STUDENT_COUNT;
  const percentFees = Math.min(100, Math.round((pools.fees / totalNeededFees) * 100));
  const totalNeededUniforms = REQUIRED_PER_STUDENT.uniforms * STUDENT_COUNT;
  const percentUniforms = Math.min(100, Math.round((pools.uniforms / totalNeededUniforms) * 100));
  const totalNeededMentorship = REQUIRED_PER_STUDENT.mentorship * STUDENT_COUNT;
  const percentMentorship = Math.min(100, Math.round((pools.mentorship / totalNeededMentorship) * 100));
  
  const rippleCircles = useMemo(() => {
      if (!resultsVisible) return [];
      const base = Math.max(1, successes);
      const maxCircles = Math.min(6, base + 2);
      return Array.from({length: maxCircles});
  }, [resultsVisible, successes]);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Game Section */}
      <section id="gameSection" className="mt-20">
      <div className="game">
        <h3 className='text-3xl font-bold text-center mb-2'>Sponsor a Dream — Interactive Simulator</h3>
        <p className="text-muted-foreground text-center mb-8">You have <strong>{STARTING_COINS} coins</strong> to invest in education. See how your choices can change a student’s future.</p>
        
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Coins Pile */}
          <div className="w-full md:w-1/3">
            <div className="text-sm text-muted-foreground mb-2">Your Donation</div>
            <div className="coins-pile" id="coinsPile" aria-label="coins pile">
                {Array.from({ length: coinsLeft }).map((_, i) => (
                    <div key={i} className="coin" role="button">¢</div>
                ))}
                {coinsLeft === 0 ? (
                    <div className="text-sm text-muted-foreground p-2">
                        No coins left! Click "See Results" to view your impact.
                    </div>
                ) : (
                    <div className="text-sm text-muted-foreground p-2">
                        Click a bucket to allocate a coin.
                    </div>
                )}
            </div>
          </div>

          {/* Buckets */}
          <div className="w-full md:w-2/3">
              <div className="buckets">
                <div className="bucket" data-bucket="fees" onClick={() => handleAllocateCoin('fees')}>
                  <div className="icon">🎓</div>
                  <div className='font-bold'>School Fees</div>
                  <div className="progress-bar" aria-hidden="true"><div className="progress-fill" style={{width: `${percentFees}%`}}></div></div>
                  <div className="count">{pools.fees}</div>
                  <div className="smallmuted">Covers tuition &amp; exam fees</div>
                </div>

                <div className="bucket" data-bucket="uniforms" onClick={() => handleAllocateCoin('uniforms')}>
                  <div className="icon">👕</div>
                  <div className='font-bold'>Uniforms &amp; Supplies</div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: `${percentUniforms}%`}}></div></div>
                  <div className="count">{pools.uniforms}</div>
                  <div className="smallmuted">Uniforms, shoes, books</div>
                </div>

                <div className="bucket" data-bucket="mentorship" onClick={() => handleAllocateCoin('mentorship')}>
                  <div className="icon">🤝</div>
                  <div className='font-bold'>Mentorship</div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: `${percentMentorship}%`}}></div></div>
                  <div className="count">{pools.mentorship}</div>
                  <div className="smallmuted">Guidance & workshops</div>
                </div>
              </div>
          </div>
        </div>

        {/* students preview */}
        <div className="mt-8">
          <div className="text-center mb-4">
            <h4 className="font-bold">Students Awaiting Support</h4>
            <p className="text-sm text-muted-foreground">Click a funded student after seeing results to hear their thanks.</p>
          </div>

          <div className="students" id="studentsRow">
            {students.map((s) => (
                <div key={s.id} 
                    className={`student ${s.funded ? 'success' : ''} ${s.progress < 1 ? 'faded' : ''} ${(isGenerating || !s.funded) ? 'no-click' : ''}`}
                    onClick={() => handleStudentClick(s.id)}
                >
                    <div className="speech" style={{ display: s.showSpeech ? 'block' : 'none' }}>
                        {s.speechText}
                    </div>
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
                    <div className="name">{s.name}</div>
                    <div className={`role ${s.funded ? 'text-primary' : ''}`}>{s.funded ? 'Sponsored!' : 'Needs Support'}</div>
                </div>
            ))}
          </div>

          <div className="text-center mt-8 space-x-4">
            <button className="btn" id="seeResultsBtn" onClick={handleShowResults} disabled={resultsVisible}>See Results</button>
            <button className="btn secondary" id="resetBtn" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </section>

    {/* RIPPLE / IMPACT */}
    {resultsVisible && (
        <section id="rippleSection" className="mt-16">
          <div className="ripple-wrap">
              <h3 className='text-3xl font-bold'>The Ripple Effect — See the Transformation</h3>
              <p className="text-muted-foreground mt-2 mb-8">
              You sponsored <strong className='text-primary'>{successes}</strong> students who are now on track to become...
              </p>
              
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Ripple Canvas */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <div className="ripple-canvas" id="rippleCanvas">
                        {rippleCircles.map((_, i) => {
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

                {/* Career Grid */}
                <div className="w-full lg:w-1/2">
                    <div className="career-grid" id="careerGrid">
                        {successes > 0 ? (
                            Array.from({ length: successes }).map((_, i) => (
                                <div key={i} className="career">
                                    <div className="font-bold text-lg">{careers[i % careers.length]}</div>
                                    <div className="text-sm text-muted-foreground mt-1">An outcome of KEF support</div>
                                </div>
                            ))
                        ) : (
                            <div className="text-muted-foreground text-center py-8">
                                No students fully funded — try another allocation to see the ripple effects.
                            </div>
                        )}
                    </div>
                </div>
              </div>

              <div className="mt-12 text-left bg-background/50 p-6 rounded-lg">
                <h4 className='font-bold text-lg'>Real KEF Impact</h4>
                <div className="text-muted-foreground mt-2 text-sm space-y-1">
                    <p>• Over <strong>4,600+</strong> students supported since KEF began.</p>
                    <p>• KEF provides holistic support: scholarships, uniforms, sanitary products, and mentorship.</p>
                    <p>• This comprehensive approach turns school access into lifelong success.</p>
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
    )}
    </div>
  );
}
