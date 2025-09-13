'use client';
import {
  Award,
  BookOpen,
  GraduationCap,
  Users,
  HeartHandshake,
  School,
  Calendar,
  Percent,
  PiggyBank,
  Briefcase,
} from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import ClientCountUp from '@/components/ui/client-countup';

const impactStats = [
  {
    icon: <Calendar className="h-8 w-8 text-primary" />,
    value: 18,
    label: 'Years Of Giving',
    description:
      'For nearly two decades, KEF has been a consistent force for change in Kenya.',
    suffix: '+',
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    value: 4600,
    label: 'Scholarships Provided',
    description:
      'Thousands of students have received the gift of education through our comprehensive scholarship program.',
    suffix: '+',
  },
  {
    icon: <HeartHandshake className="h-8 w-8 text-primary" />,
    value: 610,
    label: 'Active Scholarships',
    description:
      'We are currently supporting hundreds of students, ensuring they can stay in school and achieve their dreams.',
  },
  {
    icon: <School className="h-8 w-8 text-primary" />,
    value: 153,
    label: 'Partner Schools',
    description:
      'Our network of partner schools across Kenya helps us identify and support deserving students.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-primary" />,
    value: 99,
    label: 'Transition Rate',
    description:
      'An overwhelming majority of our students transition to university or other tertiary institutions.',
    suffix: '%',
  },
   {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: 95,
    label: 'Completion Rate',
    description:
      'The vast majority of KEF students successfully complete their secondary education.',
    suffix: '%',
  },
];

const confidencePoints = [
    {
        icon: <Percent className="h-10 w-10 text-primary" />,
        title: "100% Donation Model",
        description: "Through the generosity of private supporters who cover our operational costs, 100% of your donation goes directly to student scholarships and support programs."
    },
    {
        icon: <PiggyBank className="h-10 w-10 text-primary" />,
        title: "Comprehensive Scholarships",
        description: "We cover more than just tuition. Our support includes school fees, uniforms, textbooks, and essential sanitary products for girls to ensure they can learn without obstacles."
    },
    {
        icon: <Briefcase className="h-10 w-10 text-primary" />,
        title: "Career Readiness & Mentorship",
        description: "Our programs go beyond the classroom, providing students with life skills workshops, career guidance, and dedicated mentorship to prepare them for a successful future."
    }
];

const partners = [
  { name: "Partner One", logo: "https://picsum.photos/seed/p1/150/60" },
  { name: "Partner Two", logo: "https://picsum.photos/seed/p2/150/60" },
  { name: "Partner Three", logo: "https://picsum.photos/seed/p3/150/60" },
  { name: "Partner Four", logo: "https://picsum.photos/seed/p4/150/60" },
  { name: "Partner Five", logo: "https://picsum.photos/seed/p5/150/60" },
  { name: "Partner Six", logo: "https://picsum.photos/seed/p6/150/60" },
];


export default function ImpactPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12 mt-12">
        <h1 className="text-5xl font-bold">Our Impact</h1>
        <p className="text-center text-lg mt-4 text-muted-foreground max-w-3xl mx-auto">
          Through the support of donors who believe in the power of education,
          KEF has empowered over 4,600 children who are now positively impacting
          their communities.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {impactStats.map((stat) => (
          <Card
            key={stat.label}
            className="flex flex-col hover:border-primary transition-all duration-300"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </CardTitle>
              {stat.icon}
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="text-5xl font-bold">
                <ClientCountUp
                  start={0}
                  end={stat.value}
                  duration={2.75}
                  separator=","
                  suffix={stat.suffix}
                  enableScrollSpy
                  scrollSpyOnce
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {stat.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="py-20 bg-card rounded-lg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Give With Confidence
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 text-center">
            Your donation is an investment in a brighter future. We are committed to transparency and maximizing the impact of every contribution. Here’s how we do it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {confidencePoints.map(point => (
                <div key={point.title} className="flex flex-col items-center p-6">
                    {point.icon}
                    <h3 className="text-2xl font-bold mt-4 mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">
            Our Valued Partners
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12 text-center">
            Our success is a shared success. We are proud to partner with organizations that are committed to transforming lives through education in Kenya.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {partners.map(partner => (
                <div key={partner.name} className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300">
                    <Image 
                        src={partner.logo}
                        alt={partner.name}
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
  );
}
