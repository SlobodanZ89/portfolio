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

## Project structure

- `src/content/content.ts`: all EN/DE copy for the site
- `src/components/`: UI sections (Hero, Projects, Skills, Contact, …)
- `src/styles/global.css`: global styling (including background image)
- `public/`: static assets served as-is (e.g. `robots.txt`, PDFs)

