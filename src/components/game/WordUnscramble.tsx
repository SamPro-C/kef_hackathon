'use client';
import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Gift, PlayCircle } from 'lucide-react';

const WORDS = [
  { word: 'HOPE', hint: 'A feeling of expectation and desire for a certain thing to happen.', time: 5 },
  { word: 'DREAM', hint: 'A cherished aspiration, ambition, or ideal.', time: 5 },
  { word: 'FUTURE', hint: 'The time or a period of time following the moment of speaking or writing.', time: 6 },
  { word: 'SCHOOL', hint: 'An institution for educating children.', time: 6 },
  { word: 'CHANGE', hint: 'Make or become different.', time: 6 },
  { word: 'IMPACT', hint: 'Have a strong effect on someone or something.', time: 6 },
  { word: 'GIVING', hint: 'Freely transfer the possession of something to someone.', time: 6 },
  { word: 'LEARN', hint: 'Gain or acquire knowledge of or skill in something.', time: 5 },
  { word: 'LEADER', hint: 'A person who leads or commands a group.', time: 6 },
  { word: 'VISION', hint: 'The ability to think about or plan the future with imagination or wisdom.', time: 6 },
  { word: 'SUPPORT', hint: 'Bear all or part of the weight of; hold up.', time: 7 },
  { word: 'SUCCESS', hint: 'The accomplishment of an aim or purpose.', time: 7 },
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
  const [gameStarted, setGameStarted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [scrambledWord, setScrambledWord] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  const currentWordData = useMemo(() => WORDS[wordIndex % WORDS.length], [wordIndex]);
  const [timeLeft, setTimeLeft] = useState(currentWordData.time);

  const score = useMemo(() => correctAnswers * 2, [correctAnswers]);

  const nextWord = useCallback(() => {
    setWordIndex(i => i + 1);
    setGuess('');
    setStatus('idle');
  }, []);

  useEffect(() => {
    if (gameStarted) {
      const newScrambledWord = shuffle(currentWordData.word);
      setScrambledWord(newScrambledWord);
      setTimeLeft(currentWordData.time);
      inputRef.current?.focus();
    }
  }, [wordIndex, currentWordData, gameStarted]);

  useEffect(() => {
    if (!gameStarted || status !== 'idle') return;

    if (timeLeft === 0) {
      setStatus('incorrect'); // Mark as incorrect for visual feedback
      setTimeout(nextWord, 800);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameStarted, status, nextWord]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== 'idle') return;

    if (guess.trim().toUpperCase() === currentWordData.word) {
      setStatus('correct');
      setCorrectAnswers(c => c + 1);
      setTimeout(nextWord, 800);
    } else {
      setStatus('incorrect');
      setTimeout(() => {
          setStatus('idle');
          setGuess('');
      }, 800);
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
        <CardTitle className="text-2xl">Step 1: The Supporter Challenge</CardTitle>
        <p className="text-muted-foreground">Unscramble words to earn scholarship years.</p>
        <div className="flex justify-between items-baseline font-bold text-lg pt-4">
            <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary"/>
                <span>Years Earned: {score}</span>
            </div>
            {gameStarted && <span>Word Time: {timeLeft}s</span>}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        {!gameStarted ? (
            <div className="flex flex-col items-center gap-4 my-8">
                <p className="text-muted-foreground">Press Start to begin the challenge!</p>
                <button onClick={() => setGameStarted(true)} className="btn">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Start Challenge
                </button>
            </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-2 text-sm">Unscramble this word:</p>
            <div className="scrambled-word">
              {scrambledWord.split('').map((char, index) => (
                <motion.div 
                  key={`${wordIndex}-${index}`}
                  className="char-box"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {char}
                </motion.div>
              ))}
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
          </>
        )}

        <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-2">Finished unscrambling?</p>
            <button onClick={() => onGameEnd(score)} className="btn secondary" disabled={!gameStarted}>
                Proceed with {score} Scholarship Years
            </button>
        </div>

      </CardContent>
    </Card>
  );
};

export default WordUnscramble;
