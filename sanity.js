import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityConfigured=Boolean(import.meta.env.VITE_SANITY_PROJECT_ID)

export const client=createClient({
  projectId:import.meta.env.VITE_SANITY_PROJECT_ID||'placeholder',
  dataset:import.meta.env.VITE_SANITY_DATASET||'production',
  apiVersion:'2026-01-01',
  useCdn:true,
  perspective:'published'
})

const builder=imageUrlBuilder(client)
export const imageUrl=source=>builder.image(source).auto('format').fit('max').url()

export const projectsQuery=`*[_type == "project" && published == true] | order(order asc){
  _id, title, "id": slug.current, category, summary, description, year, client,
  services, featured, published, order, websiteUrl, videoUrl,
  "media": media[]{
    _key, _type, alt,
    _type == "image" => {asset},
    _type == "file" => {"src": asset->url, "mime": asset->mimeType}
  }
}`

export const settingsQuery=`*[_type == "siteSettings"][0]{
  "resumeUrl": resume.asset->url,
  "resumeName": resume.asset->originalFilename
}`
