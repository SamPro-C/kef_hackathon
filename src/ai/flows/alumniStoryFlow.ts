
'use server';

/**
 * @fileOverview An AI flow to generate inspiring stories of future KEF alumni.
 *
 * - generateAlumniStory - A function that generates a fictional success story.
 * - AlumniStoryInput - The input type for the story generation.
 * - AlumniStoryOutput - The return type for the story generation.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const AlumniStoryInputSchema = z.object({
  county: z.string().describe('The home county of the fictional student.'),
  careerField: z.string().describe('The desired future career field for the student.'),
});
export type AlumniStoryInput = z.infer<typeof AlumniStoryInputSchema>;

const AlumniStoryOutputSchema = z.object({
  story: z
    .string()
    .describe(
      'A short, inspiring story about a fictional KEF student. The story should be 3-4 paragraphs long and follow a clear arc: the student\'s challenging background, the intervention by KEF, and their eventual success and desire to give back. It should be written in an emotional, hopeful, and powerful tone.'
    ),
});
export type AlumniStoryOutput = z.infer<typeof AlumniStoryOutputSchema>;


export async function generateAlumniStory(input: AlumniStoryInput): Promise<AlumniStoryOutput> {
  return alumniStoryFlow(input);
}

const prompt = ai.definePrompt({
  name: 'alumniStoryPrompt',
  input: { schema: AlumniStoryInputSchema },
  output: { schema: AlumniStoryOutputSchema },
  prompt: `
    You are a master storyteller for the Kenya Education Fund (KEF), a nonprofit that provides scholarships to bright, needy students in Kenya.
    Your task is to write a short, powerful, and emotional success story about a *future* KEF alumnus. The story should be fictional but realistic and inspiring.

    **Instructions:**
    1.  **Character:** Create a fictional character from the provided county: {{{county}}}. Give them a name that is common in that region of Kenya.
    2.  **Conflict:** Describe the character's challenging background. They are brilliant but poor, and on the verge of dropping out of school. Mention a specific hardship related to their environment in {{{county}}}.
    3.  **KEF's Intervention:** Explain how a KEF scholarship changed everything. Mention not just school fees, but also mentorship or other support KEF provides.
    4.  **Climax & Success:** Describe their success in high school and how they are now on a path to pursue a career in {{{careerField}}}.
    5.  **Resolution & Giving Back:** Conclude with their dream to use their skills in {{{careerField}}} to give back to their community in {{{county}}} or Kenya as a whole.
    6.  **Tone:** The tone should be hopeful, inspiring, and deeply emotional. It should move the reader and make them believe in the power of education.
    7.  **Format:** The story should be 3-4 paragraphs long. Do not use headings or markdown. Just write the story.

    **Example structure:**
    Paragraph 1: Introduce the character and their struggle in {{{county}}}.
    Paragraph 2: KEF's intervention and the hope it provides.
    Paragraph 3: Their academic success and passion for {{{careerField}}}.
    Paragraph 4: Their ultimate dream of giving back to their community.

    Generate the story now.
  `,
});


const alumniStoryFlow = ai.defineFlow(
  {
    name: 'alumniStoryFlow',
    inputSchema: AlumniStoryInputSchema,
    outputSchema: AlumniStoryOutputSchema,
  },
  async (input) => {
    const { output } = await prompt(input);
    return output!;
  }
);
