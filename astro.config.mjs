// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  build: {
      // This forces Astro to put CSS directly into the HTML <style> tags
      inlineStylesheets: 'always', 
  }
});