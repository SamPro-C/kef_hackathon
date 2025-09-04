
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { GraduationCap, School, Milestone, Users, HeartHandshake, BookOpen, Droplets } from 'lucide-react';

export default function Home() {
  return (
    <>
        {/* Hero Section */}
        <section className="relative h-[90vh] min-h-[700px] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop"
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-group-of-students-in-class-listening-to-the-teacher-4537-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative z-20 container mx-auto px-4 md:px-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              Every Child Deserves a Chance to Dream.
            </h1>
            <p className="mt-6 text-lg max-w-3xl mx-auto md:text-xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              From remote villages to global universities, KEF scholarships turn stories of struggle into stories of hope.
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center">
                <GraduationCap className="h-12 w-12 text-secondary" />
                <p className="font-headline text-4xl font-bold mt-2">4,600+</p>
                <p className="text-sm uppercase tracking-wider">Students Supported</p>
              </div>
              <div className="flex flex-col items-center">
                <School className="h-12 w-12 text-secondary" />
                <p className="font-headline text-4xl font-bold mt-2">153</p>
                <p className="text-sm uppercase tracking-wider">Schools Reached</p>
              </div>
              <div className="flex flex-col items-center">
                <Users className="h-12 w-12 text-secondary" />
                <p className="font-headline text-4xl font-bold mt-2">99%</p>
                <p className="text-sm uppercase tracking-wider">Transition to University</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="animate-pulse">
                <Link href="/stories">Begin a Student’s Journey</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/impact">See the Impact</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold text-destructive">
              Without Support, Dreams Fade Away.
            </h2>
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
              <div className="text-left p-6 rounded-lg bg-background shadow-inner">
                <h3 className="font-headline text-2xl font-semibold text-foreground">Without KEF, a student's story often ends here...</h3>
                <p className="mt-4 text-muted-foreground">
                  For many of the 3.5 million children out of school in Kenya, the path is full of obstacles. Girls are at risk of early marriage, while boys face the harsh reality of child labor. Their potential is lost to a cycle of poverty.
                </p>
                <p className="mt-4 font-semibold text-destructive">Out of school. At risk. A dream forgotten.</p>
              </div>
              <div className="text-left p-6 rounded-lg bg-primary text-primary-foreground shadow-lg">
                <h3 className="font-headline text-2xl font-semibold">With KEF, their story can have a new beginning.</h3>
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
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">
              Education is Just the Beginning.
            </h2>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110">
                <BookOpen className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">School Fees & Books</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110">
                <Droplets className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">Sanitary Pads</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110">
                <Users className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">Mentorship</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110">
                <Milestone className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">Bridge Program</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg transition-transform hover:scale-110">
                <GraduationCap className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">University Transition</p>
              </div>
            </div>
            <div className="mt-12">
              <Card className="max-w-2xl mx-auto bg-secondary text-secondary-foreground border-secondary shadow-lg">
                <CardContent className="p-6">
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
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Meet the Scholars Behind the Numbers</h2>
            <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="p-0">
                  <Image src="https://picsum.photos/400/300?random=1" alt="James" width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="student portrait" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline">James</CardTitle>
                  <p className="text-muted-foreground mt-2">“From herding goats in Turkana to studying Computer Science in the USA.”</p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="p-0">
                  <Image src="https://picsum.photos/400/300?random=2" alt="Mary" width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="student smiling" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline">Mary</CardTitle>
                  <p className="text-muted-foreground mt-2">“Escaped child marriage, now mentors 50+ young girls.”</p>
                </CardContent>
              </Card>
              <Card className="transform hover:scale-105 transition-transform duration-300">
                <CardHeader className="p-0">
                  <Image src="https://picsum.photos/400/300?random=3" alt="Peter" width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="graduate portrait" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline">Peter</CardTitle>
                  <p className="text-muted-foreground mt-2">“First in his family to graduate. Now an engineer giving back.”</p>
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
        <section className="py-16 md:py-24 bg-background text-center">
          <div className="container mx-auto px-4 md:px-6">
            <HeartHandshake className="h-16 w-16 text-primary mx-auto" />
            <h2 className="font-headline text-3xl font-bold text-primary mt-4">One Scholarship. Endless Ripples.</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              A single scholarship does more than educate one student. It empowers a graduate to uplift their family, inspire their community, and often, fund new scholarships for others, creating a beautiful, self-sustaining cycle of change.
            </p>
            <p className="mt-6 text-2xl font-bold text-foreground">
              3,172 KEF students have graduated, lifting thousands of families and building stronger communities.
            </p>
          </div>
        </section>
        
        {/* Closing CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-4xl font-bold">You Can Be Part of This Story.</h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="#">🙋 Sponsor a Student</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="/stories">💌 Read a Letter of Hope</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="#">📢 Share the KEF Story</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  );
}
