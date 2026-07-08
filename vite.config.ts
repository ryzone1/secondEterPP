import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/secondEterPP/',
  build: {
    outDir: 'docs'
  },
  plugins: [react()]
})
