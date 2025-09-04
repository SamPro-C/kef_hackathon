
'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, School, Milestone, Users, HeartHandshake, BookOpen, Droplets, Mail, Share2, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Education is the closest thing to magic.";
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const typeTimer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      } else {
        // When typing is done, wait a bit then show the scroll indicator
        setTimeout(() => setShowScroll(true), 500);
      }
    }, 100); // Slower typing speed

    return () => clearTimeout(typeTimer);
  }, [typedText]);

  return (
    <>
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center text-center text-white bg-transparent">
          <div className="relative z-20 container mx-auto px-4 md:px-6">
             <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.3)' }}>
              {typedText}
              <span className="inline-block w-1 h-12 ml-2 bg-white animate-pulse" style={{ opacity: typedText.length === fullText.length ? 0 : 1 }}></span>
            </h1>
          </div>
          <div className={cn(
              "absolute bottom-10 z-20 flex flex-col items-center gap-2 transition-opacity duration-1000",
              showScroll ? "opacity-100" : "opacity-0"
            )}>
              <span className="text-sm font-medium">Scroll to Begin</span>
              <ChevronDown className="h-8 w-8 animate-bounce-slow" />
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center animate-in">
            <h2 className="text-3xl font-bold text-destructive">
              Without Support, Dreams Fade Away.
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <div className="text-left p-6 rounded-lg bg-background shadow-lg">
                <h3 className="text-2xl font-semibold text-foreground">Without KEF, a student's story often ends here...</h3>
                <p className="mt-4 text-muted-foreground">
                  For many of the 3.5 million children out of secondary school in Kenya, the path is full of obstacles. Girls are at high risk of early marriage, while boys face the harsh reality of child labor. Their potential is lost to a cycle of poverty.
                </p>
                <p className="mt-4 font-semibold text-destructive">Out of school. At risk. A dream forgotten.</p>
              </div>
              <div className="text-left p-6 rounded-lg bg-primary text-primary-foreground shadow-lg">
                <h3 className="text-2xl font-semibold">With KEF, their story can have a new beginning.</h3>
                <p className="mt-4 opacity-90">
                  KEF provides scholarships, mentorship, and a safe place to learn. We step in to ensure that a lack of resources doesn't mean a lack of a future. Students are empowered to finish their education and rewrite their destinies.
                </p>
                <p className="mt-4 font-semibold">Back in school. Safe. A dream rediscovered.</p>
              </div>
            </div>
            <p className="mt-8 text-xl font-semibold text-foreground">
              One scholarship can change the entire story.
            </p>
          </div>
        </section>

        {/* The KEF Solution Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center animate-in">
            <h2 className="text-3xl font-bold text-primary">
              A Scholarship is More Than Just School Fees.
            </h2>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110">
                <BookOpen className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">Full Tuition Paid</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110">
                <Droplets className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">Sanitary Pads & Supplies</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110">
                <Users className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">Mentorship Workshops</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110">
                <Milestone className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">Career Readiness</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110">
                <GraduationCap className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">University Transition</p>              </div>
            </div>
            <div className="mt-12">
              <Card className="max-w-2xl mx-auto bg-card text-foreground border-none shadow-lg">
                <CardContent className="p-6 text-center">
                  <p className="text-lg font-semibold">
                    “While only 20% of students nationally reach university, 99% of KEF students make it.”
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Real Stories Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center animate-in">
            <h2 className="text-3xl font-bold text-primary">Meet the Scholars Behind the Numbers</h2>
            <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="p-0">
                  <Image src="https://picsum.photos/400/300?random=1" alt="James" width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="student portrait" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>James</CardTitle>
                  <p className="text-muted-foreground mt-2">“From herding goats in Turkana to studying Computer Science in the USA.”</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-0">
                  <Image src="https://picsum.photos/400/300?random=2" alt="Mary" width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="student smiling" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>Mary</CardTitle>
                  <p className="text-muted-foreground mt-2">“Escaped early marriage, now a medical student and mentor to young girls.”</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-0">
                  <Image src="https://picsum.photos/400/300?random=3" alt="Peter" width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="graduate portrait" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle>Peter</CardTitle>
                  <p className="text-muted-foreground mt-2">“First in his family to graduate. Now an engineer building a new future.”</p>
                </CardContent>
              </Card>
            </div>
             <div className="mt-8">
                <Button asChild size="lg" variant="link" className="text-primary text-lg">
                    <Link href="/stories">Read More Success Stories →</Link>
                </Button>
            </div>
          </div>
        </section>

        {/* The Ripple Effect Section */}
        <section className="py-16 md:py-24 bg-background text-center animate-in">
          <div className="container mx-auto px-4 md:px-6">
            <HeartHandshake className="h-16 w-16 text-primary mx-auto" />
            <h2 className="text-3xl font-bold text-primary mt-4">One Scholarship. Endless Ripples.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A single scholarship does more than educate one student. It empowers a graduate to uplift their family, inspire their community, and often, fund new scholarships for others, creating a beautiful, self-sustaining cycle of change.
            </p>
            <p className="mt-6 text-2xl font-bold text-foreground">
              Over 3,172 KEF students have graduated, lifting thousands of families and building stronger communities.
            </p>
          </div>
        </section>
        
        {/* Closing CTA */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center animate-in">
            <h2 className="text-4xl font-bold">You Can Be Part of This Story.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse">
                <Link href="https://www.kenyaeducationfund.org/sponsor-a-student" target="_blank">
                  <HeartHandshake />Sponsor a Student
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="https://www.kenyaeducationfund.org/get-involved" target="_blank">
                  <Share2 />Share the KEF Story
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  );
}
