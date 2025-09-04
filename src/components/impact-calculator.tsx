
'use client';

import { useState } from 'react';
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
  const [donationAmount, setDonationAmount] = useState([50]);

  const currentLevel = impactLevels
    .slice()
    .reverse()
    .find(level => donationAmount[0] >= level.amount);

  return (
    <Card className="max-w-3xl mx-auto mt-12 shadow-2xl border-2 border-primary/20">
      <CardHeader className="text-center">
        <div className="text-5xl font-bold font-headline text-primary">${donationAmount[0]}</div>
        <CardDescription className="text-lg">Slide to see your potential impact</CardDescription>
      </CardHeader>
      <CardContent className="px-8 pb-8">
        <Slider
          defaultValue={[50]}
          max={750}
          step={5}
          onValueChange={setDonationAmount}
          className="my-8"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center mt-8">
            {impactLevels.map((level) => (
                <div key={level.label} className={cn(
                    "flex flex-col items-center p-4 rounded-lg border-2 transition-all",
                    donationAmount[0] >= level.amount 
                        ? 'border-primary bg-primary/10 shadow-lg' 
                        : 'border-dashed border-muted'
                )}>
                    <level.icon className={cn(
                        "h-8 w-8 mb-2",
                        donationAmount[0] >= level.amount ? 'text-primary' : 'text-muted-foreground'
                    )} />
                    <p className={cn(
                        "font-semibold",
                        donationAmount[0] >= level.amount ? 'text-primary-foreground' : 'text-muted-foreground'
                    )}>${level.amount}</p>
                    <p className={cn(
                        "text-sm",
                        donationAmount[0] >= level.amount ? 'text-foreground' : 'text-muted-foreground'
                    )}>{level.label}</p>
                </div>
            ))}
        </div>
        <div className="text-center mt-10">
          <Button size="lg" className="animate-pulse">
            Sponsor Now for ${donationAmount[0]}
            <Heart className="ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
