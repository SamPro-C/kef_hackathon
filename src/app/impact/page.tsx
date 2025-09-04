
'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, School, Users, HeartHandshake, TrendingUp, MapPin, ArrowRight, UserPlus, Share2 } from 'lucide-react';
import ImpactCalculator from '@/components/impact-calculator';
import { cn } from '@/lib/utils';

export default function ImpactPage() {
  const [inView, setInView] = useState(false);
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (metricsRef.current) {
      observer.observe(metricsRef.current);
    }

    return () => {
      if (metricsRef.current) {
        // observer.unobserve(metricsRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="py-24 md:py-32 flex items-center justify-center text-center bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            From One Scholarship to Thousands of Changed Lives.
          </h1>
          <p className="mt-6 text-lg max-w-3xl mx-auto md:text-xl text-muted-foreground">
            For nearly two decades, the Kenya Education Fund (KEF) has been breaking the cycle of poverty through education. What started with a few scholarships has now become a powerful movement of hope, reaching thousands of young Kenyans — and the ripple effects keep growing.
          </p>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-headline text-3xl font-bold text-primary">Our Impact by the Numbers</h2>
            <div ref={metricsRef} className="mt-12 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className={cn("text-center transition-transform hover:scale-105", inView ? "animate-in" : "opacity-0")}>
                <CardHeader>
                  <GraduationCap className="h-12 w-12 text-primary mx-auto" />
                  <CardTitle className="font-headline text-4xl font-bold mt-4">4,600+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Scholarships Awarded Since 2006</p>
                </CardContent>
              </Card>
              <Card className={cn("text-center transition-transform hover:scale-105", inView ? "animate-in" : "opacity-0")} style={{ animationDelay: '0.2s' }}>
                <CardHeader>
                  <Users className="h-12 w-12 text-primary mx-auto" />
                   <CardTitle className="font-headline text-4xl font-bold mt-4">3,172</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Alumni Graduated & Now Leaders</p>
                </CardContent>
              </Card>
              <Card className={cn("text-center transition-transform hover:scale-105", inView ? "animate-in" : "opacity-0")} style={{ animationDelay: '0.4s' }}>
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-primary mx-auto" />
                  <CardTitle className="font-headline text-4xl font-bold mt-4">99%</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">High School to University Transition Rate</p>
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
      <section className="py-16 md:py-24 bg-background">
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
           <Card className="max-w-3xl mx-auto mt-8 bg-card text-foreground border-none transform transition-transform hover:scale-105">
              <CardContent className="p-8 text-center">
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
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="font-headline text-3xl font-bold text-primary">From Rural Villages to Global Stages</h2>
              <p className="mt-4 text-muted-foreground text-lg">
                KEF’s impact spans all 47 counties in Kenya. Our interactive map shows a story of nationwide reach, connecting students from remote villages to top schools and, eventually, to to global opportunities.
              </p>
              <ul className="mt-6 space-y-4 text-foreground">
                <li className="flex items-start gap-3"><MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" /><span><span className="font-bold">Nationwide Reach:</span> Students supported in all 47 Kenyan counties.</span></li>
                <li className="flex items-start gap-3"><School className="h-6 w-6 text-primary mt-1 flex-shrink-0" /><span><span className="font-bold">153 Partner Schools:</span> A robust network of educational institutions across the country.</span></li>
                <li className="flex items-start gap-3"><GraduationCap className="h-6 w-6 text-primary mt-1 flex-shrink-0" /><span><span className="font-bold">Global Alumni:</span> Graduates at prestigious universities like Harvard, Amherst, and beyond.</span></li>
              </ul>
            </div>
            <div className="relative h-96 w-full flex items-center justify-center p-4 rounded-xl shadow-neumorphic-outset">
                {/* Kenya Map SVG */}
                <svg
                    viewBox="0 0 770 793"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-full w-auto"
                >
                    <path d="M438.358 1.48834L436.417 11.2312L439.699 11.7214L455.105 32.1802L459.977 34.6212L461.309 43.8398L465.106 46.1044L475.257 65.6819L480.129 67.42L489.176 90.6273L493.493 92.8919L498.886 100.864L500.218 108.835L511.209 112.465L511.639 123.329L519.896 130.602L521.698 141.29L525.065 142.27L528.432 147L530.665 156.402L540.386 158.361L543.753 162.72L545.986 172.943L554.243 177.302L555.575 184.575L560.878 186.534L562.21 193.316L571.257 197.676L575.574 213.623L579.371 216.378L583.598 227.242L585.831 233.533L589.628 235.492L592.565 242.765L597.868 244.724L601.235 249.083L601.665 260.438L615.312 263.673L619.109 273.896L626.375 280.678L630.172 286.478L630.602 298.324L638.428 303.673L642.656 313.405L644.889 321.377L648.686 323.336L654.283 329.136L660.74 340.491L667.627 342.932L672.499 347.781L673.792 355.753L680.679 360.112L682.011 368.574L689.707 372.424L692.644 380.396L697.516 383.331L702.388 393.554L711.435 397.404L716.307 408.268L717.168 418L726.645 504.5L727.506 507.446L727.075 510.391L723.278 514.751L718.837 516.22L717.168 519.165L713.801 521.124L707.345 522.094L704.818 526.943L699.221 528.892L697.086 532.742L689.277 534.21L687.974 541.483L682.871 544.428L682.011 553.155L677.139 556.1L673.342 562.391L669.545 565.827L665.318 566.317L662.801 570.676L653.423 574.036L644.889 581.309L639.292 581.799L637.568 591.056L631.012 596.856L621.261 598.795L615.742 604.115L612.806 609.434L604.119 611.875L597.438 617.185L592.135 625.647L585.831 629.5L582.738 637.472L575.574 641.322L568.687 642.79L565.32 648.099L558.864 651.949L553.813 660.411L546.847 662.37L539.526 669.643L530.665 671.592L525.065 677.892L517.256 680.333L508.649 685.182L503.777 694.39L498.455 696.831L492.203 704.313L486.606 706.754L480.989 712.554L476.547 713.044L470.224 718.344L464.266 720.293L459.547 726.093L455.535 726.583L449.199 732.383L444.327 734.824L435.28 734.334L430.838 737.76L423.772 739.228L416.706 743.588L410.25 745.547L404.653 749.397L396.844 750.865L390.816 754.715L383.75 756.183L377.294 760.033L371.266 760.523L365.669 765.372L358.173 766.84L351.921 771.689L343.953 772.669L338.256 777.028L330.019 778.496L324.422 783.345L317.356 784.813L311.328 789.172L304.702 790.64L296.893 792.599L291.59 789.172L285.562 783.835L279.965 783.345L274.368 777.518L269.265 778.008L263.237 774.627L256.611 775.117L250.583 770.218L243.087 770.708L238.215 765.86L230.838 767.328L225.241 762.479L218.615 763.458L213.743 758.609L206.677 759.589L199.181 754.715L194.309 746.527L186.932 743.097L181.335 734.824L174.709 731.888L171.342 725.113L164.716 722.177L159.413 713.534L152.347 710.104L145.281 701.881L139.684 699.44L133.228 688.13L129.861 685.182L123.833 671.102L118.961 668.661L111.995 659.442L106.692 657.483L100.995 649.079L97.6278 640.832L88.1513 637.962L82.9482 628.52L75.5714 624.16L70.2684 615.717L64.9653 613.266L58.5089 603.625L50.2522 597.346L44.5556 587.625L38.0991 585.174L31.6427 576.241L27.3256 567.287L19.5168 563.851L14.6447 554.897L10.3276 551.951L7.81057 542.499L0.744199 537.159L1.17454 527.433L3.84091 524.488L5.17269 516.22L8.53982 513.275L9.39055 504.5L14.6447 500.589L17.7968 491.137L26.8953 487.236L30.2624 479.264L38.0991 475.364L41.4663 467.392L47.0631 465.433L50.8601 456.971L57.2173 454.025L61.5344 445.071L64.9653 442.63L68.7623 434.168L70.7184 425.215L78.125 420.315L83.8216 411.361L86.7583 401.809L93.8247 397.404L97.1979 388.942L100.995 386.286L103.541 379.416L109.569 376.471L114.872 367.594L117.809 359.132L126.856 354.262L129.861 346.78L136.012 343.42L138.801 334.958L144.398 331.5L148.195 322.846L151.056 314.874L158.552 309.535L161.919 301.563L167.947 297.663L171.744 288.709L178.29 284.8L183.162 276.338L186.959 273.896L191.035 264.163L196.338 261.218L200.565 251.485L203.932 250L208.641 240.318L212.868 238.359L217.74 229.191L221.537 227.232L227.134 218.77L229.8 211.993L236.866 208.082L241.307 199.129L247.335 195.717L252.638 186.764L256.181 187.254L261.053 181.9L264.42 176.59L269.723 175.61L274.595 168.834L280.623 167.366L285.926 159.393L287.693 149.9L293.721 146.51L295.488 137.556L302.554 133.575L304.702 124.797L311.768 120.886L314.285 111.454L322.094 107.544L325.891 99.0819L333.268 95.1712L336.204 87.6895L343.27 83.7788L347.067 75.3168L355.705 70.8969L359.072 62.925L366.138 59L370.455 49.7323L377.521 46.2808L381.748 37.0722L390.386 32.6703L393.322 24.7L399.778 21.268L403.575 12.691L409.816 8.78028L417.136 7.31252L424.632 3.92928L430.838 2.46875L438.358 1.48834Z" stroke="hsl(var(--border))" strokeWidth="2"/>
                    
                    {/* Pulsing Dots */}
                    <circle cx="380" cy="400" r="5" fill="hsl(var(--primary))">
                        <animate attributeName="r" from="5" to="15" dur="1.5s" begin="0s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0s" repeatCount="indefinite"/>
                    </circle>
                     <circle cx="280" cy="200" r="5" fill="hsl(var(--primary))">
                        <animate attributeName="r" from="5" to="15" dur="1.5s" begin="0.2s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.2s" repeatCount="indefinite"/>
                    </circle>
                     <circle cx="550" cy="350" r="5" fill="hsl(var(--primary))">
                        <animate attributeName="r" from="5" to="15" dur="1.5s" begin="0.4s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.4s" repeatCount="indefinite"/>
                    </circle>
                    <circle cx="480" cy="600" r="5" fill="hsl(var(--primary))">
                        <animate attributeName="r" from="5" to="15" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.6s" repeatCount="indefinite"/>
                    </circle>
                     <circle cx="200" cy="550" r="5" fill="hsl(var(--primary))">
                        <animate attributeName="r" from="5" to="15" dur="1.5s" begin="0.8s" repeatCount="indefinite"/>
                        <animate attributeName="opacity" from="1" to="0" dur="1.5s" begin="0.8s" repeatCount="indefinite"/>
                    </circle>
                </svg>
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
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-card shadow-neumorphic-outset text-primary mb-3">
                    <Users className="h-10 w-10" />
                </div>
                <p className="font-semibold text-lg">1. Educate a Student</p>
              </div>
              <ArrowRight className="h-10 w-10 text-primary hidden md:block" />
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-card shadow-neumorphic-outset text-primary mb-3">
                    <GraduationCap className="h-10 w-10" />
                </div>
                <p className="font-semibold text-lg">2. Empower a Graduate</p>
              </div>
              <ArrowRight className="h-10 w-10 text-primary hidden md:block" />
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-20 w-20 rounded-full bg-card shadow-neumorphic-outset text-primary mb-3">
                    <HeartHandshake className="h-10 w-10" />
                </div>
                <p className="font-semibold text-lg">3. Transform a Community</p>
              </div>
          </div>
        </div>
      </section>

      {/* Join the Community CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground">Join the KEF Community</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">You don't have to be a big donor to make a big difference.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/sponsor"><HeartHandshake />Sponsor a Student</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#"><UserPlus /> Become a Mentor</Link>
            </Button>
             <Button asChild size="lg" variant="outline">
              <Link href="#"><Share2 /> Share the KEF Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
