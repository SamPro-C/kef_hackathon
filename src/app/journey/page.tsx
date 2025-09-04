
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, MapPin, School, GraduationCap, Briefcase, HeartHandshake, ArrowRight } from 'lucide-react';

export default function JourneyPage() {
  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <Image
          src="https://picsum.photos/1600/900?random=15"
          alt="A hopeful student in Kenya"
          fill
          className="object-cover"
          data-ai-hint="student portrait smiling"
        />
        <div className="relative z-20 container mx-auto px-4 md:px-6 text-white">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
            The Journey of a KEF Scholar
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto md:text-xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
            Follow the transformative path of a student whose life was changed by a single scholarship. This is the story of James.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-5 top-0 h-full w-0.5 bg-border -z-10 md:left-1/2 md:-translate-x-1/2"></div>

            {/* Stage 1: The Beginning */}
            <div className="relative flex items-center md:justify-start mb-16">
              <div className="hidden md:block w-1/2 pr-8">
                <Image src="https://picsum.photos/600/400?random=16" alt="Turkana landscape" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="kenyan village landscape" />
              </div>
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 bg-background">
                <div className="z-10 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-md">
                  <MapPin className="h-5 w-5" />
                </div>
              </div>
              <Card className="w-full md:w-1/2 md:ml-8">
                <CardHeader>
                  <CardDescription>Step 1: The Beginning</CardDescription>
                  <CardTitle className="font-headline">A Dream in the Dust</CardTitle>
                </CardHeader>
                <CardContent>
                   <Image src="https://picsum.photos/600/400?random=16" alt="Turkana landscape" width={600} height={400} className="rounded-lg shadow-lg md:hidden mb-4" data-ai-hint="kenyan village landscape" />
                  <p className="text-muted-foreground">James grew up in Turkana County, a region facing harsh droughts. Brilliant and determined, he excelled in primary school. But with his family struggling to afford food, the dream of high school seemed impossible. He was on the verge of becoming another statistic.</p>
                </CardContent>
              </Card>
            </div>

            {/* Stage 2: KEF Intervention */}
            <div className="relative flex items-center md:justify-end mb-16">
               <div className="hidden md:block w-1/2 pl-8 text-right">
                  <Image src="https://picsum.photos/600/400?random=17" alt="KEF Mentorship session" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="mentor helping student" />
              </div>
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 bg-background">
                <div className="z-10 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-md">
                  <HeartHandshake className="h-5 w-5" />
                </div>
              </div>
              <Card className="w-full md:w-1/2 md:mr-8">
                <CardHeader>
                  <CardDescription>Step 2: A Glimmer of Hope</CardDescription>
                  <CardTitle className="font-headline">The KEF Scholarship</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image src="https://picsum.photos/600/400?random=17" alt="KEF Mentorship session" width={600} height={400} className="rounded-lg shadow-lg md:hidden mb-4" data-ai-hint="mentor helping student" />
                  <p className="text-muted-foreground">Just when he was about to give up, James was awarded a KEF scholarship. It was more than just school fees; it was a promise. With tuition, supplies, and mentorship workshops, KEF gave him the tools not just to attend school, but to thrive.</p>
                </CardContent>
              </Card>
            </div>

            {/* Stage 3: High School & University */}
            <div className="relative flex items-center md:justify-start mb-16">
               <div className="hidden md:block w-1/2 pr-8">
                <Image src="https://picsum.photos/600/400?random=18" alt="Student graduating" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="student graduation ceremony" />
              </div>
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 bg-background">
                <div className="z-10 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-md">
                  <GraduationCap className="h-5 w-5" />
                </div>
              </div>
              <Card className="w-full md:w-1/2 md:ml-8">
                <CardHeader>
                  <CardDescription>Step 3: Unlocking Potential</CardDescription>
                  <CardTitle className="font-headline">From Village School to Global Stage</CardTitle>
                </CardHeader>
                <CardContent>
                   <Image src="https://picsum.photos/600/400?random=18" alt="Student graduating" width={600} height={400} className="rounded-lg shadow-lg md:hidden mb-4" data-ai-hint="student graduation ceremony" />
                  <p className="text-muted-foreground">Freed from financial worry, James soared. He became a top student, leading his school's science club. With KEF's guidance, he not only excelled in his exams but also earned a scholarship to study Computer Science at a university in the United States.</p>
                </CardContent>
              </Card>
            </div>

             {/* Stage 4: Career & Giving Back */}
            <div className="relative flex items-center md:justify-end mb-16">
               <div className="hidden md:block w-1/2 pl-8 text-right">
                  <Image src="https://picsum.photos/600/400?random=19" alt="Professional at work" width={600} height={400} className="rounded-lg shadow-lg" data-ai-hint="professional software engineer" />
              </div>
              <div className="absolute left-5 md:left-1/2 -translate-x-1/2 bg-background">
                <div className="z-10 flex items-center justify-center h-10 w-10 rounded-full bg-primary text-primary-foreground shadow-md">
                  <Briefcase className="h-5 w-5" />
                </div>
              </div>
              <Card className="w-full md:w-1/2 md:mr-8">
                <CardHeader>
                  <CardDescription>Step 4: The Ripple Effect</CardDescription>
                  <CardTitle className="font-headline">Building a New Future</CardTitle>
                </CardHeader>
                <CardContent>
                   <Image src="https://picsum.photos/600/400?random=19" alt="Professional at work" width={600} height={400} className="rounded-lg shadow-lg md:hidden mb-4" data-ai-hint="professional software engineer" />
                  <p className="text-muted-foreground">Today, James is a software engineer. But he hasn't forgotten where he came from. He mentors other KEF students and has started a coding bootcamp in Turkana, using his skills to create opportunities for the next generation. His journey has come full circle.</p>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </div>
       {/* Closing CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-4xl font-bold">You can start another journey today.</h2>
          <p className="mt-4 max-w-2xl mx-auto">One scholarship is all it takes to change a life like James's.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="animate-pulse">
              <Link href="#">🙋 Sponsor a Student</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/stories">Explore More Stories <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
