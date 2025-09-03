import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, Map } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function MapPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <header className="sticky top-0 z-50 flex items-center justify-between px-4 py-3 border-b bg-background/80 backdrop-blur-sm">
        <Button asChild variant="outline" size="icon">
          <Link href="/">
            <ArrowLeft className="w-4 h-4" />
            <span className="sr-only">Back to Home</span>
          </Link>
        </Button>
        <div className="flex items-center gap-2">
            <Map className="w-6 h-6 text-primary" />
            <h1 className="text-xl font-bold font-headline">Interactive Success Map</h1>
        </div>
        <div className="w-8"></div>
      </header>

      <main className="flex-1">
        <div className="container py-8 mx-auto md:py-12">
            <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight font-headline text-primary sm:text-4xl">
                    Visualizing KEF&apos;s Nationwide Impact
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-lg text-muted-foreground">
                    From the smallest villages to the biggest cities, KEF scholars are making a difference. Explore our interactive map to see the journeys of students and the incredible reach of our alumni network.
                </p>
            </div>

            <Card className="mt-8 overflow-hidden shadow-lg">
                <CardContent className="p-0">
                    <div className="relative w-full h-[60vh] bg-muted">
                        {/* Placeholder for the interactive map component */}
                         <Image
                            src="https://picsum.photos/1200/800"
                            alt="Map of Kenya"
                            layout="fill"
                            objectFit="cover"
                            className="opacity-30"
                            data-ai-hint="map kenya"
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="p-8 text-center bg-background/80 rounded-lg">
                                <Map size={48} className="mx-auto text-primary" />
                                <h3 className="mt-4 text-2xl font-bold">Interactive Map Coming Soon</h3>
                                <p className="mt-2 text-muted-foreground">This is where the magic will happen!</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
      </main>

       <footer className="py-6 text-center border-t bg-card text-muted-foreground">
        <div className="container px-4 mx-auto md:px-6">
            <p>&copy; 2024 KEF Journey 98. A hackathon project.</p>
        </div>
      </footer>
    </div>
  );
}
