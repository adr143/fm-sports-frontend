import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      ecma: 5,
      compress: true,
      mangle: true,
      format: {
        ecma: 5,
      },
    },
  },
})
