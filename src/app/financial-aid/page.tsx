import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { FinancialAidOpportunity } from '@/lib/types';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const aidData: FinancialAidOpportunity[] = [
  {
    id: 'aid001',
    name: 'HELB Loan',
    provider: 'Higher Education Loans Board',
    description: 'Government-funded loans for eligible Kenyan students in universities and TVET institutions.',
    type: 'Loan',
    eligibility: ['Kenyan Citizen', 'Placed by KUCCPS or admitted in a recognized institution'],
    deadline: 'Varies (check HELB portal)',
    applicationLink: 'https://www.helb.co.ke/',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'money education'
  },
  {
    id: 'aid002',
    name: 'Equity Bank Wings to Fly Scholarship',
    provider: 'Equity Group Foundation',
    description: 'Comprehensive secondary school scholarships for bright, needy children.',
    type: 'Scholarship',
    eligibility: ['KCPE graduates', 'Academic merit', 'Financial need'],
    deadline: 'Announced annually',
    applicationLink: 'https://equitygroupfoundation.com/wings-to-fly/',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'students scholarship'
  },
  {
    id: 'aid003',
    name: 'KCB Foundation Scholarship',
    provider: 'KCB Foundation',
    description: 'Scholarships for secondary education, targeting gifted but underprivileged students.',
    type: 'Scholarship',
    eligibility: ['KCPE graduates', 'Orphans and vulnerable children', 'Academic potential'],
    deadline: 'Announced annually',
    applicationLink: 'https://kcbgroup.com/foundation/',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'education support'
  },
   {
    id: 'aid004',
    name: 'County Government Bursaries',
    provider: 'Various County Governments',
    description: 'Bursaries offered by county governments to support students from their respective counties.',
    type: 'Bursary',
    eligibility: ['Resident of the specific county', 'Financial need', 'Academic performance may be considered'],
    deadline: 'Varies by county',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'community government'
  },
];

export default function FinancialAidPage() {
  return (
    <div className="container mx-auto py-8">
      <header className="mb-10 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Financial Aid & Scholarships
        </h1>
        <p className="mt-3 text-lg text-muted-foreground md:text-xl">
          Discover funding opportunities to support your educational journey.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {aidData.map((aid) => (
          <Card key={aid.id} className="flex flex-col overflow-hidden shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
            {aid.imageUrl && (
               <div className="relative h-48 w-full">
                <Image 
                  src={aid.imageUrl} 
                  alt={aid.name} 
                  layout="fill" 
                  objectFit="cover"
                  data-ai-hint={aid.imageHint}
                />
              </div>
            )}
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="font-headline text-xl">{aid.name}</CardTitle>
                <Badge variant={aid.type === 'Scholarship' ? 'default' : aid.type === 'Loan' ? 'destructive' : 'secondary'} className="capitalize">
                  {aid.type}
                </Badge>
              </div>
              <CardDescription className="text-sm text-muted-foreground pt-1">{aid.provider}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="mb-3 text-sm">{aid.description}</p>
              {aid.eligibility && (
                <div className="mt-2">
                  <h4 className="text-xs font-semibold text-muted-foreground">Eligibility:</h4>
                  <ul className="list-disc list-inside text-xs text-muted-foreground">
                    {aid.eligibility.map((req, index) => <li key={index}>{req}</li>)}
                  </ul>
                </div>
              )}
              {aid.deadline && <p className="mt-2 text-xs text-muted-foreground"><strong>Deadline:</strong> {aid.deadline}</p>}
               {aid.amount && <p className="mt-2 text-xs text-muted-foreground"><strong>Amount:</strong> {aid.amount}</p>}
            </CardContent>
            <CardFooter>
              {aid.applicationLink ? (
                <Link href={aid.applicationLink} target="_blank" rel="noopener noreferrer" className="w-full">
                  <Button variant="default" className="w-full">
                    Apply Now <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              ) : (
                <Button variant="outline" disabled className="w-full">
                  More Info
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
