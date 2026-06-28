import {ComponentIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const sectionReferenceType = defineType({
  name: 'sectionReference',
  title: 'Section Reference',
  type: 'object',
  icon: ComponentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Internal Title',
      type: 'string',
      description: 'Editorial label for identifying this section in the page structure.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'sectionType',
      title: 'Future Section Type',
      type: 'string',
      description: 'Reserved for Hero, CTA, FAQ, Statistics, Lead Form, Rich Text, and future sections.',
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
      name: 'sectionKey',
      title: 'Section Key',
      type: 'slug',
      description: 'Stable editorial key for future rendering and migration mapping.',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'isEnabled',
      title: 'Status',
      type: 'string',
      initialValue: 'enabled',
      options: {
        list: [
          {title: 'Enabled', value: 'enabled'},
          {title: 'Disabled', value: 'disabled'},
        ],
        layout: 'radio',
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      sectionType: 'sectionType',
      status: 'isEnabled',
    },
    prepare({title, sectionType, status}) {
      return {
        title: title || 'Section Reference',
        subtitle: [sectionType, status].filter(Boolean).join(' - '),
      }
    },
  },
})
