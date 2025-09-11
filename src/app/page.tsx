import { Button } from '@/components/ui/button';
import { ArrowRight, Backpack } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[calc(100vh-56px)] px-4 text-center text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-green-900/30 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center -z-10"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1527419354220-c924c44155a5?q=80&w=2070&auto=format&fit=crop)',
          filter: 'grayscale(50%) brightness(0.7)',
        }}
      ></div>

      <div className="relative z-20 flex flex-col items-center max-w-4xl px-4">
        <h1
          className="text-4xl font-bold tracking-tighter text-white md:text-6xl lg:text-7xl font-space-grotesk animate-slow-fade-in"
          style={{ animationDelay: '0.2s' }}
        >
          Dreams Shouldn’t Die at the Classroom Door.
        </h1>
        <p
          className="max-w-3xl mx-auto mt-6 text-lg text-gray-200 md:text-xl animate-slow-fade-in"
          style={{ animationDelay: '0.7s' }}
        >
          Every year, thousands of bright Kenyan students drop out of school—not
          because they lack ambition, but because they lack resources. Poverty
          steals opportunities, and dreams fade away before they even begin.
        </p>

        <div
          className="relative mt-12 text-center h-24 w-24 flex items-center justify-center animate-slow-fade-in schoolbag-container"
          style={{ animationDelay: '1.2s' }}
        >
          <Backpack className="w-20 h-20 text-white/50 schoolbag-icon transition-opacity duration-300" />
          <p className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-center text-amber-300 schoolbag-question">
            What if you could change this story?
          </p>
        </div>

        <div
          className="mt-12 animate-slow-fade-in"
          style={{ animationDelay: '1.7s' }}
        >
          <Button size="lg" className="animate-glow" asChild>
            <Link href="/stories">
              See the Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}