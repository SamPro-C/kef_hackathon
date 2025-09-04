'use server';
/**
 * @fileOverview A flow for generating a fictional letter from a KEF student.
 */

import {ai} from '@/ai/genkit';
import { LetterRequest, LetterRequestSchema, LetterResponse, LetterResponseSchema } from '@/lib/types';


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
