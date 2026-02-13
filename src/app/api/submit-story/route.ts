import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import config from '@/payload.config'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, story, contactConsent } = body

    // Validate required fields
    if (!name || !story) {
      return NextResponse.json(
        { error: 'Name and story are required fields' },
        { status: 400 }
      )
    }

    // Get Payload instance
    const payload = await getPayload({ config })

    // Create story submission
    const submission = await payload.create({
      collection: 'story-submissions',
      data: {
        name,
        email: email || undefined,
        story,
        contactConsent: contactConsent || false,
        status: 'pending',
      },
    })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Story submitted successfully',
        id: submission.id 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error submitting story:', error)
    return NextResponse.json(
      { error: 'Failed to submit story. Please try again later.' },
      { status: 500 }
    )
  }
}
