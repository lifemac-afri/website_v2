import * as React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
  Tailwind,
  Hr,
  Img,
  Link,
  Column,
  Row,
} from '@react-email/components';

const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://lifemac-africa.org';

interface EmailProps {
  data: any;
}

const socialLinks = [
  { name: 'Facebook', url: 'https://www.facebook.com/lifemacafrica', icon: 'https://react.email/static/facebook.png' }, // Using placeholder icons for now or standard ones
  { name: 'Twitter', url: 'https://www.x.com/lifemacafrica', icon: 'https://react.email/static/twitter.png' },
  { name: 'Instagram', url: 'https://www.instagram.com/lifemacafrica', icon: 'https://react.email/static/instagram.png' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/company/lifemacafrica', icon: 'https://react.email/static/linkedin.png' },
];

const BaseEmailLayout = ({ children, previewText, title }: { children: React.ReactNode; previewText: string; title: string }) => (
  <Html>
    <Tailwind
      config={{
        theme: {
          extend: {
            colors: {
              primary: '#0B1C3E',
              teal: '#009688',
              yellow: '#EAB308',
            },
          },
        },
      }}
    >
      <Head />
      <Preview>{previewText}</Preview>
      <Body className="bg-[#f6f9fc] my-auto mx-auto font-sans">
        <Container className="mx-auto p-[20px] max-w-[580px]">
          {/* Logo Header */}
          <Section className="mt-[32px] mb-[32px]">
            <Img
              src={`${baseUrl}/images/logos/main.png`}
              width="180"
              height="60"
              alt="LIFE-MAC Africa"
              className="my-0 mx-auto object-contain"
            />
          </Section>

          {/* Main Content Card */}
          <Section className="bg-white rounded-[12px] shadow-sm p-[40px]">
            <Heading className="text-primary text-[24px] font-bold text-center p-0 my-[20px] mx-0">
              {title}
            </Heading>
            
            {children}

            <Hr className="border-gray-100 my-[32px] mx-0 w-full" />
            
            <Text className="text-gray-500 text-[14px] leading-[24px] text-center">
              This is an automated notification from the LIFE-MAC Africa website.
            </Text>
          </Section>

          {/* Footer */}
          <Section className="mt-[32px] text-center">
            <Row className="mb-[20px]">
              <Column align="center">
                <div className="flex justify-center gap-4">
                  <Link href="https://www.facebook.com/lifemacafrica" className="text-gray-400 hover:text-primary mx-2">Facebook</Link>
                  <Link href="https://www.x.com/lifemacafrica" className="text-gray-400 hover:text-primary mx-2">Twitter</Link>
                  <Link href="https://www.instagram.com/lifemacafrica" className="text-gray-400 hover:text-primary mx-2">Instagram</Link>
                  <Link href="https://www.linkedin.com/company/lifemacafrica" className="text-gray-400 hover:text-primary mx-2">LinkedIn</Link>
                </div>
              </Column>
            </Row>
            <Text className="text-gray-400 text-[12px] leading-[20px]">
              LIFE-MAC Africa<br />
              Ho, Volta Region, Ghana<br />
              <Link href="mailto:info@lifemac.org" className="text-teal underline">info@lifemac.org</Link>
            </Text>
            <Text className="text-gray-400 text-[12px] leading-[20px] mt-[10px]">
              © {new Date().getFullYear()} LIFE-MAC Africa. All rights reserved.
            </Text>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

const DataRow = ({ label, value }: { label: string; value: any }) => (
  <div className="mb-[16px] border-b border-gray-50 pb-[8px]">
    <Text className="text-gray-500 text-[12px] uppercase tracking-wider font-semibold mb-[4px] mt-0">
      {label}
    </Text>
    <Text className="text-primary text-[16px] leading-[24px] mt-0 font-medium">
      {value ? String(value) : 'N/A'}
    </Text>
  </div>
);

export const VolunteerApplicationEmail = ({ data }: EmailProps) => (
  <BaseEmailLayout previewText="New Volunteer Application" title="New Volunteer Application">
    <Section>
      <DataRow label="Name" value={data.fullName} />
      <DataRow label="Email" value={data.email} />
      <DataRow label="Phone" value={data.phone} />
      <DataRow label="Location" value={data.location} />
      <DataRow label="Availability" value={data.availability} />
      <DataRow label="Interests" value={Array.isArray(data.interests) ? data.interests.join(', ') : data.interests} />
      <DataRow label="Experience" value={data.experience} />
      <DataRow label="Motivation" value={data.motivation} />
      <DataRow label="Subscribe to Newsletter" value={data.subscribeToNewsletter ? 'Yes' : 'No'} />
    </Section>
  </BaseEmailLayout>
);

export const PartnershipApplicationEmail = ({ data }: EmailProps) => (
  <BaseEmailLayout previewText="New Partnership Application" title="New Partnership Application">
    <Section>
      <DataRow label="Organization Name" value={data.organizationName} />
      <DataRow label="Contact Person" value={data.contactPerson} />
      <DataRow label="Email" value={data.email} />
      <DataRow label="Phone" value={data.phone} />
      <DataRow label="Partnership Type" value={data.partnershipType} />
      <DataRow label="Message" value={data.message} />
      <DataRow label="Subscribe to Newsletter" value={data.subscribeToNewsletter ? 'Yes' : 'No'} />
    </Section>
  </BaseEmailLayout>
);

export const StorySubmissionEmail = ({ data }: EmailProps) => (
  <BaseEmailLayout previewText="New Story Submission" title="New Story Submission">
    <Section>
      <DataRow label="Name" value={data.name} />
      <DataRow label="Email" value={data.email} />
      <DataRow label="Phone" value={data.phone} />
      <DataRow label="Story Title" value={data.storyTitle} />
      <DataRow label="Story Content" value={data.storyContent} />
      <DataRow label="Consent Given" value={data.consent ? 'Yes' : 'No'} />
    </Section>
  </BaseEmailLayout>
);

export const NewsletterSubscriptionEmail = ({ data }: EmailProps) => (
  <BaseEmailLayout previewText="New Newsletter Subscription" title="New Newsletter Subscription">
    <Section>
      <DataRow label="Name" value={data.name} />
      <DataRow label="Email" value={data.email} />
    </Section>
  </BaseEmailLayout>
);

export const ContactFormEmail = ({ data }: EmailProps) => (
  <BaseEmailLayout previewText="New Contact Form Submission" title="New Contact Form Submission">
    <Section>
      <DataRow label="First Name" value={data.firstName} />
      <DataRow label="Last Name" value={data.lastName} />
      <DataRow label="Email" value={data.email} />
      <DataRow label="Phone" value={data.phone} />
      <DataRow label="Message" value={data.message} />
      <DataRow label="Subscribe to Newsletter" value={data.subscribeToNewsletter ? 'Yes' : 'No'} />
    </Section>
  </BaseEmailLayout>
);
