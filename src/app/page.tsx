import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="relative flex flex-col items-center justify-center flex-1 w-full min-h-screen px-4 text-center text-white">
        <div className="absolute inset-0 bg-black opacity-50 z-0"></div>
        <div
          className="absolute inset-0 bg-cover bg-center -z-10"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop)',
          }}
        ></div>
        <div className="relative z-10 flex flex-col items-center max-w-4xl px-4">
          <h1
            className="text-4xl font-bold tracking-tighter text-transparent md:text-6xl lg:text-7xl font-space-grotesk bg-clip-text bg-gradient-to-b from-white to-gray-400 animate-slow-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            Dreams Shouldn’t Die at the Classroom Door.
          </h1>
          <p
            className="max-w-2xl mx-auto mt-6 text-lg text-gray-300 md:text-xl animate-slow-fade-in"
            style={{ animationDelay: '0.7s' }}
          >
            Every year, thousands of bright Kenyan students drop out of
            school—not because they lack ambition, but because they lack
            resources. Poverty steals opportunities, and dreams fade away
            before they even begin.
          </p>
          <div
            className="mt-12 animate-slow-fade-in"
            style={{ animationDelay: '1.2s' }}
          >
            <Button size="lg" className="animate-glow">
              See the Transformation
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
