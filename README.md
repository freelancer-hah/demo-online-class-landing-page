# Meridian Maths — One-page tutor landing site (React + Vite)

Built for Mini Challenge 26-FMC-0917.

## Before deploying
Edit `src/config.js` and set your real WhatsApp number:

```js
export const WHATSAPP_NUMBER = "923001234567"; // your number, country code, no + or spaces
```

## Run locally
```
npm install
npm run dev
```

## Deploy

### Vercel (recommended for Vite)
1. Push this folder to a GitHub repo.
2. Import the repo at vercel.com/new — Vercel auto-detects Vite, no config needed.
3. Deploy. You'll get a public URL like `your-project.vercel.app`.

### Netlify
1. Run `npm run build` locally — this creates a `dist/` folder.
2. Go to app.netlify.com/drop and drag the `dist/` folder in.
   (Or connect the GitHub repo with build command `npm run build` and publish directory `dist`.)

### GitHub Pages
1. Run `npm run build` to generate `dist/`.
2. Push the contents of `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package).
3. Enable Pages in repo Settings → point it at that branch.

## Structure
- `src/config.js` — WhatsApp number/message, edit here only
- `src/components/` — one component per section (Hero, Method, Results, Tutor, etc.)
- `src/App.css` — all section styling, using CSS variables defined in `src/index.css`
