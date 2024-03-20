import { z } from 'zod';

export const FormDataSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters.' })
    .max(30),
  email: z
    .string()
    .min(4, { message: 'Email must be at least 4 characters.' })
    .email(),
  message: z
    .string()
    .min(18, { message: 'Messagge must be at least 18 characters.' })
    .max(5000),
});

export const ContactFormSchema = z.object({
  name: z
    .string()
    .min(4, { message: 'Name must be at least 4 characters.' })
    .max(30),
  email: z
    .string()
    .min(4, { message: 'Email must be at least 4 characters.' })
    .email(),
  message: z
    .string()
    .min(18, { message: 'Messagge must be at least 18 characters.' })
    .max(5000),
});
