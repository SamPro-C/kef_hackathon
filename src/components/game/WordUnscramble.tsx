'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Gift } from 'lucide-react';

const WORDS = [
  { word: 'HOPE', hint: 'A feeling of expectation and desire for a certain thing to happen.' },
  { word: 'DREAM', hint: 'A cherished aspiration, ambition, or ideal.' },
  { word: 'FUTURE', hint: 'The time or a period of time following the moment of speaking or writing; time regarded as still to come.' },
  { word: 'SCHOOL', hint: 'An institution for educating children.' },
  { word: 'CHANGE', hint: 'Make or become different.' },
  { word: 'IMPACT', hint: 'Have a strong effect on someone or something.' },
];

const shuffle = (word: string): string => {
  let a = word.split(''), n = a.length;
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  const shuffled = a.join('');
  return shuffled === word ? shuffle(word) : shuffled;
};

const WordUnscramble = ({ onGameEnd }: { onGameEnd: (score: number) => void }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(45);
  const [scrambledWord, setScrambledWord] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const currentWordData = useMemo(() => WORDS[wordIndex % WORDS.length], [wordIndex]);
  
  useEffect(() => {
    // This now runs only on the client, after hydration
    setScrambledWord(shuffle(currentWordData.word));
    inputRef.current?.focus();
  }, [currentWordData]);


  useEffect(() => {
    if (timeLeft === 0) {
      onGameEnd(score);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, onGameEnd, score]);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (guess.trim().toUpperCase() === currentWordData.word) {
      setStatus('correct');
      setScore(s => s + 2); // Each correct word gives 2 years
      setTimeout(() => {
        setWordIndex(i => i + 1);
        setGuess('');
        setStatus('idle');
      }, 800);
    } else {
      setStatus('incorrect');
      setTimeout(() => setStatus('idle'), 800);
    }
  };

  const getBorderColor = () => {
    if (status === 'correct') return 'border-green-500';
    if (status === 'incorrect') return 'border-destructive';
    return 'border-border';
  }

  return (
    <Card className="word-unscramble-card max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Step 1: Earn Your Donation</CardTitle>
        <p className="text-muted-foreground">Unscramble words to earn scholarship years.</p>
        <div className="flex justify-between items-baseline font-bold text-lg pt-4">
            <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary"/>
                <span>Years Earned: {score}</span>
            </div>
            <span>Time Left: {timeLeft}s</span>
        </div>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-muted-foreground mb-2 text-sm">Unscramble this word:</p>
        <div className="scrambled-word">
          {scrambledWord ? (
            scrambledWord.split('').map((char, index) => (
              <motion.div 
                key={`${wordIndex}-${index}`}
                className="char-box"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                {char}
              </motion.div>
            ))
          ) : (
             // Render placeholders or a loading state on the server and initial client render
            Array.from({length: currentWordData.word.length}).map((_, index) => (
               <div key={index} className="char-box bg-muted"></div>
            ))
          )}
        </div>
        
        <form onSubmit={handleSubmit} className="relative mt-6">
          <input
            ref={inputRef}
            type="text"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
            className={`unscramble-input transition-all ${getBorderColor()}`}
            placeholder="Your answer..."
            disabled={status !== 'idle'}
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2">
            {status === 'correct' && <CheckCircle className="h-6 w-6 text-green-500" />}
            {status === 'incorrect' && <XCircle className="h-6 w-6 text-destructive" />}
          </div>
        </form>

        <p className="text-sm text-muted-foreground mt-4 h-5">{currentWordData.hint}</p>

        <button onClick={() => onGameEnd(score)} className="btn mt-6">
            Start Donating with {score} Years
        </button>

      </CardContent>
    </Card>
  );
};

export default WordUnscramble;
