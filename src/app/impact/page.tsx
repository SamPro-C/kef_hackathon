'use client';
import {
  Award,
  BookOpen,
  GraduationCap,
  Users,
  HeartHandshake,
  School,
  Calendar,
} from 'lucide-react';
import CountUp from 'react-countup';
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
];

const alumniStories = [
    {
        title: "From Worry to Wonder: Jeff’s Journey",
        excerpt: "It wasn’t just about school fees or supplies. It was the generosity, the warmth, the feeling of being seen and supported that changed everything.",
        image: "https://picsum.photos/seed/alum1/600/400"
    },
    {
        title: "Hope to Achievement with KEF",
        excerpt: "Did you know Sandra’s favorite meal is chapati with ndengu stew? Pair that with her love for volleyball and dogs, and you’ve got a well-rounded future electrical engineer in the making!",
        image: "https://picsum.photos/seed/alum2/600/400"
    },
    {
        title: "From Hopelessness to Dreaming Big with KEF",
        excerpt: "For Leah, KEF is a lifeline for students like her. 'It is a good organization because it helps the needy achieve their dreams,' she says gratefully. Leah’s story is proof that with the right support, anything is possible.",
        image: "https://picsum.photos/seed/alum3/600/400"
    }
]

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
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.75}
                  separator=","
                  prefix={stat.prefix}
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
            At Kenya Education Fund, we ensure that every donation directly
            impacts the education and well-being of vulnerable Kenyan youth.
            Through the generosity of our private supporters, we cover
            operational costs separately, allowing 100% of your donation to
            support scholarships, resources, and mentorship for our students.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
             <h2 className="text-4xl font-bold mb-12">KEF Alumni Stories</h2>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {alumniStories.map(story => (
                    <Link href="/stories" key={story.title}>
                        <Card className="overflow-hidden h-full flex flex-col group cursor-pointer hover:border-primary">
                             <CardHeader className="p-0">
                                <div className="relative w-full h-48">
                                <Image src={story.image} alt={story.title} fill className="object-cover transition-transform duration-300 group-hover:scale-110" />
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 flex-grow">
                                <CardTitle className="text-xl mb-2">{story.title}</CardTitle>
                                <CardDescription>{story.excerpt}</CardDescription>
                            </CardContent>
                             <CardFooter>
                                <p className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">Read more &rarr;</p>
                            </CardFooter>
                        </Card>
                    </Link>
                ))}
             </div>
        </div>
      </section>


      <div className="text-center mt-16">
        <p className="text-lg text-muted-foreground">
          These numbers are a testament to the generosity of our donors and the
          resilience of our students.
        </p>
        <a
          href="https://www.kenyaeducationfund.org/donate/"
          target="_blank"
          className="btn mt-6 text-lg px-8 py-3"
        >
          Become a part of the story
        </a>
      </div>
    </main>
  );
}
