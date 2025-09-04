
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, School, Users, HeartHandshake, TrendingUp, MapPin, ArrowRight, BookOpen, Shirt, ShoppingCart, Heart, UserPlus, Share2 } from 'lucide-react';
import ImpactCalculator from '@/components/impact-calculator';

export default function ImpactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 flex items-center justify-center text-center bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl" style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}>
            From One Scholarship to Thousands of Changed Lives.
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto md:text-xl opacity-90">
            For nearly two decades, the Kenya Education Fund (KEF) has been breaking the cycle of poverty through education. What started with a few scholarships has now become a powerful movement of hope, reaching thousands of young Kenyans — and the ripple effects keep growing.
          </p>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Our Impact by the Numbers</h2>
            <div className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="text-center transition-transform hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <GraduationCap className="h-12 w-12 text-primary mx-auto" />
                  <CardTitle className="text-4xl font-bold mt-4">4,600+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Scholarships Awarded Since 2006</p>
                </CardContent>
              </Card>
              <Card className="text-center transition-transform hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto" />
                   <CardTitle className="text-4xl font-bold mt-4">3,172</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Alumni Graduated & Now Leaders</p>
                </CardContent>
              </Card>
              <Card className="text-center transition-transform hover:scale-105 hover:shadow-xl">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                  <CardTitle className="text-4xl font-bold mt-4">99%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">University Transition Rate</p>
                </CardContent>
              </Card>
            </div>
             <div className="mt-8">
                <Button asChild size="lg" variant="link" className="text-primary text-lg">
                    <Link href="/stories">See the Faces Behind These Numbers →</Link>
                </Button>
            </div>
          </div>
      </section>

      {/* Impact Calculator Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
           <h2 className="font-headline text-3xl font-bold text-primary text-center">Calculate Your Impact</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground text-center">
            Your contribution, no matter the size, makes a tangible difference. See how your generosity can directly support a KEF scholar's journey.
           </p>
           <ImpactCalculator />
        </div>
      </section>
      
      {/* Donor Story Section */}
       <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary">Why We Give</h2>
           <Card className="max-w-3xl mx-auto mt-8 bg-secondary text-secondary-foreground border-secondary shadow-xl transform transition-transform hover:scale-105">
              <CardContent className="p-8">
                <p className="text-2xl font-semibold italic">
                  “We chose KEF because we see the direct impact. It’s not just about donating money; it’s about investing in a specific child’s future. We get to see the student we sponsor grow and succeed. That’s a connection you don’t get anywhere else.”
                </p>
                 <p className="text-lg opacity-90 mt-4 font-headline">– The Thompson Family, KEF Sponsors since 2018</p>
              </CardContent>
            </Card>
        </div>
      </section>


      {/* Geographic Reach Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary">From Rural Villages to Global Stages</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                KEF’s impact spans all 47 counties in Kenya and reaches across the globe as our alumni attend prestigious universities and become leaders in their fields.
              </p>
              <ul className="mt-6 space-y-4 text-foreground">
                <li className="flex items-center gap-3"><MapPin className="h-6 w-6 text-primary" /><span><span className="font-bold">153 Partner Schools</span> across Kenya</span></li>
                <li className="flex items-center gap-3"><GraduationCap className="h-6 w-6 text-primary" /><span>Alumni at <span className="font-bold">Harvard, Amherst,</span> and more</span></li>
                <li className="flex items-center gap-3"><HeartHandshake className="h-6 w-6 text-primary" /><span>Community projects in <span className="font-bold">47 counties</span></span></li>
              </ul>
            </div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://picsum.photos/800/600?random=11"
                alt="Map of Kenya showing KEF's reach"
                fill
                className="object-cover"
                data-ai-hint="map Kenya"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <p className="font-bold text-xl">Interactive map coming soon!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Ripple Effect Section */}
      <section className="py-16 md:py-24 bg-background text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="font-headline text-3xl font-bold text-primary">The Ripple Effect: Beyond One Student</h2>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            A single scholarship is just the start. It empowers a graduate to uplift their family, inspire their community, and often, fund new scholarships for others, creating a beautiful, self-sustaining cycle of change.
          </p>
          <div className="mt-12 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-primary-foreground mb-3 shadow-lg">
                    <Users className="h-10 w-10" />
                </div>
                <p className="font-semibold text-lg">1. Educate a Student</p>
              </div>
              <ArrowRight className="h-10 w-10 text-primary hidden md:block" />
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-primary-foreground mb-3 shadow-lg">
                    <GraduationCap className="h-10 w-10" />
                </div>
                <p className="font-semibold text-lg">2. Empower a Graduate</p>
              </div>
              <ArrowRight className="h-10 w-10 text-primary hidden md:block" />
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-primary text-primary-foreground mb-3 shadow-lg">
                    <HeartHandshake className="h-10 w-10" />
                </div>
                <p className="font-semibold text-lg">3. Transform a Community</p>
              </div>
          </div>
        </div>
      </section>

      {/* Join the Community CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-4xl font-bold">Join the KEF Community</h2>
          <p className="mt-4 max-w-2xl mx-auto">You don't have to be a big donor to make a big difference.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="#">🙋 Sponsor a Student</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="#"><UserPlus /> Become a Mentor</Link>
            </Button>
             <Button asChild size="lg" variant="outline" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="#"><Share2 /> Share the KEF Story</Link>
            </Button>
          </div>
        </div>
      </section>

    </>
  );
}
