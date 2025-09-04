
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, School, Users, HeartHandshake, ArrowRight } from 'lucide-react';

export default function StoriesPage() {
  return (
    <>
        {/* Hero Section */}
        <section className="relative py-32 md:py-48 flex items-center justify-center text-center">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <Image
            src="https://picsum.photos/1600/800?random=10"
            alt="Collage of student faces"
            fill
            className="object-cover"
            data-ai-hint="diverse students smiling"
          />
          <div className="relative z-20 container mx-auto px-4 md:px-6 text-white">
            <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}>
              Behind Every Scholarship is a Story.
            </h1>
            <p className="mt-6 text-lg max-w-3xl mx-auto md:text-xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
              From dusty roads in rural Kenya to world-class universities, KEF students carry stories of resilience, hope, and transformation.
            </p>
          </div>
        </section>

        {/* Featured Story Section - James */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="grid md:grid-cols-2 overflow-hidden shadow-2xl">
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-headline text-3xl font-bold text-primary">James: From Herding Goats to Coding in the USA</h2>
                <p className="mt-4 text-muted-foreground text-lg">
                  “I used to herd goats under the scorching sun, dreaming of a classroom I could never reach. Today, I write code in a university computer lab in the USA. This is what KEF made possible.” – James
                </p>
                <p className="mt-6 text-foreground">
                  James grew up in Turkana, one of Kenya’s most arid regions. Most days, he walked miles to fetch water for his family and helped herd goats. Education felt like a distant dream — his parents could not afford school fees, books, or even a uniform. At 14 years old, James was on the verge of dropping out completely. That’s when the Kenya Education Fund (KEF) stepped in.
                </p>
                 <p className="mt-4 text-foreground font-semibold">
                   With KEF’s support, James not only excelled academically but also discovered a passion for technology. Today, he is studying Computer Science at a top university in the USA and giving back by mentoring other KEF students online.
                </p>
                <Button asChild size="lg" className="mt-8 w-fit">
                  <Link href="#">Read James' Full Journey <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
              <div className="relative min-h-[300px] md:min-h-[500px]">
                <Image
                  src="https://picsum.photos/600/800?random=4"
                  alt="James smiling in a computer lab"
                  fill
                  className="object-cover"
                  data-ai-hint="male student computer lab"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* Featured Story Section - Mary */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <Card className="grid md:grid-cols-2 overflow-hidden shadow-2xl">
              <div className="relative min-h-[300px] md:min-h-[500px] order-last md:order-first">
                <Image
                  src="https://picsum.photos/600/800?random=5"
                  alt="Mary in a lab coat"
                  fill
                  className="object-cover"
                  data-ai-hint="female student medical"
                />
              </div>
              <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                <h2 className="font-headline text-3xl font-bold text-primary">Mary: From Early Marriage Risk to Medical School</h2>
                <p className="mt-4 text-muted-foreground text-lg">
                 “At 15, my community wanted me to marry. KEF gave me another choice — the chance to stay in school. Now, I am training to be a doctor.” – Mary
                </p>
                <p className="mt-6 text-foreground">
                  Mary grew up in Kajiado County, where many girls face the pressure of early marriage and FGM. Her parents loved her deeply but lacked the resources to pay school fees, and cultural traditions meant she was at risk of leaving school forever. Just before she dropped out, Mary’s life changed when she received a KEF scholarship.
                </p>
                 <p className="mt-4 text-foreground font-semibold">
                  With KEF's support, Mary thrived. She became a top performer in her high school, and today is studying Medicine at the University of Nairobi, inspired to serve underserved communities.
                </p>
                <Button asChild size="lg" className="mt-8 w-fit">
                  <Link href="#">Read Mary's Full Journey <ArrowRight className="ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Swipeable Story Cards Section */}
        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">More Journeys of Hope</h2>
            <div className="mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-left">
                <CardHeader className="p-0">
                  <Image src="https://picsum.photos/400/300?random=6" alt="Peter" width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="male engineer outdoors" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline">Peter</CardTitle>
                  <p className="text-muted-foreground mt-2">He was the first in his village to finish high school. Today, he’s an engineer building bridges and funding two new KEF scholarships himself.</p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader className="p-0">
                  <Image src="https://picsum.photos/400/300?random=7" alt="Aisha" width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="female doctor hospital" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline">Aisha</CardTitle>
                  <p className="text-muted-foreground mt-2">After losing her parents, she had to drop out. KEF brought her back. Today, she's a nurse saving lives in her local clinic.</p>
                </CardContent>
              </Card>
              <Card className="text-left">
                <CardHeader className="p-0">
                  <Image src="https://picsum.photos/400/300?random=8" alt="Kevin" width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="male leader speaking" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline">Kevin</CardTitle>
                  <p className="text-muted-foreground mt-2">He nearly gave up due to family hardship. Now, he’s a community leader and a KEF mentor for over 30 students.</p>
                </CardContent>
              </Card>
               <Card className="text-left">
                <CardHeader className="p-0">
                  <Image src="https://picsum.photos/400/300?random=9" alt="Grace" width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="student writing" />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="font-headline">Grace</CardTitle>
                  <p className="text-muted-foreground mt-2">She saw injustice in her village. Today, she's studying law to fight for the rights of girls who have no voice.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Impact Stats Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Behind the Numbers are Real Lives Changed</h2>
            <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card transition-colors cursor-pointer">
                <GraduationCap className="h-12 w-12 text-primary" />
                <p className="font-headline text-3xl md:text-4xl font-bold mt-2">4,600+</p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Scholarships Awarded</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card transition-colors cursor-pointer">
                <School className="h-12 w-12 text-primary" />
                <p className="font-headline text-3xl md:text-4xl font-bold mt-2">153</p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Schools Reached</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card transition-colors cursor-pointer">
                <Users className="h-12 w-12 text-primary" />
                <p className="font-headline text-3xl md:text-4xl font-bold mt-2">99%</p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">University Transition</p>
              </div>
              <div className="flex flex-col items-center p-4 rounded-lg hover:bg-card transition-colors cursor-pointer">
                <HeartHandshake className="h-12 w-12 text-primary" />
                <p className="font-headline text-3xl md:text-4xl font-bold mt-2">3,172</p>
                <p className="text-sm uppercase tracking-wider text-muted-foreground">Graduates</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Closing CTA */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-4xl font-bold">These are not just their stories. They can be ours, too.</h2>
            <p className="mt-4 max-w-2xl mx-auto">Your action today can write the next success story.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="#">🙋 Sponsor a Student</Link>
              </Button>
               <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                <Link href="#">📢 Share a Story</Link>
              </Button>
            </div>
          </div>
        </section>
    </>
  );
}
