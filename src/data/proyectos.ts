export type Estado = 'linea' | 'desarrollo';

export interface Proyecto {
  nombre: string;
  descripcion: string;
  stack: string[];
  url?: string;
  estado: Estado;
}

// Estado verificado por HTTP (check automatizado, no a ojo)
export const proyectos: Proyecto[] = [
  {
    nombre: 'YoSoy222',
    descripcion:
      'Tienda y catálogo en línea con analítica propia (Supabase + GA4) y despliegue automatizado vía GitHub Actions.',
    stack: ['Astro', 'Supabase', 'Cloudflare', 'GA4'],
    url: 'https://yosoy222.com',
    estado: 'linea',
  },
  {
    nombre: 'Interliga — Futbol Camiseta Pasión',
    descripcion:
      'Plataforma de pronósticos deportivos con ranking, validación anti-trampa y panel de resultados.',
    stack: ['Astro', 'Supabase', 'GitHub Pages'],
    url: 'https://futbolcamisetapasion.com',
    estado: 'linea',
  },
  {
    nombre: 'QR Dinámico',
    descripcion:
      'Generador de códigos QR dinámicos con panel de administración, redirecciones editables y métricas de escaneo.',
    stack: ['Next.js', 'PostgreSQL', 'Docker', 'Cloudflare'],
    url: 'https://qrcoder.win',
    estado: 'linea',
  },
  {
    nombre: 'Adima Design LLC',
    descripcion:
      'Sitio corporativo para estudio de diseño en Hollywood, FL. Identidad visual, cotización y entrega llave en mano.',
    stack: ['Astro', 'Diseño UI', 'GitHub Pages'],
    url: 'https://juancito8812.github.io/adima-design/',
    estado: 'linea',
  },
  {
    nombre: 'Grupo LA — Construcción y Remodelaciones',
    descripcion:
      'Sitio de obra y remodelación: portafolio de proyectos, servicios y captación de clientes.',
    stack: ['Astro', 'SEO', 'GitHub Pages'],
    url: 'https://juancito8812.github.io/grupo-la-web/',
    estado: 'linea',
  },
  {
    nombre: 'Tasa del Día',
    descripcion:
      'App móvil de tasa BCV con conversor Bs/USD en tiempo real. Distribución Android (Play y Galaxy Store).',
    stack: ['React Native', 'Expo', 'API BCV'],
    estado: 'desarrollo',
  },
  {
    nombre: 'Condominios App',
    descripcion:
      'Administración multi-condominio: alícuotas, egresos, comunicados e incidencias con roles y auditoría.',
    stack: ['React', 'Supabase', 'RLS'],
    estado: 'desarrollo',
  },
  {
    nombre: 'Automatización WhatsApp / Telegram',
    descripcion:
      'Flujos n8n con Evolution API para atención, reportes y alertas de infraestructura en tiempo real.',
    stack: ['n8n', 'Evolution API', 'Uptime Kuma', 'Docker'],
    estado: 'desarrollo',
  },
];
