'use server';
/**
 * @fileoverview This file initializes the Genkit AI framework and plugins.
 *
 * It configures Genkit to use the Google AI plugin, which is necessary for
 * interacting with Google's generative AI models (e.g., Gemini).
 * The `ai` object exported from this file is a singleton that should be
 * used across the application to access Genkit functionality.
 */

import { genkit } from 'genkit';
import { googleAI } from '@genkit-ai/googleai';

export const ai = genkit({
  plugins: [
    googleAI({
      // Specify the model directly if needed, or rely on prompt/generate calls.
      // apiVersion: 'v1beta', // Optional: specify API version
    }),
  ],
  // Log level for debugging.
  logLevel: 'debug',
  // Enable OpenTelemetry for tracing.
  enableTracingAndMetrics: true,
});
