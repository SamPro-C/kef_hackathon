'use client';
import { useState, useMemo } from 'react';
import { generateThankYou } from '@/ai/flows/generate-thank-you-flow';

const STARTING_COINS = 10;
const STUDENT_COUNT = 6;
const REQUIRED_PER_STUDENT = {
  fees: 2,
  uniforms: 1,
  mentorship: 1,
};

const initialStudents = Array.from({ length: STUDENT_COUNT }, (_, i) => ({
  id: i + 1,
  name: `Student ${i + 1}`,
  funded: false,
  progress: 0,
  showSpeech: false,
  speechText: 'Thank you!',
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
    if (isGenerating) return;

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
        <p className="text-muted-foreground text-center mb-8">See how your choices can change a student’s future.</p>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ minWidth: '220px' }}>
            <div style={{ fontSize: '13px', color: '#6e5a4e', marginBottom: '6px' }}>Your Budget</div>
            <div id="budgetDisplay" style={{ fontWeight: 800, fontSize: '22px' }}>{coinsLeft} Coins</div>
            <div style={{ marginTop: '8px', color: '#8a6d59', fontSize: '13px' }}>Click coins into the buckets to allocate your funds.</div>
          </div>

          <div style={{ flex: 1 }}>
            <div className="budget-row">
              <div className="coins-pile" id="coinsPile" aria-label="coins pile">
                {Array.from({ length: coinsLeft }).map((_, i) => (
                    <div key={i} className="coin" role="button">¢</div>
                ))}
                {coinsLeft === 0 && (
                    <div style={{ fontSize: '13px', color: '#7a6457', padding: '8px' }}>
                        No coins left — click "See Results" to view impact or Reset to try again
                    </div>
                )}
              </div>

              <div className="buckets" style={{ flex: 1 }}>
                <div className="bucket" data-bucket="fees" onClick={() => handleAllocateCoin('fees')}>
                  <div className="icon">🎓</div>
                  <div>School Fees</div>
                  <div className="progress-bar" aria-hidden="true"><div className="progress-fill" style={{width: `${percentFees}%`}}></div></div>
                  <div className="count">{pools.fees}</div>
                  <div className="smallmuted">Covers tuition &amp; exam fees</div>
                </div>

                <div className="bucket" data-bucket="uniforms" onClick={() => handleAllocateCoin('uniforms')}>
                  <div className="icon">👕</div>
                  <div>Uniforms &amp; Supplies</div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: `${percentUniforms}%`}}></div></div>
                  <div className="count">{pools.uniforms}</div>
                  <div className="smallmuted">Uniforms, shoes, books</div>
                </div>

                <div className="bucket" data-bucket="mentorship" onClick={() => handleAllocateCoin('mentorship')}>
                  <div className="icon">🤝</div>
                  <div>Mentorship</div>
                  <div className="progress-bar"><div className="progress-fill" style={{width: `${percentMentorship}%`}}></div></div>
                  <div className="count">{pools.mentorship}</div>
                  <div className="smallmuted">Guidance, workshops, CREW</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* students preview */}
        <div style={{ marginTop: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontWeight: 700 }}>Students in focus</div>
            <div style={{ fontSize: '13px', color: '#7a6457' }}>Tap a student to send a small thanks</div>
          </div>

          <div className="students" id="studentsRow">
            {students.map((s) => (
                <div key={s.id} 
                    className={`student ${s.funded ? 'success' : ''} ${s.progress < 1 ? 'faded' : ''} ${isGenerating ? 'no-click' : ''}`}
                    onClick={() => handleStudentClick(s.id)}
                >
                    <div className="speech" style={{ display: s.showSpeech ? 'block' : 'none' }}>
                        {s.speechText}
                    </div>
                    <div className="avatar">S{s.id}</div>
                    <div className="name">{s.name}</div>
                    <div className="role">{s.funded ? 'Sponsored' : 'Needs support'}</div>
                </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '14px' }}>
            <button className="btn" id="seeResultsBtn" onClick={handleShowResults}>See Results</button>
            <button className="btn secondary" id="resetBtn" onClick={handleReset}>Reset</button>
          </div>
        </div>
      </div>
    </section>

    {/* RIPPLE / IMPACT */}
    {resultsVisible && (
        <section id="rippleSection">
        <div className="ripple-wrap">
            <h3 className='text-3xl font-bold'>The Ripple Effect — See the Transformation</h3>
            <div className="text-muted-foreground mt-2 mb-4">
            You sponsored <strong className='text-primary'>{successes}</strong> students who are now on track to become...
            </div>
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
            </div>

            <div className="career-grid" id="careerGrid">
                {successes > 0 ? (
                    Array.from({ length: successes }).map((_, i) => (
                        <div key={i} className="career">
                            <div style={{ fontWeight: 700 }}>{careers[i % careers.length]}</div>
                            <div style={{ fontSize: '13px', color: '#7a6457', marginTop: '6px' }}>An outcome of KEF support</div>
                        </div>
                    ))
                ) : (
                    <div style={{ color: '#7a6457', marginTop: '10px' }}>
                        No students fully funded — try another allocation to see ripple effects.
                    </div>
                )}
            </div>

            <div style={{ marginTop: '14px' }}>
            <div style={{ fontWeight: 700 }}>Real KEF numbers</div>
            <div style={{ color: '#6b5446', marginTop: '6px' }}>
                <div>• Over <strong>4,600+</strong> students supported since KEF began</div>
                <div>• KEF holistic support: scholarships, uniforms, sanitary products, mentorship</div>
                <div>• KEF focus turns school access into lifelong impact</div>
            </div>
            </div>

            <div className="final-cta" style={{ marginTop: '22px' }}>
            <h2 className='text-2xl font-bold'>Every dream begins with a choice.</h2>
            <p className="text-muted-foreground mt-2">
                Your choice today can ripple into careers, families supported, and stronger communities.
            </p>
            <div className="cta-row">
                <a href="https://www.kenyaeducationfund.org/donate/" target="_blank" className="btn">Sponsor a Student</a>
                <a href="https://www.kenyaeducationfund.org/donate/" target="_blank" className="btn secondary">Donate</a>
            </div>
            </div>
        </div>
        </section>
    )}
    </div>
  );
}
