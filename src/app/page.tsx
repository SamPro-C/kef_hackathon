import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { MountainIcon, ZapIcon, GaugeIcon, BotIcon, TwitterIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-primary">
                    The Ultimate Platform for Modern Web Apps
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Our platform provides all the tools you need to build, deploy, and manage modern web
                    applications with ease. From serverless functions to AI-powered features, we've got you covered.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#">Get Started</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <Link href="#">Learn More</Link>
                  </Button>
                </div>
              </div>
              <Image
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="https://picsum.photos/550/550"
                width="550"
                data-ai-hint="abstract technology"
              />
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-card">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Key Features</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-primary">
                  Everything You Need to Succeed
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our platform is packed with features designed to help you build and scale your web applications faster
                  than ever before.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <ZapIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Blazing Fast</h3>
                </div>
                <p className="text-muted-foreground">
                  Our infrastructure is optimized for performance, ensuring your applications are always fast and
                  responsive.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <GaugeIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Scalable</h3>
                </div>
                <p className="text-muted-foreground">
                  Our serverless architecture automatically scales to handle any amount of traffic, so you can focus
                  on your code.
                </p>
              </div>
              <div className="grid gap-1">
                <div className="flex items-center gap-2">
                  <BotIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">AI-Powered</h3>
                </div>
                <p className="text-muted-foreground">
                  Leverage the power of AI with our built-in machine learning models and APIs.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-headline text-primary">
                What Our Customers Are Saying
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We're trusted by the best teams in the world. See what they have to say about our platform.
              </p>
            </div>
            <div className="grid w-full grid-cols-1 lg:grid-cols-3 gap-6">
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <Avatar>
                                <AvatarImage src="https://picsum.photos/50/50?grayscale" />
                                <AvatarFallback>JD</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    “This is the best platform I've ever used. It's fast, reliable, and has all the features I need to build amazing web applications.”
                                </p>
                                <p className="mt-2 text-sm font-semibold">Jane Doe</p>
                                <p className="text-xs text-muted-foreground">CEO, Acme Inc.</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <Avatar>
                                <AvatarImage src="https://picsum.photos/50/50?grayscale" />
                                <AvatarFallback>JS</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    “I love how easy it is to deploy and manage my applications. I can focus on writing code and the platform handles the rest.”
                                </p>
                                <p className="mt-2 text-sm font-semibold">John Smith</p>
                                <p className="text-xs text-muted-foreground">Lead Developer, Tech Corp</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                            <Avatar>
                                <AvatarImage src="https://picsum.photos/50/50?grayscale" />
                                <AvatarFallback>SA</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm text-muted-foreground">
                                    “The AI features are a game-changer. I was able to add powerful new capabilities to my app with just a few lines of code.”
                                </p>
                                <p className="mt-2 text-sm font-semibold">Sarah Adams</p>
                                <p className="text-xs text-muted-foreground">CTO, Innovate LLC</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; 2024 WebApp Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
          <div className="flex gap-2">
            <Link href="#"><TwitterIcon className="h-5 w-5" /></Link>
            <Link href="#"><GithubIcon className="h-5 w-5" /></Link>
            <Link href="#"><LinkedinIcon className="h-5 w-5" /></Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}

    