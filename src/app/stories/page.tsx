'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
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
    image: '/images/sandra.webp',
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
    image: '/images/leah.webp',
    'data-ai-hint': 'female portrait',
  },
  {
    id: 3,
    name: 'Jeff Mweu Mutuku',
    quote: 'Being treated like a son in the KEF family.',
    summary:
      "Jeff dreamed of becoming a doctor but worried about affording high school. KEF's support made his dream possible, providing not just financial aid but a sense of family and belonging that changed everything for him.",
    fullStory:
      'From Worry to Wonder: Jeff\'s Journey\nMay 27\nWritten By KEF\n\nOn a sunny afternoon, while the rest of the world buzzed with its daily routines, Jeff Mweu Mutuku was in quiet reflection. Just a few years earlier, the thought of joining high school felt like an impossible dream. But on this particular day Jeff was ecstatic! His parents had just received the call from Kenya Education Fund, he was successful! This was light at the end of the tunnel he would join the rest of peer on admission day!\n\nJeff, now a determined Form 3 student from Ngaremara, describes his home as a place where "there is peace always." In a world that often feels chaotic, this peace is a gift—and so is Jeff.\n\nHis dream? To become a doctor.\n\n"Because of how they help in the society," he said. Jeff has always been drawn to the idea of healing, of making others feel better, of serving his community in one of the most impactful ways possible.\n\nBut before dreams come true, many walk through valleys of uncertainty. For Jeff, that valley was the heavy question that once kept him up at night: "How will I join high school?"\n\nThen something beautiful happened. Jeff became part of the KEF family—a turning point he still remembers with deep gratitude.\n\n"I felt happy and highly favored," he recalls. "Being treated like a son in the KEF family."\n\nIt wasn\'t just about school fees or supplies. It was the generosity, the warmth, the feeling of being seen and supported that changed everything. Jeff remembers how the KEF team welcomed him, believed in him, and gave him the tools to chase his dream.\n\nHe says it best: "Very generous and helpful."\n\nToday, when Jeff isn\'t studying for his exams, you\'ll likely find him on the football pitch or spending time with his beloved dogs—his two favorite pastimes. But his heart remains focused on his mission: to study hard, rise above his circumstances, and one day wear a white coat with pride.\n\nAnd we believe he will. Because when hope meets opportunity, the future becomes limitless.\n\nPhoto taken during his third KEF lifeskills workshop in Nairobi',
    image: '/images/jeff.webp',
    'data-ai-hint': 'male portrait smiling',
  },
  {
    id: 4,
    name: 'Violet',
    quote: 'KEF raises the young generation and helps them achieve their dreams.',
    summary:
      "Violet dreams of becoming a journalist but struggled with school fees. KEF's scholarship provided her with financial relief and the encouragement to pursue her passion for storytelling and meeting diverse people.",
    fullStory:
      'Violet\'s DREAM OF BECOMING A JOURNALIST\nJan 10\nWritten By KEF\n\nMeet Violet, a bright and ambitious Form 1 student with big dreams and a passion for storytelling. She lives in Obunga, where her favorite spot is the local library. "I usually go and study there," she says. It\'s a place of refuge and learning that fuels her dream of becoming a journalist one day. Her love for journalism is rooted in her desire to meet diverse people, gather their stories, and gain new perspectives that will help her grow both personally and professionally.\n\nGrowing up, life wasn\'t easy for Violet. Her mother worked tirelessly to provide for her, but affording school fees was a struggle. "My mother could only manage our daily meals from her hustle," Violet recalls, "and even that wasn\'t easy." Despite the hardships, Violet remained committed to her studies, constantly striving for success, though her progress sometimes felt invisible.\n\nThat changed when she received a scholarship from the Kenya Education Fund (KEF). "Being awarded the scholarship provided me with financial relief and reminded me to keep working hard and have hope that my dream will come true," she says with pride and gratitude. Through KEF, Violet not only received the support she needed but also the encouragement to pursue her aspirations.\n\nWhat Violet appreciates most about KEF is their holistic support, not only providing scholarships but also offering career coaching for underprivileged Kenyan students. "KEF raises the young generation and helps them achieve their dreams," she says.\n\nBy bridging the gap between primary and high school for financially underprivileged students, KEF ensures that young people like Violet have the opportunity to succeed and give back to their communities.',
    image: '/images/VIOLET.webp',
    'data-ai-hint': 'female portrait happy',
  },
];

type Story = (typeof stories)[0];

export default function StoriesPage() {
  const [selectedStory, setSelectedStory] = useState<Story | null>(null);

  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-12 mt-12">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold">Real Lives, Real Impact</motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-lg mt-4 text-muted-foreground max-w-3xl mx-auto">
            Every scholarship is a story of resilience, hope, and opportunity. These are the voices of KEF scholars and alumni.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
          {stories.map((story) => (
            <motion.div
              key={story.id}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => setSelectedStory(story)}
            >
              <Card
                className="cursor-pointer overflow-hidden group h-full flex flex-col"
              >
                <CardHeader className="p-0">
                  <div className="relative w-full h-64">
                    <Image
                      src={story.image}
                      alt={`Portrait of ${story.name}`}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      data-ai-hint={story['data-ai-hint']}
                    />
                  </div>
                </CardHeader>
                <CardContent className="pt-6 flex-grow">
                  <CardTitle className="text-2xl font-bold">{story.name}</CardTitle>
                  <p className="text-lg text-primary mt-2 font-semibold">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <p className="text-muted-foreground mt-4">{story.summary}</p>
                </CardContent>
                <CardFooter>
                  <p className="text-sm font-bold text-muted-foreground group-hover:text-primary transition-colors">Read full story &rarr;</p>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-lg text-muted-foreground">
            These stories are a testament to the generosity of our donors and the
            resilience of our students.
          </p>
          <a
            href="https://www.kenyaeducationfund.org/donate/"
            target="_blank"
            className="btn mt-6 text-lg px-8 py-3"
          >
            Become a part of the story
          </a>
        </div>
      </main>

      <Dialog open={!!selectedStory} onOpenChange={() => setSelectedStory(null)}>
        <DialogContent className="max-w-3xl p-0">
          {selectedStory && (
            <>
              <DialogHeader className="p-0">
                <div className="relative h-80 w-full">
                   <Image
                      src={selectedStory.image}
                      alt={`Portrait of ${selectedStory.name}`}
                      fill
                      className="rounded-t-lg object-cover"
                      data-ai-hint={selectedStory['data-ai-hint']}
                    />
                </div>
                <div className="p-6">
                  <DialogTitle className="text-3xl font-bold">{selectedStory.name}</DialogTitle>
                  <p className="text-xl text-primary mt-2 font-semibold">
                    &ldquo;{selectedStory.quote}&rdquo;
                  </p>
                </div>
              </DialogHeader>
              <DialogDescription className="px-6 pb-6 mt-4 text-base text-gray-700 leading-relaxed">
                {selectedStory.fullStory}
              </DialogDescription>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
