
'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { BookOpen, Shirt, ShoppingCart, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

const impactLevels = [
  { amount: 25, label: 'Textbooks for a term', icon: BookOpen },
  { amount: 50, label: 'A full school uniform', icon: Shirt },
  { amount: 100, label: 'A year of school supplies', icon: ShoppingCart },
  { amount: 750, label: 'A full year scholarship!', icon: Heart },
];

export default function ImpactCalculator() {
  const [donationAmount, setDonationAmount] = useState(50);
  const [displayedAmount, setDisplayedAmount] = useState(50);
  const [achievedLevels, setAchievedLevels] = useState<number[]>([]);

  useEffect(() => {
    const newAchievedLevels = impactLevels
      .filter(level => donationAmount >= level.amount)
      .map(level => level.amount);
    
    // Check if a new level has been achieved to trigger animation
    if (newAchievedLevels.length > achievedLevels.length) {
       setAchievedLevels(newAchievedLevels);
    } else if (newAchievedLevels.length < achievedLevels.length) {
       setAchievedLevels(newAchievedLevels);
    }

    const interval = setInterval(() => {
      setDisplayedAmount(prev => {
        if (prev < donationAmount) {
          return Math.min(prev + Math.ceil((donationAmount - prev) / 10), donationAmount);
        }
        if (prev > donationAmount) {
          return Math.max(prev - Math.ceil((prev - donationAmount) / 10), donationAmount);
        }
        clearInterval(interval);
        return prev;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [donationAmount, achievedLevels.length]);

  const handleSliderChange = (value: number[]) => {
    setDonationAmount(value[0]);
  };

  return (
    <Card className="max-w-3xl mx-auto mt-12 shadow-2xl border-2 border-primary/20 overflow-hidden bg-card">
      <CardHeader className="text-center pt-8">
        <div className="text-6xl font-bold font-headline text-primary transition-all duration-300">
          ${displayedAmount}
        </div>
        <CardDescription className="text-lg mt-2">Slide to see your potential impact</CardDescription>
      </CardHeader>
      <CardContent className="px-4 sm:px-8 pb-8">
        <Slider
          defaultValue={[50]}
          max={750}
          step={5}
          onValueChange={handleSliderChange}
          className="my-8"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8">
            {impactLevels.map((level, index) => {
                const isAchieved = donationAmount >= level.amount;
                return (
                    <div 
                        key={level.label} 
                        className={cn(
                            "flex flex-col items-center p-4 rounded-lg border-2 transition-all duration-300 transform",
                            isAchieved
                                ? 'border-primary bg-primary/10 shadow-lg scale-105'
                                : 'border-dashed border-muted'
                        )}
                        style={{animation: isAchieved && achievedLevels.includes(level.amount) ? `pulse-once 0.5s ease-out` : 'none'}}
                    >
                        <level.icon className={cn(
                            "h-8 w-8 mb-2 transition-colors duration-300",
                            isAchieved ? 'text-primary' : 'text-muted-foreground'
                        )} />
                        <p className={cn(
                            "font-semibold transition-colors duration-300",
                            isAchieved ? 'text-primary' : 'text-muted-foreground'
                        )}>${level.amount}</p>
                        <p className={cn(
                            "text-sm h-10 flex items-center transition-colors duration-300",
                            isAchieved ? 'text-foreground' : 'text-muted-foreground'
                        )}>{level.label}</p>
                    </div>
                )
            })}
        </div>
        <div className="text-center mt-10">
          <Button size="lg" className="animate-pulse">
            Sponsor Now for ${donationAmount}
            <Heart className="ml-2" />
          </Button>
        </div>
      </CardContent>
      <style jsx>{`
        @keyframes pulse-once {
          0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(239, 111, 18, 0.4); }
          50% { transform: scale(1.1); box-shadow: 0 0 10px 15px rgba(239, 111, 18, 0); }
          100% { transform: scale(1.05); box-shadow: 0 0 0 0 rgba(239, 111, 18, 0); }
        }
      `}</style>
    </Card>
  );
}
