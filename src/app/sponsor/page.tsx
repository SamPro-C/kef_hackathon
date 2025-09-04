'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Loader2, Wand2, Heart, BookOpen, Shirt, ShoppingCart } from 'lucide-react';
import { generateLetter, LetterRequest } from '@/ai/flows/generate-letter';
import { useToast } from '@/hooks/use-toast';
import { Label } from '@/components/ui/label';

const counties = [ "Baringo", "Bomet", "Bungoma", "Busia", "Elgeyo Marakwet", "Embu", "Garissa", "Homa Bay", "Isiolo", "Kajiado", "Kakamega", "Kericho", "Kiambu", "Kilifi", "Kirinyaga", "Kisii", "Kisumu", "Kitui", "Kwale", "Laikipia", "Lamu", "Machakos", "Makueni", "Mandera", "Marsabit", "Meru", "Migori", "Mombasa", "Murang'a", "Nairobi", "Nakuru", "Nandi", "Narok", "Nyamira", "Nyandarua", "Nyeri", "Samburu", "Siaya", "Taita Taveta", "Tana River", "Tharaka Nithi", "Trans Nzoia", "Turkana", "Uasin Gishu", "Vihiga", "Wajir", "West Pokot" ];
const careers = [ "Software Engineer", "Doctor", "Civil Engineer", "Teacher", "Nurse", "Entrepreneur", "Lawyer", "Journalist" ];
const names = [ "James", "Mary", "Peter", "Aisha", "Kevin", "Grace", "Samuel", "Fatuma", "David", "Sarah" ];

const sponsorshipTiers = [
    {
      amount: 750,
      title: 'Full Scholarship',
      description: 'Fund a student\'s entire high school education for one year, including tuition, room, and board.',
      icon: Heart,
    },
    {
      amount: 100,
      title: 'School Supplies',
      description: 'Provide a student with all the necessary school supplies, including uniforms and shoes, for a year.',
      icon: ShoppingCart,
    },
    {
      amount: 50,
      title: 'Uniform & Shoes',
      description: 'Equip a student with a new school uniform and a sturdy pair of shoes for the school year.',
      icon: Shirt,
    },
    {
      amount: 25,
      title: 'Textbooks for a Term',
      description: 'Give a student the gift of knowledge with all the required textbooks for one term.',
      icon: BookOpen,
    },
];

export default function SponsorPage() {
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
            Sponsor a Student's Dream
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto md:text-xl text-muted-foreground">
            Your gift is more than a donation; it's an investment in a future leader. Choose a sponsorship level or read a letter of hope to see the lives you can change.
          </p>
        </div>
      </section>

      {/* Sponsorship Tiers Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center font-headline text-primary mb-12">Choose Your Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {sponsorshipTiers.map((tier) => (
                    <Card key={tier.title} className="flex flex-col text-center">
                        <CardHeader>
                            <div className="mx-auto bg-primary/10 rounded-full p-4 w-fit mb-4">
                                <tier.icon className="h-10 w-10 text-primary" />
                            </div>
                            <CardTitle className="font-headline text-2xl">${tier.amount}</CardTitle>
                            <CardDescription className="font-semibold text-lg">{tier.title}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                            <p className="text-muted-foreground">{tier.description}</p>
                        </CardContent>
                        <div className="p-6 pt-0">
                            <Button size="lg" className="w-full">Donate ${tier.amount}</Button>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* Generator Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <Card className="max-w-2xl mx-auto shadow-neumorphic-outset border-none">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl">Read a Letter of Hope</CardTitle>
              <CardDescription>Can't decide? Generate a letter to see the kind of life you could change today.</CardDescription>
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
                <div className="mt-8 p-6 rounded-lg bg-background shadow-neumorphic-inset">
                  <h3 className="font-headline text-xl font-bold mb-4 text-primary">A Message From a Future Leader...</h3>
                  <Textarea
                    readOnly
                    value={generatedLetter}
                    className="w-full h-64 text-base bg-transparent border-none shadow-none focus-visible:ring-0 p-0"
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
