'use client';

import { useState, useMemo, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { GraduationCap, School, Users, HeartHandshake, ArrowRight, UserPlus, Share2 } from 'lucide-react';
import { alumniData, Alumni } from '@/lib/alumni-data';
import { cn } from '@/lib/utils';

const regions = ['All', 'Rift Valley', 'Nyanza', 'Coast', 'Western', 'Eastern', 'Central'];
const careerFields = ['All', 'Technology', 'Healthcare', 'Engineering', 'Education', 'Business'];
const STORIES_PER_PAGE = 8;

export default function StoriesPage() {
  const [filters, setFilters] = useState({ region: 'All', careerField: 'All' });
  const [visibleCount, setVisibleCount] = useState(STORIES_PER_PAGE);

  const filteredAlumni = useMemo(() => {
    return alumniData.filter(alumni => {
      const regionMatch = filters.region === 'All' || alumni.region === filters.region;
      const careerMatch = filters.careerField === 'All' || alumni.careerField === filters.careerField;
      return regionMatch && careerMatch;
    });
  }, [filters]);

  const handleFilterChange = (type: 'region' | 'careerField', value: string) => {
    setFilters(prev => ({ ...prev, [type]: value }));
    setVisibleCount(STORIES_PER_PAGE); // Reset visible count on new filter
  };

  const loadMore = () => {
    setVisibleCount(prev => prev + STORIES_PER_PAGE);
  };
  
  const currentAlumni = filteredAlumni.slice(0, visibleCount);

  return (
    <>
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="https://picsum.photos/1600/800?random=20"
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

      {/* Alumni Stories Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold text-primary">Explore Our Alumni Journeys</h2>
            <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
              Filter by region or career to discover the diverse paths our scholars have taken. Each story is a testament to the power of your support.
            </p>
          </div>

          {/* Filtering UI */}
          <Card className="p-6 mb-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <h3 className="font-headline text-lg font-semibold mb-3 text-foreground">Filter by Region</h3>
                <div className="flex flex-wrap gap-2">
                  {regions.map(region => (
                    <Button
                      key={region}
                      variant={filters.region === region ? 'default' : 'outline'}
                      onClick={() => handleFilterChange('region', region)}
                      className="transition-all"
                    >
                      {region}
                    </Button>
                  ))}
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-headline text-lg font-semibold mb-3 text-foreground">Filter by Career Field</h3>
                <div className="flex flex-wrap gap-2">
                  {careerFields.map(field => (
                    <Button
                      key={field}
                      variant={filters.careerField === field ? 'default' : 'outline'}
                      onClick={() => handleFilterChange('careerField', field)}
                      className="transition-all"
                    >
                      {field}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
          
          {/* Stories Grid */}
          {currentAlumni.length > 0 ? (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentAlumni.map((alumni, index) => (
                <Card 
                  key={alumni.name} 
                  className="text-left transform hover:-translate-y-2 transition-transform duration-300 flex flex-col animate-card-in"
                  style={{ animationDelay: `${(index % STORIES_PER_PAGE) * 100}ms`}}
                >
                  <CardHeader className="p-0">
                    <Image src={alumni.image} alt={alumni.alt} width={400} height={300} className="rounded-t-lg object-cover w-full" data-ai-hint="student portrait" />
                  </CardHeader>
                  <CardContent className="p-6 flex flex-col flex-grow">
                    <CardTitle className="font-headline">{alumni.name}</CardTitle>
                    <p className="text-muted-foreground mt-2 text-sm flex-grow">{alumni.story}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                        <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">{alumni.region}</span>
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">{alumni.careerField}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild variant="link" className="px-0">
                      <Link href="/journey">Read Full Story <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-xl text-muted-foreground">No stories match your current filters.</p>
            </div>
          )}


          {/* Load More Button */}
          {visibleCount < filteredAlumni.length && (
            <div className="text-center mt-12">
              <Button onClick={loadMore} size="lg">
                Load More Stories
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Impact Stats Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-3xl font-bold text-primary">Behind the Numbers are Real Lives Changed</h2>
          <div className="mt-12 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer">
              <GraduationCap className="h-12 w-12 text-primary" />
              <p className="font-headline text-3xl md:text-4xl font-bold mt-2">4,600+</p>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Scholarships Awarded</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer">
              <School className="h-12 w-12 text-primary" />
              <p className="font-headline text-3xl md:text-4xl font-bold mt-2">153</p>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Partner Schools</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer">
              <Users className="h-12 w-12 text-primary" />
              <p className="font-headline text-3xl md:text-4xl font-bold mt-2">99%</p>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">University Transition</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg hover:bg-background/50 transition-colors cursor-pointer">
              <HeartHandshake className="h-12 w-12 text-primary" />
              <p className="font-headline text-3xl md:text-4xl font-bold mt-2">3,172</p>
              <p className="text-sm uppercase tracking-wider text-muted-foreground">Graduates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="font-headline text-4xl font-bold text-foreground">These are not just their stories. They can be ours, too.</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">Your action today can write the next success story.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/letter"><HeartHandshake className="mr-2" />Sponsor a Student</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="#"><Share2 className="mr-2" />Share a Story</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
