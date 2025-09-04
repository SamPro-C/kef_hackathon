
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { generateAlumniStory } from '@/ai/flows/alumniStoryFlow';
import { Sparkles, LoaderCircle, Lightbulb } from 'lucide-react';

const counties = [
    "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu",
    "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho",
    "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale",
    "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Meru", "Migori",
    "Marsabit", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi",
    "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita Taveta",
    "Tana River", "Tharaka Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu",
    "Vihiga", "Wajir", "West Pokot"
];

const careerFields = [
  'Technology',
  'Healthcare',
  'Engineering',
  'Education',
  'Agriculture',
  'Business & Entrepreneurship',
  'Law & Justice',
  'Arts & Culture',
];

export default function AlumniMultiplierPage() {
  const [county, setCounty] = useState('');
  const [careerField, setCareerField] = useState('');
  const [story, setStory] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateStory = async () => {
    if (!county || !careerField) {
      setError('Please select a county and a career field.');
      return;
    }
    setError('');
    setIsLoading(true);
    setStory('');
    try {
      const response = await generateAlumniStory({ county, careerField });
      setStory(response.story);
    } catch (e) {
      console.error(e);
      setError('Sorry, there was an error generating the story. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="py-24 md:py-32 flex items-center justify-center text-center bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            The KEF Alumni Multiplier
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto md:text-xl text-muted-foreground">
            Every scholarship creates a future. Select a county and a career, and watch our AI craft a story of a potential KEF scholar. This isn't just a story; it's a future you can help build.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-3xl text-primary">Generate a Future Success Story</CardTitle>
              <CardDescription>See the potential you can unlock.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="county">County of Origin</Label>
                  <Select onValueChange={setCounty} value={county}>
                    <SelectTrigger id="county">
                      <SelectValue placeholder="Select a county" />
                    </SelectTrigger>
                    <SelectContent>
                      {counties.map((c) => (
                        <SelectItem key={c} value={c}>{c}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="career">Future Career Field</Label>
                   <Select onValueChange={setCareerField} value={careerField}>
                    <SelectTrigger id="career">
                      <SelectValue placeholder="Select a career" />
                    </Trigger>
                    <SelectContent>
                      {careerFields.map((field) => (
                        <SelectItem key={field} value={field}>{field}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="text-center">
                <Button onClick={handleGenerateStory} disabled={isLoading || !county || !careerField} size="lg">
                  {isLoading ? (
                    <>
                      <LoaderCircle className="mr-2 h-5 w-5 animate-spin" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Sparkles className="mr-2 h-5 w-5" />
                      Write Their Future
                    </>
                  )}
                </Button>
              </div>
              {error && <p className="text-center text-destructive">{error}</p>}
            </CardContent>
            
            {story && !isLoading && (
              <CardFooter className="flex flex-col gap-4 p-6 bg-muted/50 border-t">
                  <div className="flex items-center gap-3 text-primary">
                    <Lightbulb className="h-8 w-8" />
                    <h3 className="font-headline text-2xl font-bold">A Glimpse into the Future...</h3>
                  </div>
                  <p className="text-foreground/90 whitespace-pre-line">{story}</p>
                   <Button asChild className="mt-4 animate-pulse">
                    <Link href="#">Make a Story Like This Real</Link>
                  </Button>
              </CardFooter>
            )}
          </Card>
        </div>
      </section>
    </>
  );
}
