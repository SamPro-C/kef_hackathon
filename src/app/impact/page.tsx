
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Coins, School, Shirt, Handshake, Heart, Share2, Star } from 'lucide-react';
import { cn } from '@/lib/utils';

type Bucket = 'fees' | 'uniforms' | 'mentorship';

const BUCKET_COSTS: Record<Bucket, number> = {
  fees: 4,
  uniforms: 3,
  mentorship: 3,
};

const STUDENTS = [
  { id: 1, name: 'Juma' },
  { id: 2, name: 'Asha' },
  { id: 3, name: 'Ken' },
  { id: 4, name: 'Maria' },
  { id: 5, name: 'David' },
  { id: 6, name: 'Fatima' },
];

const SponsorADreamPage = () => {
  const [gameState, setGameState] = useState<'intro' | 'game' | 'ripple' | 'cta'>('intro');
  const [coins, setCoins] = useState(10);
  const [buckets, setBuckets] = useState<Record<Bucket, number>>({ fees: 0, uniforms: 0, mentorship: 0 });
  const [draggingCoin, setDraggingCoin] = useState<number | null>(null);

  const gameRef = useRef<HTMLDivElement>(null);

  const handleStartGame = () => {
    setGameState('game');
    setTimeout(() => {
      gameRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };
  
  const handleDrop = (bucket: Bucket) => {
    if (coins > 0) {
      setCoins(coins - 1);
      setBuckets(prev => ({ ...prev, [bucket]: prev[bucket] + 1 }));
    }
  };

  const isStudentFunded = (studentIndex: number): boolean => {
    const feesPerStudent = BUCKET_COSTS.fees / STUDENTS.length;
    const uniformsPerStudent = BUCKET_COSTS.uniforms / STUDENTS.length;
    const mentorshipPerStudent = BUCKET_COSTS.mentorship / STUDENTS.length;

    return (
      buckets.fees > studentIndex * feesPerStudent &&
      buckets.uniforms > studentIndex * uniformsPerStudent &&
      buckets.mentorship > studentIndex * mentorshipPerStudent
    );
  };

  const getFundedCount = () => {
    return STUDENTS.filter((_, i) => isStudentFunded(i)).length;
  }

  const renderContent = () => {
    switch (gameState) {
      case 'intro':
        return (
          <section className="h-screen min-h-[700px] flex flex-col items-center justify-center text-center p-4 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-orange-100 to-yellow-50 opacity-50"></div>
            <Coins className="h-24 w-24 text-secondary drop-shadow-lg animate-bounce-slow" />
            <h1 className="font-headline text-4xl md:text-6xl font-bold mt-6 text-primary" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.1)' }}>Sponsor a Dream</h1>
            <p className="mt-4 text-xl md:text-2xl text-foreground/80 max-w-2xl">Every coin you give can unlock a student’s dream.</p>
            <Button onClick={handleStartGame} size="lg" className="mt-12 animate-glow">
              Start Game
            </Button>
          </section>
        );
      
      case 'game':
        return (
           <section ref={gameRef} className="py-16 md:py-24 min-h-screen container mx-auto px-4 md:px-6">
              <div className="text-center">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Budget Allocation</h2>
                <p className="mt-2 text-lg text-muted-foreground">You have 10 coins to invest in a student's future. Drag and drop them into the buckets below.</p>
              </div>

              <Card className="mt-8 p-6 sticky top-20 z-10 bg-card/80 backdrop-blur-sm">
                <div className="flex items-center justify-center gap-4">
                  <h3 className="font-headline text-2xl font-bold text-foreground">Your Budget:</h3>
                  <div className="flex gap-2">
                    {Array.from({ length: coins }).map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-secondary shadow-md flex items-center justify-center text-secondary-foreground font-bold animate-coin-drop" style={{animationDelay: `${i * 50}ms`}}>
                        <Star className="w-5 h-5"/>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
                {(Object.keys(buckets) as Bucket[]).map(bucket => (
                  <Card 
                    key={bucket} 
                    className="p-6 text-center transition-all hover:shadow-primary/30"
                    onDragOver={(e) => e.preventDefault()}
                    onClick={() => handleDrop(bucket)}
                  >
                    <CardHeader>
                      <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                        {bucket === 'fees' && <School className="h-10 w-10 text-primary" />}
                        {bucket === 'uniforms' && <Shirt className="h-10 w-10 text-primary" />}
                        {bucket === 'mentorship' && <Handshake className="h-10 w-10 text-primary" />}
                      </div>
                      <CardTitle className="capitalize mt-4">{bucket}</CardTitle>
                    </CardHeader>
                    <CardContent className="h-24 flex flex-wrap items-center justify-center gap-2">
                       {Array.from({ length: buckets[bucket] }).map((_, i) => (
                         <div key={i} className="w-6 h-6 rounded-full bg-secondary shadow-sm flex items-center justify-center text-secondary-foreground">
                           <Star className="w-4 h-4"/>
                         </div>
                       ))}
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-16 text-center">
                 <h3 className="font-headline text-2xl font-bold text-primary">Classroom Reveal</h3>
                 <div className="mt-8 grid grid-cols-3 md:grid-cols-6 gap-4">
                  {STUDENTS.map((student, i) => (
                    <div key={student.id} className={cn("flex flex-col items-center gap-2 p-2 rounded-lg transition-all duration-500", isStudentFunded(i) ? 'bg-primary/20 opacity-100' : 'opacity-30')}>
                       <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                          <Image src={`https://picsum.photos/seed/${student.id}/80/80`} width={80} height={80} alt={student.name} className={cn("transition-all duration-500", !isStudentFunded(i) && 'grayscale')}/>
                       </div>
                       <p className="font-semibold">{student.name}</p>
                       <p className="text-xs">{isStudentFunded(i) ? 'Smiling 😊' : 'Struggling 😔'}</p>
                    </div>
                  ))}
                 </div>
              </div>

              <div className="mt-12 text-center">
                <Button onClick={() => setGameState('ripple')} size="lg" disabled={coins > 0}>
                  See the Ripple Effect
                </Button>
                {coins > 0 && <p className="text-sm text-muted-foreground mt-2">You must spend all your coins to continue.</p>}
              </div>

           </section>
        );

      case 'ripple':
        return (
           <section className="py-16 md:py-24 min-h-screen flex items-center justify-center text-center">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">The Ripple Effect</h2>
               <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Because you invested in <span className="font-bold text-primary">{getFundedCount()} student{getFundedCount() !== 1 ? 's' : ''}</span>, futures are rewritten.</p>
               <div className="relative mt-12 h-96 flex items-center justify-center">
                <div className="absolute w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center text-center">
                    <span className="font-bold text-primary">KEF</span>
                </div>
                 <div className="absolute w-24 h-24 bg-primary/20 rounded-full animate-ripple" style={{animationDelay: '0s'}}></div>
                 <div className="absolute w-24 h-24 bg-primary/20 rounded-full animate-ripple" style={{animationDelay: '0.5s'}}></div>
                 <div className="absolute w-24 h-24 bg-primary/20 rounded-full animate-ripple" style={{animationDelay: '1s'}}></div>
               </div>

                <div className="mt-12 space-y-4 text-xl">
                  <p>KEF has sponsored <span className="font-bold text-primary">4,600+</span> students since 2006.</p>
                  <p><span className="font-bold text-primary">99%</span> of KEF scholars transition to university.</p>
                  <p>KEF alumni are now <span className="font-bold text-primary">doctors, engineers, teachers, and entrepreneurs.</span></p>
                </div>

               <div className="mt-12">
                 <Button onClick={() => setGameState('cta')} size="lg">Sponsor a Dream Today</Button>
               </div>
            </div>
          </section>
        );

      case 'cta':
        return (
          <section className="py-32 md:py-48 min-h-screen flex items-center justify-center text-center bg-card/50">
             <div className="container mx-auto px-4 md:px-6">
                <h2 className="font-headline text-4xl md:text-6xl font-bold text-primary" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.1)' }}>Every dream begins with a choice.</h2>
                <p className="mt-6 text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">Be the one who makes it possible.</p>
                <div className="mt-12 flex flex-wrap justify-center gap-4">
                   <Button asChild size="lg" className="animate-glow">
                      <Link href="https://www.kenyaeducationfund.org/sponsor-a-student" target="_blank"><Heart className="mr-2"/> Sponsor Now</Link>
                   </Button>
                   <Button asChild size="lg" variant="outline">
                      <Link href="https://www.kenyaeducationfund.org/get-involved" target="_blank"><Share2 className="mr-2"/> Share This Game</Link>
                   </Button>
                </div>
             </div>
          </section>
        );
    }
  };

  return <>{renderContent()}</>;
};

export default SponsorADreamPage;
