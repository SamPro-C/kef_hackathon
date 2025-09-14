'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const founders = [
  {
    name: 'Bradley J. Broder',
    title: 'Co-Founder & Executive Director (In Memoriam)',
    bio: `Bradley Broder’s journey began as a Peace Corps volunteer in Kenya, where he witnessed firsthand the potential of bright but disadvantaged students. Moved by their resilience, he founded the Kenya Education Fund (KEF) in 2006 to create a pathway for them to access secondary education and build brighter futures.`,
    sections: [
      {
        title: 'A Vision Turned Legacy',
        content: `Under Brad's leadership, KEF grew to support over 4,500 students, providing not just school fees but also mentorship and life skills. His holistic approach ensured students were equipped for success long after graduation, with 98% transitioning to university.`
      },
      {
        title: 'A Lasting Impact',
        content: `Though he passed away in 2022, Brad's spirit of service and compassion remains at the heart of KEF. His legacy lives on through the thousands of lives transformed by his vision, and his work continues to inspire our mission to foster hope and opportunity for Kenya’s youth.`
      }
    ],
    image: '/images/bradley.webp',
    'data-ai-hint': 'male portrait professional',
  },
  {
    name: 'Dominic M. Mwenja',
    title: 'Co-Founder & President',
    bio: "With over 26 years of leadership experience, Dominic co-founded KEF alongside Bradley Broder. Having grown up in poverty, Dominic saw education as the definitive tool to break the cycle. His experience as a Public Health Officer reinforced his belief that empowering youth is the key to building a responsible and self-reliant society.",
    sections: [
      {
        title: 'From Hardship to Hope',
        content: `Dominic's personal journey fueled his passion. He believes that people were trapped in a cycle: “They were poor because they did not go to school, and they did not go to school because they were poor.” He committed himself to breaking this cycle by providing access to quality education.`
      },
      {
        title: 'A Unique Investment in People',
        content: `“KEF does not give charity. We invest in young people who have the potential to change their lives and those around them.” Dominic champions KEF’s holistic approach, which includes mentorship and life skills to ensure scholars become well-rounded change-makers who earn a meaningful income and give back to their communities.`
      }
    ],
    image: '/images/dominic.webp',
    'data-ai-hint': 'male portrait smiling',
  },
];

const Founders = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Meet Our Founders</h2>
        <div className="space-y-20">
          {founders.map((founder, index) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center"
            >
              <div className={`relative w-48 h-48 md:w-64 md:h-64 mx-auto md:mx-0 ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                <Image
                  src={founder.image}
                  alt={`Portrait of ${founder.name}`}
                  fill
                  className="rounded-full object-cover shadow-lg"
                  data-ai-hint={founder['data-ai-hint']}
                />
              </div>

              <div className="md:col-span-2 text-center md:text-left">
                <h3 className="text-3xl font-bold">{founder.name}</h3>
                <p className="text-primary font-semibold text-lg mb-4">{founder.title}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{founder.bio}</p>
                
                <div className="space-y-4">
                  {founder.sections.map(section => (
                    <div key={section.title}>
                      <h4 className="font-bold text-xl mb-2">{section.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
