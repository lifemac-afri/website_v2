'use server'

import { getPayload } from 'payload'
import config from '@/payload.config'

export async function submitVolunteerApplication(formData: FormData) {
  const payload = await getPayload({ config })

  try {
    await payload.create({
      collection: 'volunteer-applications',
      data: {
        firstName: formData.get('firstName') as string,
        lastName: formData.get('lastName') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        address: formData.get('address') as string,
        skills: formData.get('skills') as string,
        newsletter: formData.get('newsletter') === 'on',
      },
    })
    return { success: true }
  } catch (error) {
    console.error('Error submitting volunteer application:', error)
    return { success: false, error: 'Failed to submit application' }
  }
}

export async function submitPartnershipApplication(formData: FormData) {
  const payload = await getPayload({ config })

  try {
    await payload.create({
      collection: 'partnership-applications',
      data: {
        organizationName: formData.get('organizationName') as string,
        contactName: formData.get('contactName') as string,
        position: formData.get('position') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        website: formData.get('website') as string,
        partnershipType: formData.get('partnershipType') as 'program' | 'funding' | 'resource' | 'strategic' | 'other',
        message: formData.get('message') as string,
        hearAbout: formData.get('hearAbout') as 'website' | 'social' | 'event' | 'referral' | 'other',
        newsletter: formData.get('newsletter') === 'on',
      },
    })
    return { success: true }
  } catch (error) {
    console.error('Error submitting partnership application:', error)
    return { success: false, error: 'Failed to submit application' }
  }
}
