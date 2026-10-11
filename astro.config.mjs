import { defineConfig } from 'astro/config';

export default defineConfig({
  // GitHub Actions supplies the actual Pages origin and repository base path.
  // Leave the origin unset locally rather than publishing a placeholder canonical.
  site: process.env.SITE_URL || undefined,
  base: process.env.BASE_PATH || '/',
  output: 'static',
  trailingSlash: 'always',
});
