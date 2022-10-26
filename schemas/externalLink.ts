
import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'externalLink',
  name: 'externalLink',
  type: 'object',
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'string',
    })
  ],
})