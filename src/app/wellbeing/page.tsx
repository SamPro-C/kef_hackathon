import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { WellbeingResource } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Phone } from 'lucide-react';

const wellbeingData: WellbeingResource[] = [
  {
    id: 'wb001',
    title: 'Managing Exam Stress',
    description: 'Tips and techniques to cope with stress during exam periods. Learn mindfulness and time management.',
    category: 'Mental Health',
    contentUrl: '#', // Placeholder link
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'student stress'
  },
  {
    id: 'wb002',
    title: 'Healthy Eating on a Budget',
    description: 'Learn how to maintain a healthy diet without breaking the bank. Includes simple recipes.',
    category: 'Physical Health',
    contentUrl: '#', // Placeholder link
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'healthy food'
  },
  {
    id: 'wb003',
    title: 'Befriending Kenya Helpline',
    description: 'Confidential emotional support for those struggling with depression, anxiety, or suicidal thoughts.',
    category: 'Crisis Support',
    contactInfo: 'Call: +254 722 178 177',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'helpline support'
  },
  {
    id: 'wb004',
    title: 'Importance of Sleep for Students',
    description: 'Understand why adequate sleep is crucial for academic performance and overall wellbeing.',
    category: 'Physical Health',
    contentUrl: '#', // Placeholder link
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'student sleeping'
  },
];

export default function WellbeingPage() {
  return (
    <div className="container mx-auto py-8">
      <header className="mb-10 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Student Wellbeing
        </h1>
        <p className="mt-3 text-lg text-muted-foreground md:text-xl">
          Resources to support your mental, physical, and emotional health.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {wellbeingData.map((resource) => (
          <Card key={resource.id} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            {resource.imageUrl && (
              <div className="relative h-48 w-full">
                <Image 
                  src={resource.imageUrl} 
                  alt={resource.title} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={resource.imageHint}
                />
              </div>
            )}
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="font-headline text-xl">{resource.title}</CardTitle>
                <Badge variant="secondary">{resource.category}</Badge>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-3 text-sm">{resource.description}</p>
              {resource.contactInfo && (
                <p className="text-sm font-semibold text-primary">
                  <Phone className="mr-2 inline h-4 w-4" />
                  {resource.contactInfo}
                </p>
              )}
            </CardContent>
            <CardFooter>
              {resource.contentUrl ? (
                <Link href={resource.contentUrl} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="default" className="w-full">
                    Learn More <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : resource.contactInfo ? (
                 <Button variant="default" className="w-full" asChild>
                   <a href={`tel:${resource.contactInfo.replace('Call: ', '').replace(/\s/g, '')}`}>
                     Call Now <Phone className="ml-2 h-4 w-4" />
                   </a>
                 </Button>
              ) : (
                <Button variant="outline" disabled className="w-full">
                  Details
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
