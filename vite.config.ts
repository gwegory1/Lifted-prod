import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG'],
  build: {
    outDir: 'build', // Ensure the output directory is set to 'build'
  },
  base: './', // Ensure the base path is set correctly
})