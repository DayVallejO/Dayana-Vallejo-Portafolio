import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' permite publicar en GitHub Pages sin configurar la ruta del repo
export default defineConfig({
  plugins: [react()],
  base: './',
})
