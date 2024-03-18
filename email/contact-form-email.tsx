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
  message: string;
  senderEmail: string;
};

export const ContactFormEmail = ({
  message,
  senderEmail,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your portfolio site</Preview>
      <Tailwind>
        <Body className='bg-gray-900 text-[#0b1215] rounded-[4px]'>
          <Container>
            <Section className='bg-gray-300 borderBlack my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight font-primary'>
                You received the following message from the contact form
              </Heading>
              <Text className='text-xl font-medium font-secondary'>
                {message}
              </Text>
              <Hr />
              <Text className='text-medium font-tertiary'>
                The sender's email is: {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
