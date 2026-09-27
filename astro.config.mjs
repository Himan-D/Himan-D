import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.ASTRO_SITE || 'https://himan-d.github.io',
  base: process.env.ASTRO_BASE || '/',
  output: 'static',
});
