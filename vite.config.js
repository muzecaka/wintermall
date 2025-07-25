import { defineConfig } from 'vite';
    import react from '@vitejs/plugin-react';

    export default defineConfig({
      plugins: [react()],
      base: '/wintermall/',
      build: {
        outDir: 'build',
        rollupOptions: {
          input: {
            main: 'index.html', // Explicitly set index.html as entry
          },
        },
      },
    });