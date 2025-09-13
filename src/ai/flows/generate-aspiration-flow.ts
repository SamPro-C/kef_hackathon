
'use server';
/**
 * @fileOverview An AI flow for generating a student's career aspiration and an inspirational quote.
 *
 * - generateAspiration - A function that generates a career and quote.
 * - GenerateAspirationInput - The input type for the generateAspiration function.
 * - GenerateAspirationOutput - The return type for the generateAspiration function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const GenerateAspirationInputSchema = z.object({
  studentName: z.string().describe('The name of the student.'),
  studentGender: z.enum(['male', 'female']).describe('The gender of the student.'),
});
export type GenerateAspirationInput = z.infer<typeof GenerateAspirationInputSchema>;

const GenerateAspirationOutputSchema = z.object({
  career: z.string().describe("The student's future career aspiration. Should be realistic for a Kenyan context, e.g., 'Software Engineer', 'Doctor', 'Community Organizer', 'Agribusiness Entrepreneur'."),
  quote: z.string().describe("A short, inspiring quote from the student about what this scholarship means to them. It should feel personal and authentic."),
});
export type GenerateAspirationOutput = z.infer<typeof GenerateAspirationOutputSchema>;

export async function generateAspiration(input: GenerateAspirationInput): Promise<GenerateAspirationOutput> {
  return generateAspirationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateAspirationPrompt',
  input: { schema: GenerateAspirationInputSchema },
  output: { schema: GenerateAspirationOutputSchema },
  prompt: `You are a creative assistant helping to imagine the future of a student in Kenya who has just received a life-changing scholarship.
  The student's name is {{studentName}}. Their gender is {{studentGender}}.

  Based on this, generate:
  1. A realistic and inspiring career aspiration for them.
  2. A short, heartfelt quote from their perspective, expressing gratitude and hope for the future.

  Make the career something that can create a positive impact in their community. Avoid generic choices.
  Make the quote sound authentic, like it's coming from a grateful teenager.

  Example for a female student:
  Career: "Public Health Nurse"
  Quote: "Now, I can focus on my books and one day bring healthcare to my village. Thank you for making this real."
  
  Example for a male student:
  Career: "Civil Engineer"
  Quote: "This is more than just school fees; it's a foundation to build a better future for my family."
  `,
});

const generateAspirationFlow = ai.defineFlow(
  {
    name: 'generateAspirationFlow',
    inputSchema: GenerateAspirationInputSchema,
    outputSchema: GenerateAspirationOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    if (!output) {
        throw new Error("The AI model did not return an aspiration.");
    }
    return output;
  }
);
