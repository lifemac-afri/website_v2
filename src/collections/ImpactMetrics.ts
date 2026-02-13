import type { CollectionConfig } from 'payload'

export const ImpactMetrics: CollectionConfig = {
  slug: 'impact-metrics',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'value',
      type: 'text',
      required: true,
      label: 'Value (e.g. 56k)',
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      label: 'Title (e.g. Children engaged)',
    },
    {
      name: 'featured',
      type: 'checkbox',
      label: 'Featured',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
