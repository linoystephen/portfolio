import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes/index.js'

const projectId=process.env.SANITY_STUDIO_PROJECT_ID||'nan7azvw'
const dataset=process.env.SANITY_STUDIO_DATASET||'production'

export default defineConfig({
  name:'linoyPortfolio',title:'LS Portfolio',projectId,dataset,
  plugins:[structureTool({structure:S=>S.list().title('Portfolio').items([
    S.documentTypeListItem('project').title('Projects'),
    S.divider(),
    S.listItem().title('Résumé & site settings').id('siteSettings').child(S.document().schemaType('siteSettings').documentId('siteSettings'))
  ])}),visionTool()],
  schema:{types:schemaTypes}
})
