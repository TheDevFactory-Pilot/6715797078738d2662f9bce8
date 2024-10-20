import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/absproxy/8080/',
  server: {
      port: 8080,
      host: '0.0.0.0', // Change this to a valid IP address if needed
  },
})