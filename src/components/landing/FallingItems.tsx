'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book, PenLine, Briefcase, LucideIcon } from 'lucide-react';

const icons = [Book, PenLine, Briefcase];
const NUM_ITEMS = 15;

interface FallingItem {
  id: number;
  Icon: LucideIcon;
  left: string;
  duration: number;
  delay: number;
  size: number;
}

const FallingItems = () => {
  const [items, setItems] = useState<FallingItem[]>([]);
  const [windowHeight, setWindowHeight] = useState(0);

  useEffect(() => {
    setWindowHeight(window.innerHeight);

    const generatedItems = Array.from({ length: NUM_ITEMS }).map((_, i) => ({
      id: i,
      Icon: icons[i % icons.length],
      left: `${Math.random() * 100}vw`,
      duration: 5 + Math.random() * 10, // Duration between 5 and 15 seconds
      delay: Math.random() * 15, // Staggered start times
      size: 20 + Math.random() * 20, // Size between 20px and 40px
    }));
    setItems(generatedItems);
  }, []);

  if (windowHeight === 0) return null;

  return (
    <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
      {items.map(({ id, Icon, left, duration, delay, size }) => (
        <motion.div
          key={id}
          className="falling-item"
          initial={{ top: -50, x: left, opacity: 0 }}
          animate={{
            top: windowHeight + 50,
            opacity: [0, 0.2, 0.2, 0.2, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
          }}
        >
          <Icon size={size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FallingItems;
