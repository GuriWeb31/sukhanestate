import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  base: 'sukhanestates',
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: [
      'cafe-49-156-75-94.ngrok-free.app',  // Update with your new ngrok URL
      'localhost',
      '127.0.0.1',
    ],
  },
})
