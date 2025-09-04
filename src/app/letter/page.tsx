'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2 } from 'lucide-react';
import { generateLetter, LetterRequest } from '@/ai/flows/generate-letter';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const counties = [ "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita Taveta", "Tana River", "Tharaka Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot" ];
const careers = [ "Software Engineer", "Doctor", "Civil Engineer", "Teacher", "Nurse", "Entrepreneur", "Lawyer", "Journalist" ];
const names = [ "James", "Mary", "Peter", "Aisha", "Kevin", "Grace", "Samuel", "Fatuma", "David", "Sarah" ];


export default function LetterPage() {
  const [county, setCounty] = useState('Turkana');
  const [career, setCareer] = useState('Doctor');
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setIsLoading(true);
    setGeneratedLetter('');

    const randomName = names[Math.floor(Math.random() * names.length)];

    const request: LetterRequest = {
        name: randomName,
        county,
        career
    };

    try {
      const result = await generateLetter(request);
      setGeneratedLetter(result.letter);
    } catch (error) {
      console.error('Error generating letter:', error);
      toast({
        title: "An error occurred",
        description: "We couldn't generate the letter. Please try again.",
        variant: 'destructive'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 flex items-center justify-center text-center bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            A Letter of Hope
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto md:text-xl text-muted-foreground">
            Behind every application is a real story of struggle and a dream for the future. Generate a letter to see the kind of life you could change today.
          </p>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-2xl mx-auto shadow-neumorphic-outset">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl">Generate a Student's Story</CardTitle>
              <CardDescription>Select a county and a career to generate a unique story.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                    <Label htmlFor="county-select">County of Origin</Label>
                    <Select value={county} onValueChange={setCounty}>
                        <SelectTrigger id="county-select">
                            <SelectValue placeholder="Select a county" />
                        </SelectTrigger>
                        <SelectContent>
                            {counties.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
                 <div className="space-y-2">
                    <Label htmlFor="career-select">Aspired Career</Label>
                    <Select value={career} onValueChange={setCareer}>
                        <SelectTrigger id="career-select">
                            <SelectValue placeholder="Select a career" />
                        </SelectTrigger>
                        <SelectContent>
                            {careers.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                    </Select>
                </div>
              </div>
              
              <Button onClick={handleGenerate} disabled={isLoading} className="w-full" size="lg">
                {isLoading ? <Loader2 className="animate-spin" /> : <Wand2 className="mr-2" />}
                {isLoading ? 'Generating Story...' : 'Write a Letter of Hope'}
              </Button>

              {generatedLetter && (
                <div className="mt-8 p-6 rounded-lg bg-card shadow-neumorphic-inset">
                  <h3 className="font-headline text-xl font-bold mb-4 text-primary">A Message From a Future Leader...</h3>
                  <Textarea
                    readOnly
                    value={generatedLetter}
                    className="w-full h-64 text-base bg-transparent border-none shadow-none focus-visible:ring-0"
                  />
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}
