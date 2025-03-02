// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

const liveURL = 'https://glitchcrafter.github.io';

// https://astro.build/config
export default defineConfig({
  site: liveURL,
  base: '/glitchcrafter.github.io/',
  vite: {
    plugins: [tailwindcss()]
  }
});