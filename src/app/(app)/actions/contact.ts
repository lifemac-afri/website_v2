'use server'

import { getPayload } from 'payload'
import config from '@payload-config'

export async function submitContactForm(data: {
  firstName: string
  lastName: string
  email: string
  phone?: string
  message: string
  newsletter: boolean
}) {
  try {
    const payload = await getPayload({ config })

    await payload.create({
      collection: 'contact-submissions',
      data: {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phone: data.phone,
        message: data.message,
        newsletter: data.newsletter,
      },
    })

    // If newsletter is checked, also subscribe them
    if (data.newsletter) {
      try {
        await payload.create({
          collection: 'newsletter',
          data: {
            name: `${data.firstName} ${data.lastName}`,
            email: data.email,
          },
        })
      } catch (error) {
        // Ignore unique constraint error if already subscribed
        console.log('Newsletter subscription error (likely duplicate):', error)
      }
    }

    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}
