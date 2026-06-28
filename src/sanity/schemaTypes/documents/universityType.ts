import {EarthGlobeIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const universityType = defineType({
  name: 'university',
  title: 'University',
  type: 'document',
  icon: EarthGlobeIcon,
  fields: [
    defineField({
      name: 'name',
      title: 'University Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative Text',
          type: 'string',
        }),
      ],
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.max(220),
    }),
    defineField({
      name: 'overview',
      title: 'Overview',
      type: 'blockContent',
    }),
    defineField({
      name: 'approvals',
      title: 'Approvals',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'accreditations',
      title: 'Accreditations',
      type: 'array',
      of: [defineArrayMember({type: 'string'})],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'ranking',
      title: 'Ranking',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'rankingItem',
          title: 'Ranking Item',
          fields: [
            defineField({
              name: 'title',
              title: 'Ranking Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'rank',
              title: 'Rank',
              type: 'string',
            }),
            defineField({
              name: 'year',
              title: 'Year',
              type: 'number',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'fees',
      title: 'Fees',
      type: 'object',
      fields: [
        defineField({
          name: 'amount',
          title: 'Amount',
          type: 'number',
        }),
        defineField({
          name: 'currency',
          title: 'Currency',
          type: 'string',
          initialValue: 'INR',
        }),
        defineField({
          name: 'label',
          title: 'Label',
          type: 'string',
          description: 'Example: Total fee, per semester, or starting from.',
        }),
        defineField({
          name: 'notes',
          title: 'Notes',
          type: 'text',
          rows: 3,
        }),
      ],
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
    }),
    defineField({
      name: 'eligibility',
      title: 'Eligibility',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'officialWebsite',
      title: 'Official Website',
      type: 'url',
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'applyUrl',
      title: 'Apply URL',
      type: 'url',
      validation: (rule) =>
        rule.uri({
          scheme: ['http', 'https'],
        }),
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [defineArrayMember({type: 'sectionReference'})],
      description: 'Ordered university section architecture. Concrete section schemas will be added later.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'shortDescription',
      media: 'logo',
    },
  },
})
