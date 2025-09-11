import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { PlaceholderImage } from '@/lib/placeholder-images';

interface AlumniStoryCardProps {
  image: PlaceholderImage;
  name: string;
  quote: string;
  story: string;
}

export default function AlumniStoryCard({
  image,
  name,
  quote,
  story,
}: AlumniStoryCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 ease-in-out border-border/20 hover:shadow-lg hover:shadow-accent/20 hover:-translate-y-2">
      <CardHeader className="p-0">
        <Image
          src={image.src}
          alt={`Photo of ${name}`}
          width={image.width}
          height={image.height}
          className="object-cover w-full h-48"
          data-ai-hint={image.hint}
        />
      </CardHeader>
      <CardContent className="p-6">
        <p className="text-lg font-semibold font-space-grotesk">{name}</p>
        <blockquote className="mt-2 text-sm italic text-muted-foreground">
          &ldquo;{quote}&rdquo;
        </blockquote>
        <p className="mt-4 text-sm">{story}</p>
      </CardContent>
    </Card>
  );
}
