
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { GraduationCap, School, Milestone, Users, HeartHandshake, BookOpen, Droplets, ShieldCheck, ArrowRight, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-students-in-a-classroom-watching-a-presentation-4351-large.mp4" type="video/mp4" />
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
                <p className="text-4xl font-bold mt-2">4,600+</p>
                <p className="text-sm uppercase tracking-wider">Students Supported</p>
              </div>
              <div className="flex flex-col items-center">
                <School className="h-12 w-12 text-secondary" />
                <p className="text-4xl font-bold mt-2">153</p>
                <p className="text-sm uppercase tracking-wider">Schools Reached</p>
              </div>
              <div className="flex flex-col items-center">
                <TrendingUp className="h-12 w-12 text-secondary" />
                <p className="text-4xl font-bold mt-2">99%</p>
                <p className="text-sm uppercase tracking-wider">Transition to University</p>
              </div>
            </div>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse">
                <Link href="#">Begin a Student’s Journey</Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="#">See the Impact</Link>
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
            <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left p-6 rounded-lg bg-background">
                <h3 className="font-headline text-2xl font-semibold text-foreground">Without KEF</h3>
                <p className="mt-4 text-muted-foreground">
                  3.5M+ children in Kenya are out of school. Girls face child marriage and early pregnancy, while boys risk child labor and crime. Their potential is lost to a cycle of poverty.
                </p>
                <p className="mt-4 font-semibold text-destructive">Out of school. At risk. Forgotten.</p>
              </div>
              <div className="text-left p-6 rounded-lg bg-primary text-primary-foreground">
                <h3 className="font-headline text-2xl font-semibold">With KEF</h3>
                <p className="mt-4 opacity-90">
                  KEF provides scholarships, mentorship, and resources, giving students a safe environment to learn and thrive. They are empowered to complete their education and build a future.
                </p>
                <p className="mt-4 font-semibold">Back in school. Safe. Thriving.</p>
              </div>
            </div>
            <p className="mt-8 text-xl font-semibold">
              ✨ But one scholarship can change everything.
            </p>
          </div>
        </section>

        {/* The KEF Solution Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">
              Education is Just the Beginning.
            </h2>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
              <div className="flex flex-col items-center p-4">
                <BookOpen className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">School Fees & Books</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <Droplets className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">Sanitary Pads</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <Users className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">Mentorship</p>
              </div>
              <div className="flex flex-col items-center p-4">
                <Milestone className="h-10 w-10 text-primary" />
                <p className="mt-2 font-semibold">Bridge Program</p>
              </div>
              <div className="flex flex-col items-center p-4">
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
              <Card>
                <CardHeader>
                  <Image src="https://picsum.photos/400/300?random=1" alt="James" width={400} height={300} className="rounded-t-lg object-cover" data-ai-hint="student portrait" />
                </CardHeader>
                <CardContent>
                  <CardTitle>James</CardTitle>
                  <p className="text-muted-foreground mt-2">“From herding goats in Turkana to studying Computer Science in the USA.”</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image src="https://picsum.photos/400/300?random=2" alt="Mary" width={400} height={300} className="rounded-t-lg object-cover" data-ai-hint="student smiling" />
                </CardHeader>
                <CardContent>
                  <CardTitle>Mary</CardTitle>
                  <p className="text-muted-foreground mt-2">“Escaped child marriage, now mentors 50+ young girls.”</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Image src="https://picsum.photos/400/300?random=3" alt="Peter" width={400} height={300} className="rounded-t-lg object-cover" data-ai-hint="graduate portrait" />
                </CardHeader>
                <CardContent>
                  <CardTitle>Peter</CardTitle>
                  <p className="text-muted-foreground mt-2">“First in his family to graduate. Now an engineer giving back.”</p>
                </CardContent>
              </Card>
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
                <Link href="#">💌 Read a Letter of Hope</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="#">📢 Share the KEF Story</Link>
              </Button>
            </div>
          </div>
        </section>

      </main>
      <footer className="bg-foreground text-background py-6">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p>&copy; 2024 KEF Storytelling Project. A hackathon entry for KEF.</p>
        </div>
      </footer>
    </div>
  );
}
