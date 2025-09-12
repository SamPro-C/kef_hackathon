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
    name: 'James K.',
    quote: 'From a village classroom to a world of opportunity.',
    summary:
      "James grew up in a rural village with limited access to education. KEF's support provided him not just with school fees, but with the confidence to pursue his dream of becoming a software engineer.",
    fullStory:
      "James' journey is a testament to the power of opportunity. Growing up, his school was a simple mud-walled building, and the journey there was long. Yet, his ambition was always strong. When KEF stepped in, it was a turning point. The scholarship covered his tuition, and the mentorship program connected him with professionals who guided his career path. Today, James works as a lead developer at a top tech firm in Nairobi, creating applications that solve real-world problems. He actively mentors young students from his community, ensuring the cycle of support continues.",
    image: 'https://picsum.photos/seed/101/600/400',
    'data-ai-hint': 'male portrait',
  },
  {
    id: 2,
    name: 'Mary W.',
    quote: 'KEF taught me that my voice matters.',
    summary:
      'Mary was a shy but brilliant student who found her voice through KEF’s leadership workshops. She is now a passionate community organizer and advocate for girls’ education.',
    fullStory:
      "Mary's transformation is one of empowerment. Initially reserved, she excelled academically but hesitated to participate in class. KEF's CREW (Creating Respect and Equality for Women) workshops were a game-changer. She learned public speaking, leadership skills, and the importance of self-advocacy. This newfound confidence propelled her to become student body president. After graduating, she founded a non-profit that provides sanitary products and health education to girls in her region, ensuring they can stay in school without interruption. Her work has been recognized nationally, and she is a powerful voice for change.",
    image: 'https://picsum.photos/seed/102/600/400',
    'data-ai-hint': 'female portrait',
  },
  {
    id: 3,
    name: 'Samuel M.',
    quote: 'My dream was to heal my community.',
    summary:
      "With KEF's help, Samuel was able to complete his secondary education and attend medical school. He is now a doctor serving in his hometown, bringing vital healthcare to hundreds of families.",
    fullStory:
      'Samuel’s story is about giving back. Having witnessed the struggle to access healthcare in his village, he was determined to become a doctor. The financial burden was immense, but a KEF scholarship saw him through high school with top marks. His dedication earned him a place in medical school, and throughout his studies, he remained committed to his goal. Instead of seeking lucrative positions in the city, Dr. Samuel returned to his hometown. He now runs the local clinic, treating illnesses, delivering babies, and leading public health campaigns. He is a hero in his community.',
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
    'data-ai-hint': 'female portrait smiling',
  },
];

type Story = (typeof stories)[0];

export default function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">KEF Alumni Stories</h1>
          <p className="text-center text-lg mt-4 text-gray-600 max-w-3xl mx-auto">
            These are the real journeys of transformation your support makes possible.
            Every donation, every sponsorship, creates a new story of hope and success.
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
