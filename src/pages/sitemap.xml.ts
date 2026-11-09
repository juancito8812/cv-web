import type { APIRoute } from 'astro';

const rutas = [
  { ruta: '/', prioridad: '1.0', frecuencia: 'monthly' },
  { ruta: '/cv/', prioridad: '0.8', frecuencia: 'monthly' },
  { ruta: '/legal/aviso-legal/', prioridad: '0.3', frecuencia: 'yearly' },
  { ruta: '/legal/privacidad/', prioridad: '0.3', frecuencia: 'yearly' },
  { ruta: '/legal/cookies/', prioridad: '0.3', frecuencia: 'yearly' },
  { ruta: '/legal/terminos/', prioridad: '0.3', frecuencia: 'yearly' },
];

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() ?? 'https://jsolucionestegnologicas.com/').replace(/\/$/, '');
  const hoy = new Date().toISOString().slice(0, 10);
  const cuerpo = rutas
    .map(
      (r) => `  <url>
    <loc>${base}${r.ruta}</loc>
    <lastmod>${hoy}</lastmod>
    <changefreq>${r.frecuencia}</changefreq>
    <priority>${r.prioridad}</priority>
  </url>`
    )
    .join('\n');

  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${cuerpo}
</urlset>
`,
    { headers: { 'Content-Type': 'application/xml; charset=utf-8' } }
  );
};
