import { z } from "zod";

// This is a configuretion for env file

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
});

export const env = envSchema.parse(import.meta.env);
