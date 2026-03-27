import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.synthworks.com',
  base: '/',
  output: 'static',
  outDir: '../../dist',
  integrations: [tailwind()],
});
