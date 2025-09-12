'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <Image
          src="https://picsum.photos/seed/hero-bg/1800/1200"
          alt="Students in a classroom looking hopeful"
          fill
          className="object-cover"
          data-ai-hint="kenyan students classroom smiling"
          priority
        />
        <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="relative z-20 flex flex-col items-center px-4 text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]"
        >
          Sponsor a Dream. Change a Life.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl text-lg text-gray-200 [text-shadow:0_1px_3px_rgba(0,0,0,0.5)]"
        >
          Education is the bridge to opportunity. Step into the shoes of a donor and see how your choices can unlock futures.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8, type: 'spring', stiffness: 120 }}
          className="mt-8"
        >
          <Link href="/game" passHref>
            <button className="btn px-8 py-4 text-lg">
               🎮 Play the Game
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
