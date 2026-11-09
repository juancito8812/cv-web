import { defineConfig } from 'astro/config';

// BASE_PATH='/' genera un build servible en la raíz. Con dominio propio el
// sitio vive en la raíz; la ruta /cv-web ya no se usa.
const base = process.env.BASE_PATH || '/';

export default defineConfig({
  site: 'https://jsolucionestegnologicas.com',
  base,
  build: { format: 'directory' },
});
