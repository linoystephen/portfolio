import {defineArrayMember,defineField,defineType} from 'sanity'
export default defineType({name:'project',title:'Project',type:'document',fields:[
  defineField({name:'title',title:'Title',type:'string',validation:R=>R.required()}),
  defineField({name:'slug',title:'Slug',type:'slug',options:{source:'title',maxLength:96},validation:R=>R.required()}),
  defineField({name:'category',title:'Category',type:'string',description:'Type any category name, such as Brand Identity, Packaging Design or Web & UI Design.',validation:R=>R.required().max(80)}),
  defineField({name:'summary',title:'Short description',type:'text',rows:3,validation:R=>R.required().max(240)}),
  defineField({name:'description',title:'Full case study',type:'text',rows:8}),
  defineField({name:'year',title:'Project year',type:'string'}),
  defineField({name:'client',title:'Client',type:'string'}),
  defineField({name:'services',title:'Services',type:'array',of:[defineArrayMember({type:'string'})],options:{layout:'tags'}}),
  defineField({name:'featured',title:'Featured project',type:'boolean',initialValue:false}),
  defineField({name:'published',title:'Published on website',type:'boolean',initialValue:true}),
  defineField({name:'order',title:'Display order',type:'number',validation:R=>R.min(1)}),
  defineField({name:'coverImage',title:'Cover image (grid thumbnail)',description:'Shown as the project\'s thumbnail in the main "Selected work" grid. If left empty, the first image in Project media below is used instead.',type:'image',options:{hotspot:true},fields:[defineField({name:'alt',title:'Alternative text',type:'string'})]}),
  defineField({name:'websiteUrl',title:'Live website link',type:'url'}),
  defineField({name:'videoUrl',title:'YouTube or Vimeo link (legacy, single)',description:'Older single-video field, kept for existing projects. Use "Video links" below to add videos going forward — you can add as many as you like there.',type:'url'}),
  defineField({name:'videoUrls',title:'Video links',description:'Add one or more YouTube or Vimeo links. Each one appears as a playable item in the project gallery.',type:'array',of:[defineArrayMember({type:'url'})]}),
  defineField({name:'media',title:'Project media',description:'Place the strongest cover image first. Add multiple images or uploaded MP4/WebM video.',type:'array',of:[
    defineArrayMember({type:'image',options:{hotspot:true},fields:[defineField({name:'alt',title:'Alternative text',type:'string',validation:R=>R.required()})]}),
    defineArrayMember({type:'file',options:{accept:'video/mp4,video/webm'},fields:[defineField({name:'caption',title:'Caption',type:'string'})]})
  ],validation:R=>R.min(1)}),
],preview:{select:{title:'title',subtitle:'category',cover:'coverImage',fallback:'media.0'},prepare:({title,subtitle,cover,fallback})=>({title,subtitle,media:cover||fallback})}})
