import { Award, BookOpen, GraduationCap, Users } from 'lucide-react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const impactStats = [
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: '4,600+',
    label: 'Students Supported',
    description: 'Since our inception, we have provided comprehensive support to thousands of students, enabling them to complete their education.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: '98%',
    label: 'University Transition Rate',
    description: 'An overwhelming majority of our sponsored students successfully transition to universities and tertiary institutions.',
  },
  {
    icon: <BookOpen className="h-8 w-8 text-primary" />,
    value: '20,000+',
    label: 'Mentorship Hours',
    description: 'Our CREW (Creating Respect and Equality for Women) and mentorship programs have provided thousands of hours of guidance.',
  },
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: 'Top 1%',
    label: 'National Exam Performance',
    description: 'KEF students consistently rank in the top 1% of all students taking the Kenya Certificate of Secondary Education (KCSE) exam.',
  },
];

export default function ImpactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold">Our Impact, By the Numbers</h1>
        <p className="text-center text-lg mt-4 text-muted-foreground max-w-3xl mx-auto">
          Every number tells a story of a life changed. Our holistic approach
          doesn't just open doors to classrooms—it builds futures.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {impactStats.map((stat) => (
          <Card key={stat.label} className="flex flex-col hover:border-primary transition-all duration-300">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-5xl font-bold">{stat.value}</div>
              <p className="text-sm text-muted-foreground mt-2">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
       <div className="text-center mt-16">
          <p className="text-lg text-gray-700">
            These numbers are a testament to the generosity of our donors and the resilience of our students.
          </p>
          <a href="https://www.kenyaeducationfund.org/donate/" target="_blank" className="btn mt-6 text-lg px-8 py-3">
            Become a part of the story
          </a>
       </div>
    </main>
  );
}
