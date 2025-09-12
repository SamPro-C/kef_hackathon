'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const founders = [
  {
    name: 'Dominic M. Mwenja',
    title: 'Co-Founder & President',
    bio: "Born into poverty in rural Kenya, Dominic's life changed when a caring American family sponsored his high school education. His journey from a small village to a Master's degree in the U.S. ignited his passion to give back. In 2006, he and Brad ent co-founded KEF to provide other bright, needy students with the same opportunity that changed his life.",
    image: 'https://picsum.photos/seed/founder1/400/400',
    'data-ai-hint': 'male portrait smiling',
  },
  {
    name: 'Bradley J. Broder',
    title: 'Co-Founder & Executive Director',
    bio: 'After a transformative trip to Kenya, Brad was inspired by the determination of students like Dominic. He returned to the U.S. with a mission: to create a transparent, effective organization that would connect sponsors with deserving students. His vision and leadership have been instrumental in shaping KEF into the impactful organization it is today.',
    image: 'https://picsum.photos/seed/founder2/400/400',
    'data-ai-hint': 'male portrait professional',
  },
];

const Founders = () => {
  return (
    <section className="py-20 bg-secondary/50 rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Our Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <Card className="text-center h-full">
                <CardHeader>
                  <div className="relative w-40 h-40 mx-auto mb-4">
                    <Image
                      src={founder.image}
                      alt={`Portrait of ${founder.name}`}
                      fill
                      className="rounded-full object-cover"
                      data-ai-hint={founder['data-ai-hint']}
                    />
                  </div>
                  <CardTitle className="text-2xl">{founder.name}</CardTitle>
                  <p className="text-primary font-semibold">{founder.title}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{founder.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
