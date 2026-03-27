import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://www.sakuraio.com',
  base: '/blog/',
  output: 'static',
  outDir: '../../dist/blog',
  integrations: [tailwind()],
});
