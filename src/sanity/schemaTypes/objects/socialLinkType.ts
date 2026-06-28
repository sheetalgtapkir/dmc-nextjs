import {LinkIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const socialLinkType = defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  icon: LinkIcon,
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      validation: (rule) => rule.required(),
      options: {
        list: [
          {title: 'Facebook', value: 'facebook'},
          {title: 'Instagram', value: 'instagram'},
          {title: 'LinkedIn', value: 'linkedin'},
          {title: 'YouTube', value: 'youtube'},
          {title: 'X / Twitter', value: 'twitter'},
          {title: 'WhatsApp', value: 'whatsapp'},
          {title: 'Other', value: 'other'},
        ],
      },
    }),
    defineField({
      name: 'label',
      title: 'Label',
      type: 'string',
      description: 'Accessible label or display name.',
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (rule) =>
        rule.required().uri({
          scheme: ['http', 'https', 'mailto', 'tel', 'whatsapp'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'label',
      platform: 'platform',
      subtitle: 'url',
    },
    prepare({title, platform, subtitle}) {
      return {
        title: title || platform || 'Social Link',
        subtitle,
      }
    },
  },
})
