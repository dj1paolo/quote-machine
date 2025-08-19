import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/quote-machine/',   // <-- EXACTLY your repo name with trailing slash
  build: { outDir: 'docs' }  // publish from docs
})
