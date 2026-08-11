# Aakashi — Software Developer Portfolio

A production-ready React + Vite + TypeScript + Tailwind portfolio website, ready to deploy to GitHub Pages.

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

Open http://localhost:5173 in your browser.

## Build & Deploy

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## GitHub Pages Deployment

1. Create a GitHub repository named `aakashiitk.github.io`
2. Push this project to the `main` branch
3. The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically:
   - Build the project
   - Deploy the `dist` folder to the `gh-pages` branch
4. Your site will be live at https://aakashiitk.github.io

## Customization

- **Hero Image**: Replace the image URL in `src/components/Hero.tsx`
- **Contact Email**: Update the email in `src/pages/Home.tsx`
- **Projects**: Edit the projects array in `src/pages/Home.tsx`
- **Colors**: Customize Tailwind colors in `tailwind.config.cjs`

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool & dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **PostCSS** - CSS preprocessing

---

Made with ❤️
