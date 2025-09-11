'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import { Home, School, GraduationCap, Briefcase } from 'lucide-react';

const impactLevels = [
  { amount: 10, description: 'School supplies for a month' },
  { amount: 25, description: 'A new school uniform and shoes' },
  { amount: 50, description: 'Textbooks for a full year' },
  { amount: 100, description: 'Contribution towards one term of school fees' },
  {
    amount: 250,
    description: 'Full tuition for one term, including boarding',
  },
  {
    amount: 750,
    description: 'A full year scholarship for a day-scholar student',
  },
  {
    amount: 1500,
    description:
      'A full year scholarship for a boarding school student, covering all costs',
  },
];

const studentJourney = [
  { level: 0, icon: <Home className="w-8 h-8" />, label: 'At Home' },
  { level: 25, icon: <School className="w-8 h-8" />, label: 'In School' },
  {
    level: 750,
    icon: <GraduationCap className="w-8 h-8" />,
    label: 'Graduated',
  },
  {
    level: 1500,
    icon: <Briefcase className="w-8 h-8" />,
    label: 'Career Ready',
  },
];

export default function ImpactSimulator() {
  const [amount, setAmount] = useState(50);

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
    'Gets a student started on their journey.';

  const progressPercentage = (amount / 1500) * 100;

  const currentJourney = [...studentJourney]
    .reverse()
    .find((step) => amount >= step.level);

  return (
    <Card className="border-border/30">
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

        <div className="mt-12">
          <h3 className="mb-6 text-lg font-semibold text-center font-space-grotesk">
            Student Journey Progress
          </h3>
          <div className="relative w-full">
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex justify-between mt-2">
              {studentJourney.map((step, index) => {
                const stepPercentage = (step.level / 1500) * 100;
                const isActive = amount >= step.level;
                return (
                  <div
                    key={index}
                    className="flex flex-col items-center"
                    style={{
                      position: 'absolute',
                      left: `calc(${stepPercentage}% - 16px)`,
                      transform: 'translateX(-50%)',
                      top: '-2rem',
                    }}
                  >
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      {step.icon}
                    </div>
                    <span
                      className={`mt-2 text-xs font-semibold ${
                        isActive ? 'text-primary' : 'text-muted-foreground'
                      }`}
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
