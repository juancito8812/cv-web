import { defineConfig } from 'astro/config';

// BASE_PATH='/' genera un build servible en la raíz (para preview por túnel).
// Sin la variable usa /cv-web, que es la ruta real en GitHub Pages.
const base = process.env.BASE_PATH || '/cv-web';

export default defineConfig({
  site: 'https://juancito8812.github.io',
  base,
  build: { format: 'directory' },
});
