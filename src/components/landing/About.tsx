'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Target, Eye, Gem } from 'lucide-react';

const principles = [
  {
    icon: <Target className="h-8 w-8 text-primary" />,
    title: 'Our Mission',
    description: 'To provide economically disadvantaged students in Kenya with scholarships, support and educational resources for them to improve their lives and communities.',
  },
  {
    icon: <Eye className="h-8 w-8 text-primary" />,
    title: 'Our Vision',
    description: 'Self-reliance for people in Kenya through education.',
  },
  {
    icon: <Gem className="h-8 w-8 text-primary" />,
    title: 'Our Core Values',
    description: 'Integrity, Transparency, Equity, Inclusivity, and Compassion.',
  },
];

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">
            About the Kenya Education Fund
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12">
            The Kenya Education Fund (KEF) provides comprehensive, 4-year scholarships to promising yet disadvantaged students in Kenya so they can complete high school and build a brighter future.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {principles.map((p) => (
              <Card key={p.title} className="bg-card hover:border-primary transition-all duration-300 flex flex-col">
                <CardHeader className="flex flex-row items-center gap-4 space-y-0">
                  {p.icon}
                  <CardTitle>{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{p.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/about" passHref>
              <button className="btn secondary px-8 py-3 text-lg">
                Learn More About Our Story &rarr;
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
