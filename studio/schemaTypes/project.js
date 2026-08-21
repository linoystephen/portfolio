import {defineArrayMember,defineField,defineType} from 'sanity'
export default defineType({name:'project',title:'Project',type:'document',fields:[
  defineField({name:'title',title:'Title',type:'string',validation:R=>R.required()}),
  defineField({name:'slug',title:'Slug',type:'slug',options:{source:'title',maxLength:96},validation:R=>R.required()}),
  defineField({name:'category',title:'Category',type:'string',options:{list:['Brand Identity','Corporate Communications','Packaging & Regulatory Design','Exhibition & Event Branding','Editorial Design','Publication Design','Campaign Design','Motion Design','Web & UI Design','Corporate Video','AI-Assisted Creative']},validation:R=>R.required()}),
  defineField({name:'summary',title:'Short description',type:'text',rows:3,validation:R=>R.required().max(240)}),
  defineField({name:'description',title:'Full case study',type:'text',rows:8}),
  defineField({name:'year',title:'Project year',type:'string'}),
  defineField({name:'client',title:'Client',type:'string'}),
  defineField({name:'services',title:'Services',type:'array',of:[defineArrayMember({type:'string'})],options:{layout:'tags'}}),
  defineField({name:'featured',title:'Featured project',type:'boolean',initialValue:false}),
  defineField({name:'published',title:'Published on website',type:'boolean',initialValue:true}),
  defineField({name:'order',title:'Display order',type:'number',validation:R=>R.min(1)}),
  defineField({name:'websiteUrl',title:'Live website link',type:'url'}),
  defineField({name:'videoUrl',title:'YouTube or Vimeo link',type:'url'}),
  defineField({name:'media',title:'Project media',description:'Place the strongest cover image first. Add multiple images or uploaded MP4/WebM video.',type:'array',of:[
    defineArrayMember({type:'image',options:{hotspot:true},fields:[defineField({name:'alt',title:'Alternative text',type:'string',validation:R=>R.required()})]}),
    defineArrayMember({type:'file',options:{accept:'video/mp4,video/webm'},fields:[defineField({name:'caption',title:'Caption',type:'string'})]})
  ],validation:R=>R.min(1)}),
],preview:{select:{title:'title',subtitle:'category',media:'media.0'}}})
