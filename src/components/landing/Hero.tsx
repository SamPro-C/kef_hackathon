'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Hero = () => {
  const [showBubble, setShowBubble] = useState(false);

  const handleStudentClick = () => {
    setShowBubble(true);
    setTimeout(() => {
      setShowBubble(false);
    }, 2000);
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-orange-50 to-yellow-50 text-center">
      <div className="absolute inset-0 z-0">
        {/* Animated Stars Background can be added here */}
      </div>
      
      <div className="relative z-10 flex flex-col items-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-gray-800"
        >
          Sponsor a Dream. Change a Life.
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 max-w-2xl text-lg text-gray-600"
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
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105">
               🎮 Play the Game
            </button>
          </Link>
        </motion.div>

        <div className="absolute bottom-10">
          <motion.div 
            initial={{ opacity: 0, y: 50}}
            animate={{ opacity: 1, y: 0}}
            transition={{ duration: 1, delay: 1 }}
            className="relative"
            onClick={handleStudentClick}
          >
            <Image 
              src="https://picsum.photos/seed/students/800/200"
              alt="Illustration of students walking"
              width={400}
              height={100}
              className="cursor-pointer"
              data-ai-hint="students walking illustration"
            />
             {showBubble && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                className="absolute -top-12 left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-lg shadow-md"
              >
                <p className="text-sm text-gray-700 whitespace-nowrap">Thank you!</p>
                <div className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white"></div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
