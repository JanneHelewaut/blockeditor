import {defineType, defineField} from 'sanity'

export default defineType({
  title: 'test',
  name: 'test',
  type: 'document',
  fields: [
    defineField({
      type: 'blockContent',
      name: 'blockContent',
      title: 'blockContent',
    })
  ],
})
