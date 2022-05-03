import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: '@emotion/react',
    }),
  ],
  test: {
    environment: 'happy-dom',
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/tests/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.okym.workers.dev',
        changeOrigin: true,
        secure: false,
      },
    },
  },
} as any)
