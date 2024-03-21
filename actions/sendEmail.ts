'use server';
import { z } from 'zod';
import React from 'react';
import { Resend } from 'resend';
import { ContactFormEmail } from '@/email/contact-form-email';
import { ContactFormSchema, FormDataSchema } from '@/lib/schema';

const resend = new Resend(process.env.RESEND_API_KEY);
type Inputs = z.infer<typeof FormDataSchema>;

export async function addEntry(data: Inputs) {
  const result = FormDataSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}

type ContactFormInputs = z.infer<typeof ContactFormSchema>;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.success) {
    const { name, email, message } = result.data;
    try {
      const data = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>',
        to: 'kevin.villegas1973@gmail.com',
        subject: 'Message from contact form',
        reply_to: email,
        react: React.createElement(ContactFormEmail, {
          name: name,
          message: message,
          email: email,
        }),
      });
      return { success: true, data };
    } catch (error) {
      return { success: false, error };
    }
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
}
