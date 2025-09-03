import { Button } from '@/components/ui/button';
import { ArrowRight, Trophy, Users, Lightbulb, GraduationCap, Banknote, HeartHandshake, Leaf, Milestone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const sponsors = [
  { name: 'Safaricom', logo: 'https://via.placeholder.com/150x60.png/000000/FFFFFF?text=Safaricom' },
  { name: 'Microsoft', logo: 'https://via.placeholder.com/150x60.png/000000/FFFFFF?text=Microsoft' },
  { name: 'Google', logo: 'https://via.placeholder.com/150x60.png/000000/FFFFFF?text=Google' },
  { name: 'Mastercard Foundation', logo: 'https://via.placeholder.com/150x60.png/000000/FFFFFF?text=Mastercard+Foundation' },
  { name: 'iHub', logo: 'https://via.placeholder.com/150x60.png/000000/FFFFFF?text=iHub' },
  { name: 'UNDP', logo: 'https://via.placeholder.com/150x60.png/000000/FFFFFF?text=UNDP' },
];

const tracks = [
    {
        icon: <GraduationCap size={28} className="text-primary" />,
        title: 'EdTech',
        description: 'Innovate to improve learning access and quality for all.',
    },
    {
        icon: <Banknote size={28} className="text-primary" />,
        title: 'FinTech for Students',
        description: 'Create solutions for student funding, scholarships, and financial literacy.',
    },
    {
        icon: <HeartHandshake size={28} className="text-primary" />,
        title: 'HealthTech',
        description: 'Develop technology for school health programs and student wellness.',
    },
    {
        icon: <Leaf size={28} className="text-primary" />,
        title: 'Climate & Sustainability',
        description: 'Build solutions to address environmental challenges in Kenya.',
    },
    {
        icon: <Milestone size={28} className="text-primary" />,
        title: 'Community & Civic Tech',
        description: 'Empower communities through technology-driven civic engagement.',
    },
]

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative py-20 md:py-32 lg:py-40 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <div className="relative z-10">
              <h1 className="font-headline text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl lg:text-7xl">
                KEF Hackathon 2024
              </h1>
              <p className="mt-6 text-lg max-w-3xl mx-auto text-foreground md:text-xl">
                Empowering the next generation of innovators in Kenya to create impactful tech solutions for education, employment, and community growth.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="#">
                    Register Now <ArrowRight className="ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="secondary">
                  <Link href="#">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
              <div>
                <h2 className="font-headline text-3xl font-bold text-primary">About the Hackathon</h2>
                <p className="mt-4 text-muted-foreground">
                  The KEF Hackathon is an annual event that brings together students, developers, designers, and entrepreneurs to solve real-world challenges. Our mission is to foster innovation and empower talent to build a brighter future for Kenya.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                        <Lightbulb size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Innovation</h3>
                      <p className="text-muted-foreground">Tackling challenges in education, finance, health, and more.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                        <Users size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Collaboration</h3>
                      <p className="text-muted-foreground">Connect with mentors, industry leaders, and fellow innovators.</p>
                    </div>
                  </li>
                   <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary text-primary-foreground">
                        <Trophy size={20} />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">Impact</h3>
                      <p className="text-muted-foreground">Create sustainable solutions that make a real-world difference.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-64 md:h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg">
                 <Image
                    src="https://picsum.photos/600/400"
                    alt="Students collaborating at a hackathon"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover"
                    data-ai-hint="hackathon collaboration"
                  />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold text-primary text-center">What to Expect</h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              Compete in exciting tracks, win amazing prizes, and get support to bring your ideas to life.
            </p>
            <div className="mt-12 grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-6">Hackathon Tracks</h3>
                <div className="space-y-6">
                    {tracks.map((track) => (
                        <div key={track.title} className="flex items-start gap-4">
                            <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-card shadow-md">
                                {track.icon}
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">{track.title}</h4>
                                <p className="text-muted-foreground">{track.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold text-primary mb-6">Prizes & Rewards</h3>
                <div className="bg-card p-6 rounded-lg shadow-md space-y-4">
                    <div className="flex items-center gap-4">
                        <Trophy size={28} className="text-secondary" />
                        <p className="font-semibold text-lg">Cash Awards, Laptops & Internships</p>
                    </div>
                    <div className="border-t border-border my-2"></div>
                    <h4 className="font-semibold text-primary">Special Awards:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>Best Social Impact Solution</li>
                        <li>Best Student-led Team</li>
                        <li>Best Women-led Team</li>
                    </ul>
                    <div className="border-t border-border my-2"></div>
                    <h4 className="font-semibold text-primary">Post-Hackathon Support:</h4>
                     <ul className="list-disc list-inside text-muted-foreground space-y-1">
                        <li>KEF Incubator Program (3-6 months)</li>
                        <li>Free Co-working Space Access</li>
                        <li>Cloud Credits from Google/AWS</li>
                    </ul>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="py-16 md:py-24 bg-card">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-headline text-3xl font-bold text-primary text-center">Our Partners & Sponsors</h2>
            <p className="mt-4 text-center text-muted-foreground max-w-2xl mx-auto">
              This event is made possible by the generous support of our partners and sponsors who are committed to fostering innovation in Kenya.
            </p>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {sponsors.map((sponsor) => (
                <div key={sponsor.name} className="flex justify-center">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={150}
                    height={60}
                    className="object-contain"
                    data-ai-hint="logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
