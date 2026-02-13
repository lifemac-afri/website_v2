import type { CollectionConfig } from 'payload'

export const Newsletter: CollectionConfig = {
  slug: 'newsletter',
  admin: {
    useAsTitle: 'email',
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          console.log('Attempting to send newsletter subscription email for:', doc.email);
          try {
            const { Resend } = await import('resend')
            const { NewsletterSubscriptionEmail } = await import('../components/emails/EmailTemplates')
            
            if (!process.env.RESEND_API_KEY) {
              console.error('RESEND_API_KEY is missing in environment variables');
              return;
            }

            const resend = new Resend(process.env.RESEND_API_KEY)
            
            const data = await resend.emails.send({
              from: process.env.EMAIL_FROM || 'LIFE-MAC Africa Website <website@lifemac-africa.org>',
              to: [process.env.EMAIL_TO || 'info@lifemac.org'],
              subject: 'New Newsletter Subscription',
              react: NewsletterSubscriptionEmail({
                data: {
                  name: doc.name,
                  email: doc.email,
                },
              }),
            })
            console.log('Newsletter subscription email sent successfully:', data);
          } catch (err) {
            console.error('Error sending newsletter subscription email:', err)
          }
        }
      },
    ],
  },
  access: {
    read: () => true,
    create: () => true, // Allow public creation
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      defaultValue: '',
    },
    {
      name: 'email',
      type: 'email',
      required: true,
      unique: true,
    },
  ],
}
