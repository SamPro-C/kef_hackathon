'use server';
/**
 * @fileOverview A flow for generating a fictional letter from a KEF student.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

export const LetterRequestSchema = z.object({
  name: z.string().describe('The first name of the fictional student.'),
  county: z.string().describe("The student's home county in Kenya."),
  career: z.string().describe('The career the student aspires to.'),
});
export type LetterRequest = z.infer<typeof LetterRequestSchema>;

export const LetterResponseSchema = z.object({
    letter: z.string().describe("The generated letter from the student's perspective. It should be 3-4 paragraphs long, written in a hopeful and personal tone. It should mention the student's name, their background in the specified county, their dream of pursuing the specified career, and how a KEF scholarship is their only hope to achieve this dream."),
});
export type LetterResponse = z-infer<typeof LetterResponseSchema>;


export async function generateLetter(input: LetterRequest): Promise<LetterResponse> {
  return generateLetterFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateLetterPrompt',
  input: {schema: LetterRequestSchema},
  output: {schema: LetterResponseSchema},
  prompt: `You are a creative writer for the Kenya Education Fund (KEF). Your task is to write a short, fictional, and emotionally compelling "letter of hope" from the perspective of a bright but needy Kenyan student.

  **Student Profile:**
  - Name: {{{name}}}
  - Home County: {{{county}}}
  - Aspired Career: {{{career}}}

  **Instructions:**
  - Write a 3-4 paragraph letter in the first person, from {{{name}}}'s point of view.
  - The tone should be hopeful, resilient, and deeply personal.
  - Briefly mention a challenge related to living in {{{county}}} (e.g., drought, lack of resources, long distances to school).
  - Clearly state their dream of becoming a {{{career}}} and why it's important to them and their community.
  - Emphasize that a KEF scholarship is their only realistic path to achieving this dream.
  - The letter should inspire a potential donor to sponsor them.
  - Do not use markdown. The output should be a single block of text.
  
  Generate the letter now.`,
});

const generateLetterFlow = ai.defineFlow(
  {
    name: 'generateLetterFlow',
    inputSchema: LetterRequestSchema,
    outputSchema: LetterResponseSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
