
'use server';

import { personalizedRecommendations, type PersonalizedRecommendationsInput, type PersonalizedRecommendationsOutput } from '@/ai/flows/personalized-recommendations';
import { z } from 'zod';

const recommendationSchema = z.object({
  profile: z.string().min(50, 'Profile must be at least 50 characters long.'),
  interests: z.string().min(3, 'Interests must be at least 3 characters long.'),
});

export type RecommendationFormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
  data?: PersonalizedRecommendationsOutput;
};

export async function getPersonalizedRecommendationsAction(
  prevState: RecommendationFormState,
  formData: FormData
): Promise<RecommendationFormState> {
  const validatedFields = recommendationSchema.safeParse({
    profile: formData.get('profile'),
    interests: formData.get('interests'),
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: 'Validation failed. Please check your inputs.',
      issues,
      fields: {
        profile: formData.get('profile')?.toString() || '',
        interests: formData.get('interests')?.toString() || '',
      }
    };
  }

  try {
    const inputData: PersonalizedRecommendationsInput = validatedFields.data;
    const result = await personalizedRecommendations(inputData);
    
    if (!result || (!result.colleges?.length && !result.courses?.length && !result.financialAid?.length)) {
      return { message: 'No recommendations found based on your input. Try refining your profile and interests.', data: {colleges: [], courses: [], financialAid: []} };
    }
    
    return { message: 'Recommendations generated successfully!', data: result };
  } catch (error) {
    console.error('Error getting personalized recommendations:', error);
    return { 
      message: 'An error occurred while generating recommendations. Please try again later.',
      fields: validatedFields.data
    };
  }
}
