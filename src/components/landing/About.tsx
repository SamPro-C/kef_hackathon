'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">
            About the Kenya Education Fund
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-8">
            The Kenya Education Fund (KEF) provides comprehensive, 4-year scholarships to promising yet disadvantaged students in Kenya so they can complete high school and build a brighter future for themselves, their families, and their communities.
          </p>
          <Link href="/impact" passHref>
            <button className="btn secondary px-8 py-3 text-lg">
              Learn More &rarr;
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
