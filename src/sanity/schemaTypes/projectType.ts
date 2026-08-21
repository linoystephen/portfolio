import { defineField, defineType } from 'sanity';

export const projectType = defineType({
  name: 'project',
  title: 'Portfolio Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'client',
      title: 'Client Name / Company',
      type: 'string',
    }),
    defineField({
      name: 'category',
      title: 'Project Category',
      type: 'string',
      options: {
        list: [
          { title: 'Brand Identity', value: 'branding' },
          { title: 'Pharma Packaging', value: 'packaging' },
          { title: 'Exhibition & Events', value: 'exhibition' },
          { title: 'Video & Motion', value: 'video' },
          { title: 'Web & UI/UX', value: 'web' },
        ],
      },
    }),
    defineField({
      name: 'description',
      title: 'Short Description (Card Summary)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'longDescription',
      title: 'Detailed Description (Popup Modal)',
      type: 'text',
      rows: 6,
    }),
    defineField({
      name: 'coverImage',
      title: 'Main Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [{ name: 'alt', title: 'Alternative Text', type: 'string' }],
    }),
    defineField({
      name: 'galleryImages',
      title: 'Multi-Image Gallery (Slideshow)',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true }, fields: [{ name: 'alt', title: 'Alternative Text', type: 'string' }] }],
    }),
    defineField({
      name: 'videoFile',
      title: 'Uploaded Video (MP4/WebM)',
      type: 'file',
      options: { accept: 'video/mp4,video/webm' },
    }),
    defineField({
      name: 'videoUrl',
      title: 'Video Reel Embed URL (YouTube/Vimeo/MP4)',
      type: 'url',
    }),
    defineField({
      name: 'websiteUrl',
      title: 'Live Website Link',
      type: 'url',
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables List',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'tools',
      title: 'Design Tools Used',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'year',
      title: 'Project Year',
      type: 'string',
    }),
    defineField({ name: 'featured', title: 'Featured Project', type: 'boolean', initialValue: false }),
    defineField({ name: 'published', title: 'Published on Website', type: 'boolean', initialValue: true }),
    defineField({ name: 'order', title: 'Display Order', type: 'number', validation: (Rule) => Rule.min(1) }),
  ],
});
