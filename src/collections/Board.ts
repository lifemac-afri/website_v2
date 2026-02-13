import type { CollectionConfig } from 'payload'

export const Board: CollectionConfig = {
  slug: 'board',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'role',
      type: 'text',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      admin: {
        description: 'Order in which to display the board member',
      },
    },
  ],
}
