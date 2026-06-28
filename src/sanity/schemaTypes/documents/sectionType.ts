import {ComponentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const sectionType = defineType({
  name: 'section',
  title: 'Section',
  type: 'document',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Editorial label for finding and reusing this section in Studio.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sectionType',
      title: 'Section Type',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Hero', value: 'hero'},
          {title: 'CTA', value: 'cta'},
          {title: 'FAQ', value: 'faq'},
          {title: 'Statistics', value: 'statistics'},
          {title: 'Lead Form', value: 'leadForm'},
          {title: 'Rich Text', value: 'richText'},
          {title: 'Logos', value: 'logos'},
          {title: 'Testimonials', value: 'testimonials'},
          {title: 'Video', value: 'video'},
          {title: 'University Section', value: 'universitySection'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      initialValue: 'draft',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Draft', value: 'draft'},
          {title: 'Published', value: 'published'},
          {title: 'Archived', value: 'archived'},
        ],
        layout: 'radio',
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Notes for editors until concrete section schemas are added.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sectionType: 'sectionType',
      status: 'status',
    },
    prepare({title, sectionType, status}) {
      return {
        title: title || 'Untitled Section',
        subtitle: [sectionType, status].filter(Boolean).join(' - '),
      }
    },
  },
})
