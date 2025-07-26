// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ❌ Do NOT include base: '/wintermall/'
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: '/index.html',
    },
  },
});
