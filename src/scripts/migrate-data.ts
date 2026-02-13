import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

dotenv.config({
  path: path.resolve(dirname, '../../.env'),
})

import { 
  teamMembers, 
  testimonials, 
  upcomingEvents, 
  upcomingEventsSTEMIZE, 
  upcomingEventsPSP, 
  upcomingEventsYLT,
  successStories,
  successStoriesSTEMIZE,
  successStoriesPSP,
  successStoriesYLT,
  currentPartners
} from '@/data'

const migrate = async () => {
  const { getPayload } = await import('payload')
  const { default: config } = await import('../payload.config')
  const payload = await getPayload({ config })

  console.log('Migrating Team Members...')
  for (const member of teamMembers) {
    await payload.create({
      collection: 'team',
      draft: false,
      data: {
        name: member.name,
        role: member.role,
        // image: member.image, // Skipping image upload for now as it requires file handling
        socials: {
          ...member.socials,
          email: member.socials?.email?.replace('mailto:', ''),
        },
      },
    })
  }

  console.log('Migrating Testimonials...')
  for (const testimonial of testimonials) {
    await payload.create({
      collection: 'testimonials',
      draft: false,
      data: {
        quote: testimonial.quote,
        name: testimonial.name,
        role: testimonial.role,
        // image: testimonial.image,
        program: 'General',
        status: 'published',
        date: new Date().toISOString(),
      },
    })
  }

  console.log('Migrating Partners...')
  for (const partner of currentPartners) {
    await payload.create({
      collection: 'partners',
      draft: false,
      data: {
        name: partner.name,
        // logo: partner.logo,
      },
    })
  }

  console.log('Migrating Events...')
  const allEvents = [
    ...upcomingEvents.map(e => ({ ...e, category: 'General' })),
    ...upcomingEventsSTEMIZE.map(e => ({ ...e, category: 'STEMIZE' })),
    ...upcomingEventsPSP.map(e => ({ ...e, category: 'PSP' })),
    ...upcomingEventsYLT.map(e => ({ ...e, category: 'YLT' })),
  ]

  for (const event of allEvents) {
    await payload.create({
      collection: 'events',
      draft: false,
      data: {
        title: event.title,
        date: new Date(event.date).toISOString(),
        location: event.location,
        category: event.category as any,
        status: 'upcoming',
        // image: event.image,
      },
    })
  }

  console.log('Migrating Stories...')
  const allStories = [
    ...successStories.map(s => ({ ...s, category: 'General' })),
    ...successStoriesSTEMIZE.map(s => ({ ...s, category: 'STEMIZE' })),
    ...successStoriesPSP.map(s => ({ ...s, category: 'PSP' })),
    ...successStoriesYLT.map(s => ({ ...s, category: 'YLT' })),
  ]

  for (const story of allStories) {
    await payload.create({
      collection: 'stories',
      draft: false,
      data: {
        title: story.title,
        description: {
          root: {
            type: 'root',
            children: [
              {
                type: 'paragraph',
                children: [
                  {
                    type: 'text',
                    detail: 0,
                    format: 0,
                    mode: 'normal',
                    style: '',
                    text: story.description,
                    version: 1,
                  },
                ],
                direction: 'ltr',
                format: '',
                indent: 0,
                textFormat: 0,
                version: 1,
              },
            ],
            direction: 'ltr',
            format: '',
            indent: 0,
            version: 1,
          },
        },
        category: story.category as any,
        // image: story.image,
      },
    })
  }

  console.log('Migration complete!')
  process.exit(0)
}

migrate()
