import type { CollectionConfig } from 'payload'

export const ContactSubmissions: CollectionConfig = {
  slug: 'contact-submissions',
  admin: {
    useAsTitle: 'email',
    description: 'Messages submitted via the Contact Us form',
  },
  access: {
    create: () => true, // Allow public submissions
    read: () => true,
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          console.log('Attempting to send contact form email for:', doc.email);
          try {
            const { Resend } = await import('resend')
            const { ContactFormEmail } = await import('../components/emails/EmailTemplates')
            
            if (!process.env.RESEND_API_KEY) {
              console.error('RESEND_API_KEY is missing in environment variables');
              return;
            }

            const resend = new Resend(process.env.RESEND_API_KEY)
            
            const data = await resend.emails.send({
              from: process.env.EMAIL_FROM || 'LIFE-MAC Africa Website <website@lifemac-africa.org>',
              to: [process.env.EMAIL_TO || 'info@lifemac.org'],
              subject: 'New Contact Form Submission',
              react: ContactFormEmail({
                data: {
                  firstName: doc.firstName,
                  lastName: doc.lastName,
                  email: doc.email,
                  phone: doc.phone,
                  message: doc.message,
                  subscribeToNewsletter: doc.newsletter,
                },
              }),
            })
            console.log('Contact form email sent successfully:', data);
          } catch (err) {
            console.error('Error sending contact form email:', err)
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
      label: 'First Name',
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      label: 'Last Name',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      label: 'Email Address',
    },
    {
      name: 'phone',
      type: 'text',
      label: 'Phone Number',
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
      label: 'Message',
    },
    {
      name: 'newsletter',
      type: 'checkbox',
      label: 'Subscribe to Newsletter',
      defaultValue: false,
    },
  ],
}
