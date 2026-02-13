import type { CollectionConfig } from 'payload'

export const Stories: CollectionConfig = {
  slug: 'stories',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
    },
    {
      name: 'category',
      type: 'select',
      options: [
        { label: 'General', value: 'General' },
        { label: 'STEMIZE', value: 'STEMIZE' },
        { label: 'PSP', value: 'PSP' },
        { label: 'YLT', value: 'YLT' },
      ],
      defaultValue: 'General',
    },
    {
      name: 'date',
      type: 'date',
      admin: {
        date: {
          pickerAppearance: 'dayOnly',
        },
      },
    },
    {
      name: 'location',
      type: 'text',
      required: false,
      defaultValue: 'Ghana',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured Story',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
