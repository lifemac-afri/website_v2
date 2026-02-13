import type { CollectionConfig } from 'payload'

export const VolunteerApplications: CollectionConfig = {
  slug: 'volunteer-applications',
  admin: {
    useAsTitle: 'email',
  },
  access: {
    create: () => true,
    read: () => true, 
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          console.log('Attempting to send volunteer application email for:', doc.email);
          try {
            const { Resend } = await import('resend')
            const { VolunteerApplicationEmail } = await import('../components/emails/EmailTemplates')
            
            if (!process.env.RESEND_API_KEY) {
              console.error('RESEND_API_KEY is missing in environment variables');
              return;
            }

            const resend = new Resend(process.env.RESEND_API_KEY)
            
            const data = await resend.emails.send({
              from: process.env.EMAIL_FROM || 'LIFE-MAC Africa Website <website@lifemac-africa.org>',
              to: [process.env.EMAIL_TO || 'info@lifemac.org'],
              subject: 'New Volunteer Application',
              react: VolunteerApplicationEmail({
                data: {
                  fullName: `${doc.firstName} ${doc.lastName}`,
                  email: doc.email,
                  phone: doc.phone,
                  location: doc.address,
                  availability: 'N/A', // Field not in schema, using placeholder
                  interests: doc.skills, // Mapping skills to interests for now
                  experience: doc.skills,
                  motivation: 'N/A', // Field not in schema
                  subscribeToNewsletter: doc.newsletter,
                },
              }),
            })
            console.log('Volunteer application email sent successfully:', data);
          } catch (err) {
            console.error('Error sending volunteer application email:', err)
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      required: true,
    },
    {
      name: 'phone',
      type: 'text',
      required: true,
    },
    {
      name: 'address',
      type: 'text',
    },
    {
      name: 'skills',
      type: 'textarea',
    },
    {
      name: 'newsletter',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
