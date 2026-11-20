import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Vercel: leave VITE_BASE unset (defaults to '/')
// GitHub Pages project site: VITE_BASE=/your-repo-name/ npm run build
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || '/',
})
