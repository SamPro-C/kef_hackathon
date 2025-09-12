'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const founders = [
  {
    name: 'Bradley J. Broder',
    title: 'Co-Founder & Executive Director (In Memoriam)',
    bio: `Bradley Broder’s journey began with a simple yet powerful vision: to unlock opportunities for Kenyan youth through access to quality education. Born and raised in the United States, Brad first traveled to Kenya as a Peace Corps volunteer, where he witnessed firsthand the challenges faced by young people in underserved communities. Moved by their resilience and potential, he returned to Kenya with a purpose: to create a path for talented but financially disadvantaged students to access secondary education and beyond.`,
    sections: [
      {
        title: 'A Vision Turned Legacy',
        content: `In 2006, Brad founded the Kenya Education Fund (KEF) to provide scholarships for students from Kenya's most marginalized communities. His work quickly grew, impacting over 4,500 students across the country. KEF’s programs were designed not only to fund education but to empower students with mentorship, life skills, and the tools to break the cycle of poverty. Through workshops and career support, Brad ensured that KEF’s students were equipped for success long after they left school, with 98% transitioning successfully to university.`
      },
      {
        title: 'A Lasting Impact',
        content: `Brad’s legacy continues to inspire KEF’s mission today. Though he passed away in 2022, his spirit of service, compassion, and resilience remains at the heart of KEF. Thanks to Brad’s vision, KEF has grown into an organization that not only funds education but fosters hope and opportunity for Kenya’s youth. Today, we honor Brad’s life and the thousands of students whose futures have been forever changed by his vision.`
      }
    ],
    image: 'https://picsum.photos/seed/founder2/400/400',
    'data-ai-hint': 'male portrait professional',
  },
  {
    name: 'Dominic M. Mwenja',
    title: 'Co-Founder & President',
    bio: "Dominic is a thought leader with over 26 years of consistent and progressive leadership experience. Before KEF, he worked for the Ministry of Health as a Public Health Officer. Dom met the late Bradly Broder – who was a Peace Corp Volunteer – while working in Loitokitok District Hospital over 20 years ago. He believes in empowering young people who will be responsible and dependable citizens of the future with a deep sense of community and giving back. Dominic studied in Kenya and Japan and holds a Masters’ Degree from the Great Lakes University of Kisumu.",
    sections: [
      {
        title: 'From Hardship to Hope',
        content: `The late Nelson Mandela once said, “Education is the most powerful weapon which we can use to change the world.” This has remained true for Dominic. The 2nd born in a family of 5 boys, he grew up poor in the informal settlements of Nairobi, a struggle he attributes to his parents not being educated. He saw that people were poor because they did not go to school, and they did not go to school because they were poor. Dom believed breaking this cycle would change their lives for the better.`
      },
      {
        title: 'A Unique Investment in People',
        content: `KEF has remained laser-focused on providing access to quality education and ensuring that scholars transition to tertiary education and eventually the world of work. “The cycle of poverty will not be broken if they don’t earn a meaningful income,” says Dom. KEF’s “secret sauce” includes auxiliary programs that allow scholars to become well-rounded change-makers. “KEF does not give charity. We invest in young people who have the potential to change their lives and those around them.”`
      }
    ],
    image: 'https://picsum.photos/seed/founder1/400/400',
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
