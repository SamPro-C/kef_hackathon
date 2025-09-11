import ImpactSimulator from '@/components/ImpactSimulator';

export default function ImpactPage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none font-space-grotesk">
              Calculate Your Impact
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              See how your contribution can change a student's life. Every
              dollar makes a difference.
            </p>
          </div>
          <div className="mx-auto max-w-3xl mt-12">
            <ImpactSimulator />
          </div>
        </div>
      </section>
    </main>
  );
}
