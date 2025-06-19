import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, BookOpenText, HandCoins, Sparkles, HeartHandshake } from 'lucide-react';
import Image from 'next/image';

const dashboardSections = [
  {
    title: 'Explore College Courses',
    description: 'Discover courses offered in various Kenyan colleges and universities.',
    href: '/courses',
    icon: BookOpenText,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'education library',
  },
  {
    title: 'Find Financial Aid',
    description: 'Browse scholarships, bursaries, and loan opportunities.',
    href: '/financial-aid',
    icon: HandCoins,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'graduation money',
  },
  {
    title: 'Get Personalized Recommendations',
    description: 'Use our AI tool to find colleges and courses tailored to you.',
    href: '/recommendations',
    icon: Sparkles,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'ai future',
  },
  {
    title: 'Student Wellbeing Resources',
    description: 'Access advice and support for your mental and physical health.',
    href: '/wellbeing',
    icon: HeartHandshake,
    image: 'https://placehold.co/600x400.png',
    imageHint: 'student wellness',
  },
];

export default function DashboardPage() {
  return (
    <div className="container mx-auto py-8">
      <section className="mb-12 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl lg:text-6xl">
          Welcome to EduConnect Kenya
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Your central hub for navigating higher education in Kenya.
        </p>
      </section>

      <section className="mb-12">
        <Card className="bg-primary/10 shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-primary">Featured Highlight</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col md:flex-row items-center gap-6">
            <Image 
              src="https://placehold.co/400x300.png" 
              alt="Students studying" 
              width={400} 
              height={300} 
              className="rounded-lg object-cover"
              data-ai-hint="kenyan students" 
            />
            <div>
              <h3 className="font-headline text-xl font-semibold mb-2">Unlock Your Future</h3>
              <p className="text-muted-foreground mb-4">
                EduConnect Kenya provides comprehensive resources to help you make informed decisions about your education and career path. Explore courses, find financial aid, and get personalized advice to achieve your academic goals.
              </p>
              <Link href="/recommendations" passHref>
                <Button variant="default" size="lg">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="font-headline mb-8 text-center text-3xl font-semibold text-primary">
          Explore Our Resources
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          {dashboardSections.map((section) => (
            <Card key={section.title} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
              <div className="relative h-48 w-full">
                <Image 
                  src={section.image} 
                  alt={section.title} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={section.imageHint}
                />
              </div>
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <section.icon className="h-8 w-8 text-primary" />
                  <CardTitle className="font-headline text-xl">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription>{section.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0">
                <Link href={section.href} passHref>
                  <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/10">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
