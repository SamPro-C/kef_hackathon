
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Backpack, Sparkles, ArrowRight } from 'lucide-react';
import ImpactCalculator from '@/components/impact-calculator';

export default function ImpactPage() {
  const [showQuestion, setShowQuestion] = useState(false);

  return (
    <div className="bg-background text-foreground">
      {/* Page 1: Problem Introduction */}
      <section className="relative h-screen min-h-[700px] w-full flex flex-col items-center justify-center text-center text-white p-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <Image
            src="https://picsum.photos/seed/classroom/1920/1080"
            alt="Faded image of a dusty classroom"
            fill
            className="object-cover"
            data-ai-hint="empty classroom third-world"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-secondary/50 to-transparent"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center animate-in">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            Dreams Shouldn’t Die at the Classroom Door.
          </h1>
          <p className="mt-6 max-w-3xl text-lg md:text-xl text-white/90" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Every year, thousands of bright Kenyan students drop out of school—not because they lack ambition, but because they lack resources. Poverty steals opportunities, and dreams fade away before they even begin.
          </p>

          <div 
            className="relative mt-12 cursor-pointer"
            onMouseEnter={() => setShowQuestion(true)}
            onMouseLeave={() => setShowQuestion(false)}
          >
            <Backpack className="h-24 w-24 text-white/80 transition-transform duration-300 hover:scale-110" />
            {showQuestion && (
              <div className="absolute bottom-full mb-4 w-64 p-3 bg-black/50 rounded-lg text-lg animate-fade-in-up">
                <Sparkles className="h-5 w-5 text-secondary inline-block mr-2" />
                What if you could change this story?
              </div>
            )}
          </div>
          
          <Button size="lg" className="mt-12 animate-glow">
            See the Transformation <ArrowRight className="ml-2"/>
          </Button>
        </div>
      </section>

      {/* Page 2: The Transformation / Impact Calculator */}
      <section className="py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-4xl font-bold text-primary">Your Support is the Spark.</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
                A small contribution can provide the essential resources that keep a student in school, allowing their dream to flourish. See how different levels of support can change a life.
            </p>
            <ImpactCalculator />
        </div>
      </section>
    </div>
  );
}
