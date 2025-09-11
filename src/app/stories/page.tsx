import AlumniStoryCard from '@/components/AlumniStoryCard';
import { placeholderImages } from '@/lib/placeholder-images';

export default function StoriesPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-space-grotesk">
              Stories of Transformation
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              From hardship to hope, witness the incredible journeys of KEF
              scholars.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10 mt-12">
            <AlumniStoryCard
              image={placeholderImages.alumni1}
              name="James O."
              quote="KEF gave me more than an education; it gave me a future."
              story="From walking 10km to school daily to becoming a software engineer in Nairobi."
            />
            <AlumniStoryCard
              image={placeholderImages.alumni2}
              name="Mary A."
              quote="My dream of becoming a teacher is now a reality."
              story="Once at risk of dropping out, now a primary school teacher inspiring the next generation."
            />
            <AlumniStoryCard
              image={placeholderImages.alumni3}
              name="Samuel K."
              quote="I am the first in my family to attend university."
              story="A boy from a small village who is now studying to become a doctor."
            />
            <AlumniStoryCard
              image={placeholderImages.alumni4}
              name="Grace N."
              quote="KEF's support network was my foundation."
              story="From a crowded slum to a thriving entrepreneur, her business now employs three people."
            />
            <AlumniStoryCard
              image={placeholderImages.alumni5}
              name="David M."
              quote="I want to solve problems for my community."
              story="He used to study by a kerosene lamp. Now he's an award-winning engineering student."
            />
            <AlumniStoryCard
              image={placeholderImages.alumni6}
              name="Esther W."
              quote="I am proof that a girl with a dream can change the world."
              story="She fought cultural barriers to stay in school and is now a lawyer advocating for women's rights."
            />
          </div>
        </div>
      </section>
    </main>
  );
}
