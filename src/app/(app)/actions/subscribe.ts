'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'

export async function subscribeToNewsletter(email: string, name: string) {
  const payload = await getPayload({ config })

  try {
    await payload.create({
      collection: 'newsletter',
      data: {
        email,
        name,
      },
    })
    return { success: true, message: 'Successfully subscribed!' }
  } catch (error: any) {
    console.error('Newsletter subscription error:', JSON.stringify(error, null, 2))
    
    // Check for unique constraint violation (duplicate email)
    // Payload validation errors are often in error.data
    const isUniqueError = error.data?.some((err: any) => err.message === 'This field must be unique')
    if (isUniqueError || error.message?.includes('unique')) {
        return { success: false, message: 'This email is already subscribed.' }
    }
    
    return { success: false, message: 'Failed to subscribe. Please try again.' }
  }
}
