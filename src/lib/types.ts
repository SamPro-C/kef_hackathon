import {z} from 'zod';

// This file can be used to define your application's types.
// For example:
//
// export interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// Schema for generating a letter of hope
export const LetterRequestSchema = z.object({
  name: z.string().describe('The first name of the fictional student.'),
  county: z.string().describe("The student's home county in Kenya."),
  career: z.string().describe('The career the student aspires to.'),
});
export type LetterRequest = z.infer<typeof LetterRequestSchema>;

export const LetterResponseSchema = z.object({
  letter: z
    .string()
    .describe(
      "The generated letter from the student's perspective. It should be 3-4 paragraphs long, written in a hopeful and personal tone. It should mention the student's name, their background in the specified county, their dream of pursuing the specified career, and how a KEF scholarship is their only hope to achieve this dream."
    ),
});
export type LetterResponse = z.infer<typeof LetterResponseSchema>;
