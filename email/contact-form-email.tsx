import React from 'react';
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  name: string;
  message: string;
  email: string;
};

export const ContactFormEmail = ({
  name,
  message,
  email,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview className='font-primary font-medium'>
        New message from {name} on your portfolio site!
      </Preview>
      <Tailwind>
        <Body className='bg-[#0a192f] border-md'>
          <Container>
            <Section className='p-8'>
              <Heading className='text-2xl font-semibold tracking-wide font-primary text-gray-300 '>
                New Message From: {name}, on your portfolio site!
              </Heading>
              <Text className='mt-4 text-xl text-[#A9A9A9] leading-loose font-secondary font-medium'>
                {message}
              </Text>
              <Hr />
              <Text className='mt-4 text-gray-400 font-medium font-tertiary text-base'>
                Sender's email: {email}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
