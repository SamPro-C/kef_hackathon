'use client';
import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { CheckCircle, XCircle, Gift, PlayCircle } from 'lucide-react';

const ALL_WORDS = [
  { word: 'HOPE', hint: 'A feeling of expectation and desire for a certain thing to happen.', time: 10 },
  { word: 'DREAM', hint: 'A cherished aspiration, ambition, or ideal.', time: 10 },
  { word: 'FUTURE', hint: 'The time or a period of time following the moment of speaking or writing.', time: 10 },
  { word: 'SCHOOL', hint: 'An institution for educating children.', time: 10 },
  { word: 'CHANGE', hint: 'Make or become different.', time: 10 },
  { word: 'IMPACT', hint: 'Have a strong effect on someone or something.', time: 10 },
  { word: 'GIVING', hint: 'Freely transfer the possession of something to someone.', time: 10 },
  { word: 'LEARN', hint: 'Gain or acquire knowledge of or skill in something.', time: 10 },
  { word: 'LEADER', hint: 'A person who leads or commands a group.', time: 10 },
  { word: 'VISION', hint: 'The ability to think about or plan the future with imagination or wisdom.', time: 10 },
  { word: 'SUPPORT', hint: 'Bear all or part of the weight of; hold up.', time: 10 },
  { word: 'SUCCESS', hint: 'The accomplishment of an aim or purpose.', time: 10 },
  { word: 'JOURNEY', hint: 'An act of traveling from one place to another.', time: 10 },
  { word: 'EMPOWER', hint: 'Give (someone) the authority or power to do something.', time: 10 },
  { word: 'INSPIRE', hint: 'Fill (someone) with the urge or ability to do or feel something.', time: 10 },
];

const GAME_WORD_LIMIT = 10;
const PAUSE_DURATION = 1500; // 1.5 seconds

const shuffle = (word: string): string => {
  let a = word.split(''), n = a.length;
  for (let i = n - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  const shuffled = a.join('');
  return shuffled === word ? shuffle(word) : shuffled;
};

// Function to get a random subset of words for the game
const getGameWords = () => {
    const shuffled = [...ALL_WORDS].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, GAME_WORD_LIMIT);
}

const WordUnscramble = ({ onGameEnd }: { onGameEnd: (score: number) => void }) => {
  const [gameWords, setGameWords] = useState<(typeof ALL_WORDS[0])[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [wordIndex, setWordIndex] = useState(0);
  const [guess, setGuess] = useState('');
  const [status, setStatus] = useState<'idle' | 'correct' | 'incorrect'>('idle');
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [scrambledWord, setScrambledWord] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFinished, setIsFinished] = useState(false);
  
  const currentWordData = useMemo(() => gameWords[wordIndex], [wordIndex, gameWords]);
  const [timeLeft, setTimeLeft] = useState(0);

  const score = useMemo(() => correctAnswers * 2, [correctAnswers]);

  const nextWord = useCallback(() => {
    setStatus('idle');
    setGuess('');
    if (wordIndex + 1 >= GAME_WORD_LIMIT) {
      setIsFinished(true);
      return;
    }
    setWordIndex(i => i + 1);
  }, [wordIndex]);
  
  const handleStartGame = () => {
    setGameWords(getGameWords());
    setWordIndex(0);
    setCorrectAnswers(0);
    setIsFinished(false);
    setGameStarted(true);
  }

  useEffect(() => {
    if (gameStarted && currentWordData && !isFinished) {
      const newScrambledWord = shuffle(currentWordData.word);
      setScrambledWord(newScrambledWord);
      setTimeLeft(currentWordData.time);
      setStatus('idle');
      inputRef.current?.focus();
    }
  }, [wordIndex, currentWordData, gameStarted, isFinished]);

  useEffect(() => {
    if (!gameStarted || status !== 'idle' || isFinished) return;

    if (timeLeft <= 0) {
      setStatus('incorrect'); // Time's up, mark as incorrect
      setTimeout(nextWord, PAUSE_DURATION);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(t => t - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, gameStarted, status, nextWord, isFinished]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (status !== 'idle' || isFinished) return;

    if (guess.trim().toUpperCase() === currentWordData.word) {
      setStatus('correct');
      setCorrectAnswers(c => c + 1);
      setTimeout(nextWord, PAUSE_DURATION);
    } else {
      setStatus('incorrect');
      setTimeout(nextWord, PAUSE_DURATION);
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
        <p className="text-muted-foreground">Unscramble {GAME_WORD_LIMIT} words to earn scholarship years.</p>
        <div className="flex justify-between items-baseline font-bold text-lg pt-4">
            <div className="flex items-center gap-2">
                <Gift className="h-5 w-5 text-primary"/>
                <span>Years Earned: {score}</span>
            </div>
            {gameStarted && !isFinished && <span>Word Time: {timeLeft}s</span>}
            {isFinished && <span className="text-primary">Finished!</span>}
        </div>
      </CardHeader>
      <CardContent className="text-center">
        {!gameStarted ? (
            <div className="flex flex-col items-center gap-4 my-8">
                <p className="text-muted-foreground">Unscramble {GAME_WORD_LIMIT} words to earn scholarship years.</p>
                <button onClick={handleStartGame} className="btn">
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Start Challenge
                </button>
            </div>
        ) : isFinished ? (
            <div className="flex flex-col items-center gap-4 my-8">
                <p className="text-3xl font-bold">Challenge Complete!</p>
                <p className="text-xl">You answered <span className="text-primary">{correctAnswers} out of {GAME_WORD_LIMIT}</span> correctly.</p>
                 <p className="text-lg">You earned <span className="font-bold">{score}</span> scholarship years.</p>
            </div>
        ) : (
          <>
            <p className="text-muted-foreground mb-2 text-sm">Word {wordIndex + 1} of {GAME_WORD_LIMIT}:</p>
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
                autoCapitalize="off"
                autoCorrect="off"
              />
              <div className="absolute right-2 top-1/2 -translate-y-1/2">
                {status === 'correct' && <CheckCircle className="h-6 w-6 text-green-500" />}
                {status === 'incorrect' && <XCircle className="h-6 w-6 text-destructive" />}
              </div>
            </form>

            <div className="text-sm text-muted-foreground mt-4 h-10 flex flex-col justify-center items-center">
              {status === 'incorrect' && (
                <p>The correct word was: <span className="font-bold text-primary">{currentWordData?.word}</span></p>
              )}
               {status === 'idle' && (
                <p>{currentWordData?.hint ?? ''}</p>
              )}
            </div>
          </>
        )}

        <div className="mt-8">
            <p className="text-sm text-muted-foreground mb-2">Ready to sponsor students?</p>
            <button onClick={() => onGameEnd(score)} className="btn secondary" disabled={!gameStarted}>
                Proceed with {score} Scholarship Years
            </button>
        </div>

      </CardContent>
    </Card>
  );
};

export default WordUnscramble;
