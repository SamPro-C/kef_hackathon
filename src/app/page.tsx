
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, BookOpen, Users, ChevronDown, HeartHandshake } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Education is the closest thing to magic.";
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    // Prevent hydration errors by running this effect only on the client
    const typeTimer = setTimeout(() => {
      if (typedText.length < fullText.length) {
        setTypedText(fullText.slice(0, typedText.length + 1));
      } else {
        setTimeout(() => setShowScroll(true), 500);
      }
    }, 100);

    return () => clearTimeout(typeTimer);
  }, [typedText]);

  return (
    <>
      {/* Page 1: The Landing Hook */}
      <section className="relative h-screen min-h-[700px] flex flex-col items-center justify-center text-center text-foreground bg-transparent">
        <div className="relative z-20 container mx-auto px-4 md:px-6">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl font-headline" style={{ textShadow: '2px 2px 12px rgba(0,0,0,0.1)' }}>
            {typedText}
            <span className="inline-block w-1 h-12 ml-2 bg-foreground animate-pulse" style={{ opacity: typedText.length === fullText.length ? 0 : 1 }}></span>
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

      {/* Page 2: The KEF Mission */}
      <section className="py-16 md:py-32 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center animate-in">
          <h2 className="text-3xl font-bold text-primary font-headline">
            Changing Lives Through Education
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            For many of Kenya's brightest students, poverty is an impossible barrier. The Kenya Education Fund provides the resources, mentorship, and support they need not just to graduate, but to transform their lives and communities.
          </p>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110 hover:text-primary animate-card-in">
              <GraduationCap className="h-12 w-12 text-primary transition-all duration-300 group-hover:glow" />
              <h3 className="mt-4 text-xl font-bold font-headline">Scholarships</h3>
              <p className="mt-2 text-muted-foreground">Full tuition and fees for all four years of high school.</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110 hover:text-primary animate-card-in" style={{ animationDelay: '0.2s' }}>
              <BookOpen className="h-12 w-12 text-primary transition-all duration-300 group-hover:glow" />
              <h3 className="mt-4 text-xl font-bold font-headline">Resources</h3>
              <p className="mt-2 text-muted-foreground">Beyond fees, we provide uniforms, books, and sanitary supplies.</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110 hover:text-primary animate-card-in" style={{ animationDelay: '0.4s' }}>
              <Users className="h-12 w-12 text-primary transition-all duration-300 group-hover:glow" />
              <h3 className="mt-4 text-xl font-bold font-headline">Mentorship</h3>
              <p className="mt-2 text-muted-foreground">Career readiness and life skills workshops to ensure success.</p>
            </div>
          </div>
          <div className="mt-16">
            <Button asChild size="lg">
              <Link href="/journey">Follow a Scholar's Journey</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Real Stories Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center animate-in">
            <h2 className="text-3xl font-bold text-primary font-headline">Meet the Scholars Behind the Numbers</h2>
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

      {/* Closing CTA */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center animate-in">
            <h2 className="text-4xl font-bold font-headline">You Can Be Part of This Story.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse">
                <Link href="https://www.kenyaeducationfund.org/sponsor-a-student" target="_blank">
                  <HeartHandshake className="mr-2 h-5 w-5" />Sponsor a Student
                </Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  );
}
