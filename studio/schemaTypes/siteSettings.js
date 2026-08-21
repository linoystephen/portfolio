import {defineField,defineType} from 'sanity'
export default defineType({name:'siteSettings',title:'Résumé & site settings',type:'document',fields:[
  defineField({name:'resume',title:'Downloadable résumé',type:'file',options:{accept:'.pdf,.doc,.docx'},validation:R=>R.required()}),
  defineField({name:'availability',title:'Availability message',type:'string',initialValue:'Available for senior design opportunities and select projects'})
]})
