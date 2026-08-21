# Linoy Stephen Portfolio

Public portfolio built with Vite and managed through Sanity Studio. Netlify deploys the website from GitHub whenever changes are pushed.

## Connect Sanity

1. Create a Sanity project at `sanity.io/manage` and note its Project ID.
2. Copy `.env.example` to `.env` and replace `your_project_id` in both variables.
3. In the Sanity project, add `http://localhost:5173` as a CORS origin for local development. After Netlify deployment, add the final `https://…netlify.app` domain too. Credentials are not needed for the public read-only website.
4. Run `npm install`, then `npm run studio` to open the content editor.
5. Create **Résumé & site settings**, upload the résumé, then add projects. Put the strongest cover image first; add more images, uploaded MP4/WebM files, a YouTube/Vimeo URL, or a live website URL as needed.

## Run locally

```bash
npm install
npm run dev
```

Run Sanity Studio in another terminal:

```bash
npm run studio
```

## GitHub and Netlify

1. Create a GitHub repository and push this folder.
2. In Netlify, choose **Add new site → Import an existing project**, select the repository, and keep the detected settings from `netlify.toml`.
3. Add environment variables `VITE_SANITY_PROJECT_ID` and `VITE_SANITY_DATASET=production` in Netlify.
4. Deploy. Add the Netlify URL to Sanity CORS origins.

## Deploy the editing Studio

Sanity can host the Studio separately:

```bash
npm run studio:deploy
```

Only invited Sanity project members can edit content. The public portfolio uses the published, read-only dataset through Sanity's CDN.
