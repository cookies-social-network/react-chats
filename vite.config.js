import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

const federationConfig = federation({
  name: 'remote_chats',
  filename: 'remoteEntry.js',
  exposes: {
    './Chats': "./src/Chats"
  },
  shared: ['react', 'react-dom']
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federationConfig],
  build: {
    modulePreload: false,
    target: 'esnext',
    minify: false,
    cssCodeSplit: false,
  }
})
