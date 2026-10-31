export type Estado = 'linea' | 'desarrollo';

export interface Proyecto {
  nombre: string;
  descripcion: string;
  stack: string[];
  url?: string;
  estado: Estado;
}

// Estado verificado por HTTP y por git el 30-oct-2026 (200 = en vivo).
export const proyectos: Proyecto[] = [
  {
    nombre: 'YoSoy222',
    descripcion:
      'Catálogo PWA de velas artesanales (49 productos) con analítica propia en Supabase + GA4, service worker con versionado de caché validado en CI y headers de seguridad completos en Cloudflare.',
    stack: ['PWA', 'JavaScript', 'Supabase', 'GA4', 'Cloudflare'],
    url: 'https://yosoy222.com',
    estado: 'linea',
  },
  {
    nombre: 'Interliga — Futbol Camiseta Pasión',
    descripcion:
      'Plataforma de pronósticos deportivos con registro, ranking en vivo, validación anti-trampa y cron de resultados. Base Postgres con RLS por usuario.',
    stack: ['Next.js', 'TypeScript', 'Supabase', 'GitHub Pages'],
    url: 'https://futbolcamisetapasion.com',
    estado: 'linea',
  },
  {
    nombre: 'QR Dinámico',
    descripcion:
      'Generador de QR dinámicos multi-usuario: planes, redirecciones editables y métricas de escaneo. FastAPI + Alembic en VPS con Docker y Caddy; 746 tests y render de imágenes movido a threadpool (loop sin bloqueos).',
    stack: ['FastAPI', 'PostgreSQL', 'Docker', 'Caddy', 'VPS'],
    url: 'https://qrcoder.win',
    estado: 'linea',
  },
  {
    nombre: 'Adima Design LLC',
    descripcion:
      'Sitio corporativo del estudio de diseño en Hollywood, FL. Cliente en EE. UU.: diseño, desarrollo Astro y despliegue llave en mano en VPS con SSL propio detrás de Cloudflare.',
    stack: ['Astro', 'Diseño UI', 'Caddy', 'Cloudflare'],
    url: 'https://adimadesign.com',
    estado: 'linea',
  },
  {
    nombre: 'Grupo LA',
    descripcion:
      'Sitio de construcción y remodelaciones: catálogo de servicios, fichas de obra y contacto directo. Deploy automático en cada merge.',
    stack: ['Astro', 'TypeScript', 'GitHub Actions'],
    url: 'https://juancito8812.github.io/grupo-la-web/',
    estado: 'linea',
  },
  {
    nombre: 'CV Web',
    descripcion:
      'Este mismo sitio: CV navegable con export a PDF generado por CDP, CI con la versión de Node fijada y deploy automático a GitHub Pages.',
    stack: ['Astro', 'TypeScript', 'GitHub Pages'],
    url: 'https://juancito8812.github.io/cv-web/',
    estado: 'linea',
  },
  {
    nombre: 'Tasa del Día',
    descripcion:
      'App Android de tasa BCV y paralelo con conversor, histórico y actualización automática desde GitHub Releases (v1.6.11). Desarrollo guiado por tests, incluida la validación de cuentas bancarias.',
    stack: ['React Native', 'Expo', 'TypeScript', 'Jest'],
    estado: 'desarrollo',
  },
  {
    nombre: 'PsicoTarot — Arcanos',
    descripcion:
      'App Flutter (v2.3.0) con los 78 arcanos, tiradas guiadas, numerología y lectura offline. Publicada como APK firmado.',
    stack: ['Flutter', 'Dart', 'Android'],
    estado: 'desarrollo',
  },
  {
    nombre: 'SismoVE',
    descripcion:
      'App Flutter (v1.0.28) de alertas sísmicas offline-first sobre datos USGS, pensada para conexiones intermitentes.',
    stack: ['Flutter', 'Dart', 'USGS API'],
    estado: 'desarrollo',
  },
  {
    nombre: 'Condominios App',
    descripcion:
      'Administración multi-condominio: alícuotas, egresos, multas e incidencias con roles y auditoría. Esquema Postgres versionado en SQL y acceso directo con `pg`.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL'],
    estado: 'desarrollo',
  },
  {
    nombre: 'Homelab & automatización',
    descripcion:
      'Dashboard propio (Flask + Docker) para 8 equipos y sus contenedores, monitoreo con alertas a Telegram y flujos n8n + Evolution API para atención por WhatsApp.',
    stack: ['Flask', 'Docker', 'n8n', 'Evolution API'],
    estado: 'desarrollo',
  },
  {
    nombre: 'hl-engine',
    descripcion:
      'Bot de trading en Hyperliquid (Python 3.13) con estrategias EMA/ADX, backtests de un año y ejecución con control de riesgo. Indicadores y estrategias Pine Script v6 en paralelo.',
    stack: ['Python', 'Hyperliquid API', 'Pine Script'],
    estado: 'desarrollo',
  },
];
