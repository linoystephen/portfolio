import {defineField,defineType} from 'sanity'
export default defineType({name:'siteSettings',title:'Résumé & site settings',type:'document',fields:[
  defineField({name:'resume',title:'Downloadable résumé',type:'file',options:{accept:'.pdf,.doc,.docx'},validation:R=>R.required()}),
  defineField({name:'portfolioPdf',title:'Downloadable portfolio PDF',description:'Optional. When set, a "Download portfolio" button appears next to the résumé download on the homepage.',type:'file',options:{accept:'.pdf'}}),
  defineField({name:'availability',title:'Availability message',type:'string',initialValue:'Available for senior design opportunities and select projects'})
]})
