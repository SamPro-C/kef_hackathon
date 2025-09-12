'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';

const stories = [
  {
    id: 1,
    name: 'Sandra K.',
    quote: "KEF gave me the gift of focus. I no longer worry about fees every Monday.",
    summary:
      "Sandra feared being sent home for unpaid fees. A KEF scholarship gave her the stability to focus on her studies and pursue a Diploma in Electrical and Electronics Technology.",
    fullStory:
      "From South Kinangop, Nyandarua County, Sandra completed Form 4 in 2023. Before KEF, the constant fear of being sent home for unpaid fees was a heavy burden. The scholarship provided her with stability and peace of mind, allowing her to concentrate fully on her studies. An avid volleyball player who enjoys chapati with ndengu stew, she is now pursuing a Diploma in Electrical and Electronics Technology, a future made possible by this support.",
    image: 'https://picsum.photos/seed/101/600/400',
    'data-ai-hint': 'female portrait smiling',
  },
  {
    id: 2,
    name: 'Leah W.',
    quote: 'KEF is a lifeline for students like me. It restored my confidence and my dream.',
    summary:
      'Leah is a bright Form 3 student who felt uncertain about her future. The KEF scholarship renewed her confidence and enabled her to continue school, where she dreams of becoming a teacher.',
    fullStory:
      "Leah, a bright Form 3 student at Ndururumo High School in Laikipia, felt her future was uncertain due to financial struggles. A KEF scholarship was the lifeline she needed, renewing her confidence and allowing her to continue her education without interruption. She is now able to dream big, with aspirations of becoming a teacher to help shape the next generation. She enjoys playing volleyball, and her favorite animal is the giraffe.",
    image: 'https://picsum.photos/seed/102/600/400',
    'data-ai-hint': 'female portrait',
  },
  {
    id: 3,
    name: 'Maurice O.',
    quote: 'I’m proof that KEF turns hopelessness into purpose.',
    summary:
      "After repeating Class 8 twice due to lack of funds, KEF helped Maurice finish school. He is now a finance professional who gives back to his community through tutoring and mentorship.",
    fullStory:
      'Maurice Omondi’s journey is one of incredible perseverance. He had to repeat Class 8 twice simply because his family could not afford the fees to join high school. KEF’s intervention, covering his fees, uniform, and books, was the turning point. After successfully graduating, he pursued a career in finance and worked as a Teller at Co-operative Bank. Today, Maurice actively gives back by tutoring and public speaking, ensuring his story inspires others to overcome their own challenges.',
    image: 'https://picsum.photos/seed/103/600/400',
    'data-ai-hint': 'male portrait smiling',
  },
  {
    id: 4,
    name: 'Grace A.',
    quote: "An education is the one thing no one can take from you.",
    summary:
      "Grace's family struggled to afford her school fees. KEF's intervention allowed her to not only finish school but to excel, eventually becoming a successful entrepreneur and mentor.",
    fullStory:
      "Grace's journey is one of resilience and entrepreneurial spirit. Her parents were small-scale farmers, and every school term was a financial struggle. KEF's support was the lifeline she needed. Freed from the worry of being sent home, she focused on her studies and participated in KEF's business workshops. After university, she launched her own sustainable agribusiness, employing dozens of people from her village and promoting food security. She is a role model for young entrepreneurs and a testament to how education can break the cycle of poverty.",
    image: 'https://picsum.photos/seed/104/600/400',
    'data-ai-hint': 'female portrait happy',
  },
];

type Story = (typeof stories)[0];

export default function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Real Lives, Real Impact</h1>
          <p className="text-center text-lg mt-4 text-gray-600 max-w-3xl mx-auto">
            Every scholarship is a story of resilience, hope, and opportunity. These are the voices of KEF scholars and alumni.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {stories.map((story) => (
            <Card
              key={story.id}
              onClick={() => setSelectedStory(story)}
              className="cursor-pointer hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out group"
            >
              <CardHeader className="p-0">
                <Image
                  src={story.image}
                  alt={`Portrait of ${story.name}`}
                  width={600}
                  height={400}
                  className="rounded-t-lg object-cover w-full h-64"
                  data-ai-hint={story['data-ai-hint']}
                />
              </CardHeader>
              <CardContent className="pt-6">
                <CardTitle className="text-2xl font-bold">{story.name}</CardTitle>
                <p className="text-lg text-orange-500 mt-2 font-semibold">
                  &ldquo;{story.quote}&rdquo;
                </p>
                <p className="text-gray-600 mt-4">{story.summary}</p>
              </CardContent>
              <CardFooter>
                 <p className="text-sm font-bold text-gray-500 group-hover:text-orange-500 transition-colors">Read full story &rarr;</p>
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>

      <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="max-w-3xl">
          {selectedStory && (
            <>
              <DialogHeader>
                <div className="relative h-64 w-full mb-4">
                   <Image
                      src={selectedStory.image}
                      alt={`Portrait of ${selectedStory.name}`}
                      fill
                      className="rounded-lg object-cover"
                      data-ai-hint={selectedStory['data-ai-hint']}
                    />
                </div>
                <DialogTitle className="text-3xl font-bold">{selectedStory.name}</DialogTitle>
                <p className="text-xl text-orange-500 mt-2 font-semibold">
                  &ldquo;{selectedStory.quote}&rdquo;
                </p>
              </DialogHeader>
              <DialogDescription className="mt-4 text-base text-gray-700 leading-relaxed">
                {selectedStory.fullStory}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
