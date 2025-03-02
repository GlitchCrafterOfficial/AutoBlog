// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const liveURL = 'https://glitchcrafterofficial.github.io';

// https://astro.build/config
export default defineConfig({
  site: liveURL,
  base: '/',
  vite: {
    plugins: [tailwindcss()]
  }
});