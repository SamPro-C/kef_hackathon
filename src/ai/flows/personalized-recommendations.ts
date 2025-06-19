// src/ai/flows/personalized-recommendations.ts
'use server';

/**
 * @fileOverview AI-powered personalized college and course recommendations for students.
 *
 * - personalizedRecommendations - A function that provides personalized college and course recommendations.
 * - PersonalizedRecommendationsInput - The input type for the personalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the personalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  profile: z
    .string()
    .describe('A detailed profile of the student, including academic history, interests, and career aspirations.'),
  interests: z.string().describe('The students interests'),
});

export type PersonalizedRecommendationsInput = z.infer<typeof PersonalizedRecommendationsInputSchema>;

const PersonalizedRecommendationsOutputSchema = z.object({
  colleges: z.array(
    z.object({
      name: z.string().describe('The name of the college.'),
      description: z.string().describe('A brief description of the college.'),
      reasons: z.string().describe('Reasons why this college is a good fit for the student.'),
    })
  ),
  courses: z.array(
    z.object({
      name: z.string().describe('The name of the course.'),
      college: z.string().describe('The college offering the course.'),
      description: z.string().describe('A brief description of the course.'),
      reasons: z.string().describe('Reasons why this course is a good fit for the student.'),
    })
  ),
  financialAid: z.array(
    z.object({
      name: z.string().describe('The name of the financial aid.'),
      description: z.string().describe('A brief description of the financial aid.'),
      reasons: z.string().describe('Reasons why this financial aid is a good fit for the student.'),
    })
  ),
});

export type PersonalizedRecommendationsOutput = z.infer<typeof PersonalizedRecommendationsOutputSchema>;

export async function personalizedRecommendations(input: PersonalizedRecommendationsInput): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `You are an AI assistant designed to provide personalized college and course recommendations to students in Kenya.

  Based on the student's profile and interests, recommend a list of colleges and courses that would be a good fit for them.

  Also search for relevant Financial Aid opportunities for the student.

  Student Profile: {{{profile}}}

  Student Interests: {{{interests}}}

  Format your response as a JSON object with the following structure:
  {
    "colleges": [
      {
        "name": "",
        "description": "",
        "reasons": ""
      }
    ],
    "courses": [
      {
        "name": "",
        "college": "",
        "description": "",
        "reasons": ""
      }
    ],
   "financialAid": [
      {
        "name": "",
        "description": "",
        "reasons": ""
      }
    ]
  }
  `,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

