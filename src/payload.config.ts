import { buildConfig } from 'payload'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Events } from './collections/Events'
import { Stories } from './collections/Stories'
import { Team } from './collections/Team'
import { Testimonials } from './collections/Testimonials'
import { Partners } from './collections/Partners'
import { Newsletter } from './collections/Newsletter'
import { ImpactMetrics } from './collections/ImpactMetrics'
import { Board } from './collections/Board'
import { Gallery } from './collections/Gallery'
import { VolunteerTestimonials } from './collections/VolunteerTestimonials'
import { PartnerTestimonials } from './collections/PartnerTestimonials'
import { VolunteerApplications } from './collections/VolunteerApplications'
import { PartnershipApplications } from './collections/PartnershipApplications'
import { StorySubmissions } from './collections/StorySubmissions'
import { ContactSubmissions } from './collections/ContactSubmissions'

import { cloudinaryAdapter } from './utilities/cloudinaryAdapter'
import { cloudStoragePlugin } from '@payloadcms/plugin-cloud-storage'

import { Logo } from './components/payload/Logo'
import { Icon } from './components/payload/Icon'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
    meta: {
      titleSuffix: ' - LIFE-MAC Africa Console',
    },
  },
  routes: {
    admin: '/console',
  },
  collections: [Users, Media, Events, Stories, Team, Testimonials, Partners, Newsletter, ImpactMetrics, Gallery, Board, VolunteerTestimonials, PartnerTestimonials, VolunteerApplications, PartnershipApplications, StorySubmissions, ContactSubmissions],
  plugins: [
    cloudStoragePlugin({
      collections: {
        media: {
          disablePayloadAccessControl: true,
          adapter: cloudinaryAdapter({
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME || '',
            api_key: process.env.CLOUDINARY_API_KEY || '',
            api_secret: process.env.CLOUDINARY_API_SECRET || '',
          }),
        },
      },
    }),
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.POSTGRES_URL || process.env.DATABASE_URI,
    },
  }),
  sharp,

})
