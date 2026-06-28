import {DocumentIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  icon: DocumentIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
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
      name: 'pageType',
      title: 'Page Type',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Home', value: 'home'},
          {title: 'About', value: 'about'},
          {title: 'Contact', value: 'contact'},
          {title: 'Online MBA', value: 'onlineMba'},
          {title: 'Distance MBA', value: 'distanceMba'},
          {title: 'Executive MBA', value: 'executiveMba'},
          {title: 'Admission', value: 'admission'},
          {title: 'Scholarship', value: 'scholarship'},
          {title: 'Privacy Policy', value: 'privacyPolicy'},
          {title: 'Terms', value: 'terms'},
          {title: 'Refund Policy', value: 'refundPolicy'},
          {title: 'Landing Page', value: 'landingPage'},
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
      name: 'seo',
      title: 'SEO',
      type: 'seo',
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [defineArrayMember({type: 'sectionReference'})],
      description: 'Ordered section architecture. Concrete section schemas will be added in a later phase.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      pageType: 'pageType',
      status: 'status',
      media: 'featuredImage',
    },
    prepare({title, pageType, status, media}) {
      return {
        title: title || 'Untitled Page',
        subtitle: [pageType, status].filter(Boolean).join(' - '),
        media,
      }
    },
  },
})
