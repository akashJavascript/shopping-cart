import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist'; // Add this line

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.js',
  },

  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },
  build: {
    cssMinify: 'lightningcss',
  },
});
