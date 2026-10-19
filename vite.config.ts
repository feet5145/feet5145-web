import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ command, isPreview }) => ({
  plugins: [react(), tailwindcss()],
  // En GitHub Pages la web se publica en https://feet5145.github.io/feet5145-web/
  // (con `pnpm dev` sigue en la raíz, http://localhost:5173/).
  base: command === 'build' || isPreview ? '/feet5145-web/' : '/',
}))
