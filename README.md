# Portfolio (Vite + React + MUI)

Personal portfolio site built with **React (Vite)**, **TypeScript**, and **Material UI**.

## Local development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Deploying to Netlify

- **Build command**: `npm run build`
- **Publish directory**: `dist`

### Contact form (Netlify Forms)

This project includes a contact form wired for **Netlify Forms**:

- A visible form in `src/components/Contact.tsx`
- A hidden build-time form in `index.html` (required for SPA form detection)

After deploying, submissions will appear in Netlify under **Forms**.

## Deploying to GitHub Pages

This repo is configured to deploy to **GitHub Pages** via a workflow at `.github/workflows/deploy.yml`.

In GitHub:
- **Settings → Pages**
- **Source**: *GitHub Actions*

The Vite base path is set for a project site at `https://<user>.github.io/portfolio/`.

### Contact form on GitHub Pages

GitHub Pages cannot process Netlify Forms. The contact form falls back to opening the user's email client via `mailto:` unless you configure an API endpoint:

- Set `VITE_CONTACT_ENDPOINT` at build time (for example, a Formspree/Getform endpoint).

## Project structure

- `src/content/content.ts`: all EN/DE copy for the site
- `src/components/`: UI sections (Hero, Projects, Skills, Contact, …)
- `src/styles/global.css`: global styling (including background image)
- `public/`: static assets served as-is (e.g. `robots.txt`, PDFs)

