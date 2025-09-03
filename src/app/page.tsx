import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ArrowRight, Banknote, MapPin, Milestone, Quote } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';


export default function KEFJourneyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 border-b bg-background/80 backdrop-blur-sm">
        <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold font-headline text-primary">KEF Journey 98%</h1>
        </div>
        <Button asChild>
            <Link href="#donate">Donate Now</Link>
        </Button>
      </header>

      <main className="flex-1">
        <section className="relative text-center py-20 md:py-32 lg:py-40">
          <div className="container z-10 px-4 mx-auto md:px-6">
              <h1 className="text-4xl font-bold tracking-tight font-headline text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                From Village to University.
              </h1>
              <p className="max-w-3xl mx-auto mt-6 text-lg text-foreground md:text-xl">
                KEF has a 98% success rate in transitioning students to university. This is their story. Discover the journeys of thousands of students whose lives were transformed by education.
              </p>
              <div className="mt-10">
                <Button asChild size="lg">
                  <Link href="#journey">
                    Explore the Journey <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
          </div>
        </section>

        <section id="journey" className="py-16 md:py-24 bg-card">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid items-center gap-8 md:grid-cols-2 lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold font-headline text-primary">The KEF Journey</h2>
                <p className="mt-4 text-muted-foreground">
                  Follow the path of a KEF scholar, from a hopeful applicant in a rural village to a university graduate ready to change the world. Our interactive map and timeline bring these transformative stories to life, showcasing the real impact of donor support.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                        <MapPin size={24} className="text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Interactive Success Map</h3>
                      <p className="text-muted-foreground">Visualize the nationwide reach of KEF and see where alumni are making an impact.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                     <div className="flex-shrink-0">
                        <Milestone size={24} className="text-primary" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Student Timelines</h3>
                      <p className="text-muted-foreground">Discover individual stories of perseverance, growth, and success.</p>
                    </div>
                  </li>
                </ul>
                 <Button asChild className="mt-8" variant="secondary">
                  <Link href="/map">
                    Launch Interactive Map
                  </Link>
                </Button>
              </div>
              <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg">
                 <Image
                    src="https://picsum.photos/600/400"
                    alt="A hopeful student in Kenya"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                    data-ai-hint="kenyan student portrait"
                  />
              </div>
            </div>
          </div>
        </section>

        <section id="donate" className="py-16 md:py-24 bg-background">
            <div className="container px-4 mx-auto md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <Banknote className="w-16 h-16 mx-auto text-primary" />
                    <h2 className="mt-4 text-3xl font-bold font-headline text-primary">Your Impact, Visualized</h2>
                    <p className="mt-4 text-muted-foreground">
                        100% of your donation supports students directly. See how your contribution can change a life.
                    </p>
                    <div className="p-8 mt-8 text-left border rounded-lg bg-card shadow-lg">
                        <h3 className="text-xl font-bold text-center text-primary">Impact Calculator</h3>
                        <p className="mt-2 text-center text-muted-foreground">Coming soon! A tool to show exactly what your donation can provide, from school fees to university scholarships.</p>
                        <div className="mt-6 space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-md bg-background">
                                <span className="font-semibold">Donation Amount: $50</span>
                                <span className="font-semibold text-primary">→ 1 Year of Textbooks</span>
                            </div>
                             <div className="flex items-center justify-between p-4 rounded-md bg-background">
                                <span className="font-semibold">Donation Amount: $150</span>
                                <span className="font-semibold text-primary">→ Full School Uniform</span>
                            </div>
                             <div className="flex items-center justify-between p-4 rounded-md bg-background">
                                <span className="font-semibold">Donation Amount: $800</span>
                                <span className="font-semibold text-primary">→ A Year of Tuition</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="alumni" className="py-16 md:py-24 bg-card">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight font-headline text-primary sm:text-4xl">Alumni Story Spotlight</h2>
              <p className="max-w-2xl mx-auto mt-4 text-lg text-muted-foreground">
                Our alumni are doctors, engineers, entrepreneurs, and leaders. They are the living proof of KEF's impact, giving back to their communities and inspiring the next generation.
              </p>
            </div>

            <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/100/100" data-ai-hint="female portrait" />
                      <AvatarFallback>SN</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">Sarah Nduta</CardTitle>
                      <CardDescription>Software Engineer, Google</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <Quote className="w-6 h-6 mb-2 text-primary" />
                  <p className="italic text-muted-foreground">
                    "KEF didn't just give me an education; it gave me a future. Now, I'm mentoring young girls in my village to pursue careers in tech."
                  </p>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/100/100" data-ai-hint="male portrait" />
                      <AvatarFallback>JO</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">James Omondi</CardTitle>
                      <CardDescription>Doctor, Aga Khan Hospital</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                  <Quote className="w-6 h-6 mb-2 text-primary" />
                  <p className="italic text-muted-foreground">
                    "Thanks to my KEF scholarship, I was able to attend medical school. Today, I run a mobile clinic that provides free healthcare in rural areas."
                  </p>
                </CardContent>
              </Card>

              <Card className="flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src="https://picsum.photos/100/100" data-ai-hint="female portrait smiling" />
                      <AvatarFallback>MW</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle className="text-xl">Mercy Wanjiru</CardTitle>
                      <CardDescription>Founder, Eco-Briquettes Startup</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-1">
                   <Quote className="w-6 h-6 mb-2 text-primary" />
                  <p className="italic text-muted-foreground">
                    "The entrepreneurial skills I learned through KEF's workshops helped me launch my own sustainable energy company. We're creating jobs and protecting the environment."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="py-6 text-center border-t bg-card text-muted-foreground">
        <div className="container px-4 mx-auto md:px-6">
            <p>&copy; 2024 KEF Journey 98. A hackathon project.</p>
        </div>
      </footer>
    </div>
  );
}
