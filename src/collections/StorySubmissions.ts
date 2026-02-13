import type { CollectionConfig } from 'payload'

export const StorySubmissions: CollectionConfig = {
  slug: 'story-submissions',
  admin: {
    useAsTitle: 'name',
    description: 'Stories submitted by community members about their experience with LIFE-MAC Africa',
  },
  access: {
    create: () => true, // Allow public submissions
    read: () => true,
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          console.log('Attempting to send story submission email for:', doc.email);
          try {
            const { Resend } = await import('resend')
            const { StorySubmissionEmail } = await import('../components/emails/EmailTemplates')
            
            if (!process.env.RESEND_API_KEY) {
              console.error('RESEND_API_KEY is missing in environment variables');
              return;
            }

            const resend = new Resend(process.env.RESEND_API_KEY)
            
            const data = await resend.emails.send({
              from: process.env.EMAIL_FROM || 'LIFE-MAC Africa Website <website@lifemac-africa.org>',
              to: [process.env.EMAIL_TO || 'info@lifemac.org'],
              subject: 'New Story Submission',
              react: StorySubmissionEmail({
                data: {
                  name: doc.name,
                  email: doc.email,
                  phone: 'N/A', // Field not in schema
                  storyTitle: 'N/A', // Field not in schema, maybe use first few words of story?
                  storyContent: doc.story,
                  consent: doc.contactConsent,
                },
              }),
            })
            console.log('Story submission email sent successfully:', data);
          } catch (err) {
            console.error('Error sending story submission email:', err)
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: 'Full Name',
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email Address',
      admin: {
        description: 'Optional email for follow-up contact',
      },
    },
    {
      name: 'story',
      type: 'textarea',
      required: true,
      label: 'Story',
      admin: {
        description: 'The user\'s story about their experience with LIFE-MAC Africa programs',
      },
    },
    {
      name: 'contactConsent',
      type: 'checkbox',
      label: 'Contact Consent',
      defaultValue: false,
      admin: {
        description: 'User consents to be contacted regarding their story',
      },
    },
    {
      name: 'status',
      type: 'select',
      defaultValue: 'pending',
      options: [
        {
          label: 'Pending Review',
          value: 'pending',
        },
        {
          label: 'Approved',
          value: 'approved',
        },
        {
          label: 'Featured',
          value: 'featured',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
      admin: {
        description: 'Review status of the submitted story',
      },
    },
  ],
}
