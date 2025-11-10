import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['ollyc.iptime.org'],
  },
  proxy: {
    '/api': {
      target: 'http://ollyc.iptime.org:15001',
      changeOrigin: true,
      secure: false,
    }
  }
})
