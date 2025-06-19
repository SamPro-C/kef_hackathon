import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Course } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { BookMarked } from 'lucide-react';

const coursesData: Course[] = [
  {
    id: 'cs001',
    name: 'Bachelor of Science in Computer Science',
    college: 'University of Nairobi',
    description: 'A comprehensive program covering software development, AI, data science, and cybersecurity.',
    duration: '4 Years',
    requirements: ['KCSE Mean Grade C+', 'Mathematics B', 'Physics B'],
    category: 'Technology',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'computer science'
  },
  {
    id: 'eng002',
    name: 'Bachelor of Engineering (Civil)',
    college: 'Jomo Kenyatta University of Agriculture and Technology',
    description: 'Focuses on design, construction, and maintenance of infrastructure projects.',
    duration: '5 Years',
    requirements: ['KCSE Mean Grade B-', 'Mathematics A-', 'Physics A-'],
    category: 'Engineering',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'civil engineering'
  },
  {
    id: 'bus003',
    name: 'Bachelor of Commerce (Finance)',
    college: 'Strathmore University',
    description: 'Equips students with skills in financial analysis, investment, and corporate finance.',
    duration: '4 Years',
    requirements: ['KCSE Mean Grade B', 'Mathematics B', 'English B'],
    category: 'Business',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'finance business'
  },
  {
    id: 'med004',
    name: 'Bachelor of Medicine and Bachelor of Surgery (MBChB)',
    college: 'Kenyatta University',
    description: 'A rigorous program preparing students for a career in medicine.',
    duration: '6 Years',
    requirements: ['KCSE Mean Grade A-', 'Biology A', 'Chemistry A', 'Physics/Maths B+'],
    category: 'Health Sciences',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'medicine health'
  },
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto py-8">
      <header className="mb-10 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          College Courses
        </h1>
        <p className="mt-3 text-lg text-muted-foreground md:text-xl">
          Explore a wide range of courses offered by top Kenyan institutions.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {coursesData.map((course) => (
          <Card key={course.id} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            {course.imageUrl && (
              <div className="relative h-48 w-full">
                <Image 
                  src={course.imageUrl} 
                  alt={course.name} 
                  layout="fill" 
                  objectFit="cover" 
                  data-ai-hint={course.imageHint}
                />
              </div>
            )}
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="font-headline text-xl">{course.name}</CardTitle>
                {course.category && <Badge variant="secondary">{course.category}</Badge>}
              </div>
              <CardDescription className="text-sm text-muted-foreground pt-1">{course.college}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-3 text-sm">{course.description}</p>
              {course.duration && <p className="text-xs text-muted-foreground"><strong>Duration:</strong> {course.duration}</p>}
              {course.requirements && (
                <div className="mt-2">
                  <h4 className="text-xs font-semibold text-muted-foreground">Requirements:</h4>
                  <ul className="list-disc list-inside text-xs text-muted-foreground">
                    {course.requirements.map((req, index) => <li key={index}>{req}</li>)}
                  </ul>
                </div>
              )}
            </CardContent>
            <CardFooter>
              <Button variant="default" className="w-full">
                <BookMarked className="mr-2 h-4 w-4" /> View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
