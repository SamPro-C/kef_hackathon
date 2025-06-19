
'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useFormState, useFormStatus } from 'react-dom';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { getPersonalizedRecommendationsAction, type RecommendationFormState } from './actions';
import type { CollegeRecommendation, CourseRecommendation, FinancialAidRecommendation } from '@/lib/types';
import { Loader2, Sparkles, AlertTriangle, Building, BookOpen, Handshake } from 'lucide-react';
import { useEffect } from 'react';

const recommendationFormSchema = z.object({
  profile: z.string().min(50, { message: 'Profile description must be at least 50 characters.' }),
  interests: z.string().min(3, { message: 'Please list at least one interest.' }),
});

type RecommendationFormValues = z.infer<typeof recommendationFormSchema>;

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Sparkles className="mr-2 h-4 w-4" />}
      Get Recommendations
    </Button>
  );
}

export default function RecommendationsPage() {
  const { toast } = useToast();

  const form = useForm<RecommendationFormValues>({
    resolver: zodResolver(recommendationFormSchema),
    defaultValues: {
      profile: '',
      interests: '',
    },
  });

  const [state, formAction] = useFormState<RecommendationFormState, FormData>(
    getPersonalizedRecommendationsAction,
    { message: '' }
  );

  useEffect(() => {
    if (state.message && state.message !== 'Recommendations generated successfully!' && state.message !== 'No recommendations found based on your input. Try refining your profile and interests.') {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.message,
      });
      if(state.issues) {
        state.issues.forEach(issue => {
            const fieldName = issue.includes("Profile") ? "profile" : "interests";
            form.setError(fieldName as keyof RecommendationFormValues, { message: issue });
        });
      }
    }
  }, [state, toast, form]);
  

  return (
    <div className="container mx-auto py-8">
      <header className="mb-10 text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight text-primary md:text-5xl">
          Personalized Recommendations
        </h1>
        <p className="mt-3 text-lg text-muted-foreground md:text-xl">
          Let our AI guide you to the best-fit colleges and courses based on your profile.
        </p>
      </header>

      <Card className="mx-auto max-w-2xl shadow-xl">
        <CardHeader>
          <CardTitle className="font-headline text-2xl">Tell Us About Yourself</CardTitle>
          <CardDescription>
            The more details you provide, the better our recommendations will be.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={formAction} className="space-y-6">
              <FormField
                control={form.control}
                name="profile"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Student Profile</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Describe your academic history, strengths, weaknesses, career aspirations, preferred learning style, etc."
                        className="min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Interests</FormLabel>
                    <FormControl>
                      <Input placeholder="E.g., technology, arts, healthcare, environment, sports" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <SubmitButton />
            </form>
          </Form>
        </CardContent>
      </Card>

      {state.message && (state.message === 'Recommendations generated successfully!' || state.message === 'No recommendations found based on your input. Try refining your profile and interests.') && (
        <div className="mt-12">
          <h2 className="font-headline mb-6 text-center text-3xl font-semibold text-primary">
            Your Personalized Recommendations
          </h2>
          
          {(state.data?.colleges?.length === 0 && state.data?.courses?.length === 0 && state.data?.financialAid?.length === 0) && (
            <Card className="mx-auto max-w-2xl text-center shadow-lg">
                <CardHeader>
                    <AlertTriangle className="mx-auto h-12 w-12 text-primary" />
                    <CardTitle className="font-headline text-xl">No Specific Recommendations Found</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        We couldn't find specific recommendations based on the information you provided. Please try refining your profile and interests for more tailored suggestions. You can also explore our general <Link href="/courses" className="text-accent underline">course listings</Link> and <Link href="/financial-aid" className="text-accent underline">financial aid</Link> pages.
                    </p>
                </CardContent>
            </Card>
          )}

          {state.data?.colleges && state.data.colleges.length > 0 && (
            <RecommendationSection 
              title="Recommended Colleges" 
              items={state.data.colleges} 
              icon={Building} 
              renderItem={(item: CollegeRecommendation) => (
                <>
                  <p className="text-sm text-muted-foreground mt-1 mb-2">{item.description}</p>
                  <p className="text-xs"><strong>Reasons:</strong> {item.reasons}</p>
                </>
              )}
            />
          )}

          {state.data?.courses && state.data.courses.length > 0 && (
            <RecommendationSection 
              title="Recommended Courses" 
              items={state.data.courses} 
              icon={BookOpen}
              renderItem={(item: CourseRecommendation) => (
                <>
                  <p className="text-sm text-muted-foreground mt-1">Offered by: <strong>{item.college}</strong></p>
                  <p className="text-sm text-muted-foreground mt-1 mb-2">{item.description}</p>
                  <p className="text-xs"><strong>Reasons:</strong> {item.reasons}</p>
                </>
              )}
            />
          )}

          {state.data?.financialAid && state.data.financialAid.length > 0 && (
            <RecommendationSection 
              title="Financial Aid Opportunities" 
              items={state.data.financialAid} 
              icon={Handshake}
              renderItem={(item: FinancialAidRecommendation) => (
                <>
                  <p className="text-sm text-muted-foreground mt-1 mb-2">{item.description}</p>
                  <p className="text-xs"><strong>Relevance:</strong> {item.reasons}</p>
                </>
              )}
            />
          )}
        </div>
      )}
    </div>
  );
}

interface RecommendationSectionProps<T> {
  title: string;
  items: T[];
  icon: React.ElementType;
  renderItem: (item: T) => React.ReactNode;
}

function RecommendationSection<T extends {name: string}>({ title, items, icon: Icon, renderItem }: RecommendationSectionProps<T>) {
  return (
    <section className="mb-10">
      <h3 className="font-headline mb-4 flex items-center text-2xl font-semibold text-primary">
        <Icon className="mr-3 h-7 w-7" />
        {title}
      </h3>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <Card key={`${item.name}-${index}`} className="shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline text-lg">{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              {renderItem(item)}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

