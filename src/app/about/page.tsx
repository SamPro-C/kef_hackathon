'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Founders from '@/components/about/Founders';

const AboutPage = () => {
  return (
    <main className="container mx-auto px-4 py-16">
      <div className="text-center mb-12 mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold"
        >
          Our Story
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center text-lg mt-4 text-muted-foreground max-w-3xl mx-auto"
        >
          Self-reliance for people in Kenya through education.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid md:grid-cols-2 gap-12 items-center mb-20"
      >
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Kenya Education Fund (KEF) is dedicated to providing access to education for those who have the least, believing that talent is universal but opportunity is not. We provide comprehensive, 4-year scholarships to promising yet disadvantaged students in Kenya so they can complete high school and build a brighter future for themselves, their families, and their communities.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our holistic approach includes not just school fees but also mentorship, career guidance, and life skills training to empower the next generation of leaders.
          </p>
        </div>
        <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
           <Image
              src="https://picsum.photos/seed/about/600/400"
              alt="Students in a classroom"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              data-ai-hint="kenyan students classroom"
            />
        </div>
      </motion.div>

      <Founders />

    </main>
  );
};

export default AboutPage;
