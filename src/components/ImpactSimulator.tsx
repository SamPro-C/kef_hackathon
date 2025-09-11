'use client';

import { useState, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Home, School, GraduationCap, Briefcase, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP);

const impactLevels = [
  { amount: 10, description: "You've provided essential school supplies for a month." },
  { amount: 25, description: "You've given a student a new uniform and shoes, filling them with pride." },
  { amount: 50, description: "You've provided a full set of textbooks, lighting up a student's path to knowledge." },
  { amount: 100, description: "You've contributed to a term of school fees, keeping a student's dream alive." },
  { amount: 250, description: "You've funded a full term, including safe boarding and meals." },
  { amount: 750, description: "You've sponsored a full year scholarship for a day-scholar, removing all barriers." },
  { amount: 1500, description: "You've become a full sponsor for a boarding student, ensuring their success for an entire year." },
];

const studentJourney = [
  { level: 0, icon: <Home className="w-8 h-8" />, label: 'Awaiting Opportunity' },
  { level: 25, icon: <School className="w-8 h-8" />, label: 'Enrolled in School' },
  { level: 750, icon: <GraduationCap className="w-8 h-8" />, label: 'High School Graduate' },
  { level: 1500, icon: <Briefcase className="w-8 h-8" />, label: 'Career Ready' },
];

export default function ImpactSimulator() {
  const [amount, setAmount] = useState(50);
  const container = useRef(null);
  const progressRef = useRef(null);

  useGSAP(
    () => {
      // Animate progress bar
      gsap.to(progressRef.current, {
        value: (amount / 1500) * 100,
        duration: 0.5,
        ease: 'power3.inOut',
      });

      // Animate journey icons
      studentJourney.forEach((step, index) => {
        const isActive = amount >= step.level;
        gsap.to(`.journey-icon-${index}`, {
          scale: isActive ? 1.1 : 1,
          duration: 0.3,
          ease: 'back.out(1.7)',
        });
        gsap.to(`.icon-bg-${index}`, {
          backgroundColor: isActive ? 'hsl(var(--primary))' : 'hsl(var(--muted))',
          color: isActive ? 'hsl(var(--primary-foreground))' : 'hsl(var(--muted-foreground))',
          duration: 0.5,
        });
         gsap.to(`.icon-label-${index}`, {
          color: isActive ? 'hsl(var(--primary))' : 'hsl(var(--muted-foreground))',
          duration: 0.5,
        });
      });
    },
    { dependencies: [amount], scope: container }
  );

  const handleSliderChange = (value: number[]) => {
    setAmount(value[0]);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(0, Math.min(1500, Number(event.target.value)));
    setAmount(value);
  };

  const currentImpact =
    [...impactLevels]
      .reverse()
      .find((level) => amount >= level.amount)?.description ||
    'Every dollar helps a student begin their journey.';

  return (
    <Card className="border-border/30 overflow-hidden" ref={container}>
      <CardHeader>
        <CardTitle className="text-center font-space-grotesk">
          Your Support Transforms Futures
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 md:p-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold">$</span>
            <Input
              type="number"
              value={amount}
              onChange={handleInputChange}
              className="w-40 text-4xl font-bold text-center h-14 font-space-grotesk [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min="0"
              max="1500"
            />
          </div>
          <Slider
            value={[amount]}
            onValueChange={handleSliderChange}
            max={1500}
            step={5}
            className="w-full"
          />
          <div className="w-full p-6 text-center rounded-lg bg-muted/50 min-h-[80px] flex items-center justify-center">
            <p className="text-lg font-semibold text-accent animate-slow-fade-in">
              {currentImpact}
            </p>
          </div>
        </div>

        <div className="mt-20 mb-10">
          <h3 className="mb-12 text-lg font-semibold text-center font-space-grotesk">
            Student Journey Progress
          </h3>
          <div className="relative w-full">
            <Progress ref={progressRef} value={0} className="h-2" />
            <div className="absolute top-0 flex justify-between w-full -translate-y-1/2">
              {studentJourney.map((step, index) => {
                const stepPercentage = (step.level / 1500) * 100;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                    style={{
                      position: 'absolute',
                      left: `${stepPercentage}%`,
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <div
                      className={cn(
                        'w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 journey-icon-icon',
                         `icon-bg-${index}`
                      )}
                    >
                       <div className={`journey-icon-${index}`}>{step.icon}</div>
                    </div>
                    <span
                      className={cn(
                        'mt-3 text-xs text-center font-semibold w-24',
                        `icon-label-${index}`
                      )}
                    >
                      {step.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
