# Tarun Kumar — Portfolio

Professional portfolio for Full Stack / Fintech roles (React.js · Node.js · SQL).

Built with **Vite + React + Framer Motion**.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy

### Vercel

1. Push this folder to a GitHub repo
2. Import the repo in [Vercel](https://vercel.com)
3. Framework preset: **Vite** — build `npm run build`, output `dist`

### GitHub Pages

1. Push to GitHub
2. Build with your repo name as base:

```bash
VITE_BASE=/your-repo-name/ npm run build
```

3. Deploy the `dist` folder (Actions / `gh-pages` / Pages from `dist`)

If using a custom domain or user site (`username.github.io`), keep default base:

```bash
npm run build
```
