import type { CollectionConfig } from 'payload'

export const PartnershipApplications: CollectionConfig = {
  slug: 'partnership-applications',
  admin: {
    useAsTitle: 'organizationName',
  },
  access: {
    create: () => true,
    read: () => true,
  },
  hooks: {
    afterChange: [
      async ({ doc, operation }) => {
        if (operation === 'create') {
          console.log('Attempting to send partnership application email for:', doc.email);
          try {
            const { Resend } = await import('resend')
            const { PartnershipApplicationEmail } = await import('../components/emails/EmailTemplates')
            
            if (!process.env.RESEND_API_KEY) {
              console.error('RESEND_API_KEY is missing in environment variables');
              return;
            }

            const resend = new Resend(process.env.RESEND_API_KEY)
            
            const data = await resend.emails.send({
              from: process.env.EMAIL_FROM || 'LIFE-MAC Africa Website <website@lifemac-africa.org>',
              to: [process.env.EMAIL_TO || 'info@lifemac.org'],
              subject: 'New Partnership Application',
              react: PartnershipApplicationEmail({
                data: {
                  organizationName: doc.organizationName,
                  contactPerson: doc.contactName,
                  email: doc.email,
                  phone: doc.phone,
                  partnershipType: doc.partnershipType,
                  message: doc.message,
                  subscribeToNewsletter: doc.newsletter,
                },
              }),
            })
            console.log('Partnership application email sent successfully:', data);
          } catch (err) {
            console.error('Error sending partnership application email:', err)
          }
        }
      },
    ],
  },
  fields: [
    {
      name: 'organizationName',
      type: 'text',
      required: true,
    },
    {
      name: 'contactName',
      type: 'text',
      required: true,
    },
    {
      name: 'position',
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
      name: 'website',
      type: 'text',
    },
    {
      name: 'partnershipType',
      type: 'select',
      options: [
        { label: 'Program Partner', value: 'program' },
        { label: 'Funding Partner', value: 'funding' },
        { label: 'Resource Partner', value: 'resource' },
        { label: 'Strategic Partner', value: 'strategic' },
        { label: 'Other', value: 'other' },
      ],
      required: true,
    },
    {
      name: 'message',
      type: 'textarea',
      required: true,
    },
    {
      name: 'hearAbout',
      type: 'select',
      options: [
        { label: 'Website', value: 'website' },
        { label: 'Social Media', value: 'social' },
        { label: 'Event', value: 'event' },
        { label: 'Referral', value: 'referral' },
        { label: 'Other', value: 'other' },
      ],
    },
    {
      name: 'newsletter',
      type: 'checkbox',
      defaultValue: false,
    },
  ],
}
