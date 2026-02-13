import type { CollectionConfig } from 'payload'
import { processBulkUpload } from '../hooks/processBulkUpload'

export const Gallery: CollectionConfig = {
  slug: 'gallery',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [processBulkUpload],
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Album Title',
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      options: [
        { label: 'PSP', value: 'PSP' },
        { label: 'STEMize', value: 'STEMize' },
        { label: 'YLT', value: 'YLT' },
        { label: 'Nyornuvi', value: 'Nyornuvi' },
        { label: 'Events', value: 'Events' },
        { label: 'Team', value: 'Team' },
        { label: 'UVL', value: 'UVL' },
        { label: 'Masterclass', value: 'Masterclass' },
      ],
    },
    {
      name: 'images',
      type: 'upload',
      relationTo: 'media',
      required: false, // Changed to false to allow creating with just bulk upload
      hasMany: true,
    },
    {
      name: 'bulkUpload',
      type: 'upload',
      relationTo: 'media',
      label: 'Bulk Upload (ZIP)',
      admin: {
        description: 'Upload a ZIP file containing images. They will be automatically extracted and added to this album.',
      },
    },
  ],
}
