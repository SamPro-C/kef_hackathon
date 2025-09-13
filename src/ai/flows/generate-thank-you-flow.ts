'use server';
/**
 * @fileOverview An AI flow for generating personalized thank you messages from students.
 *
 * - generateThankYou - A function that generates a thank you note.
 * - GenerateThankYouInput - The input type for the generateThankYou function.
 * - GenerateThankYouOutput - The return type for the generateThankYou function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateThankYouInputSchema = z.object({
  studentName: z.string().describe('The name of the student writing the thank you note.'),
  donorName: z.string().describe("The name of the donor who is being thanked."),
});
export type GenerateThankYouInput = z.infer<typeof GenerateThankYouInputSchema>;

const GenerateThankYouOutputSchema = z.object({
  message: z.string().describe('The generated thank you message. It should be short, heartfelt, and unique. Do not include the student\'s name in the message.'),
});
export type GenerateThankYouOutput = z.infer<typeof GenerateThankYouOutputSchema>;

export async function generateThankYou(input: GenerateThankYouInput): Promise<GenerateThankYouOutput> {
  return generateThankYouFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateThankYouPrompt',
  input: { schema: GenerateThankYouInputSchema },
  output: { schema: GenerateThankYouOutputSchema },
  prompt: `You are a student in Kenya named {{studentName}} who has just received a donation towards your education.
  Write a short, heartfelt, and unique thank you message to the donor, whose name is {{donorName}}.
  Keep the message to 1-2 sentences. Be creative and avoid generic thank yous.
  Express genuine gratitude. The message should feel like it's coming from a grateful teenager.
  
  Example: "Wow, {{donorName}}! Your help feels like a dream. Thank you for believing in my future!"`,
});

const generateThankYouFlow = ai.defineFlow(
  {
    name: 'generateThankYouFlow',
    inputSchema: GenerateThankYouInputSchema,
    outputSchema: GenerateThankYouOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error("The AI model did not return a message.");
    }
    return output;
  }
);
