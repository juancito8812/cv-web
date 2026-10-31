export const perfil = {
  nombre: 'Juan Raudel Sanchez Payan',
  nombres: 'Juan Raudel',
  apellidos: 'Sanchez Payan',
  rol: 'Desarrollador Web Full-Stack & Automatización',
  ubicacion: 'Caracas, Venezuela · Remoto',
  tagline:
    'Construyo sitios y aplicaciones que ya están en producción: 4 proyectos en vivo (3 de clientes y un producto propio), apps Android publicadas y automatizaciones de WhatsApp. Nada de maquetas.',
  email: 'juanraudel170@gmail.com',
  whatsapp: '+58 412-934-0473',
  github: 'https://github.com/juancito8812',
  web: 'https://yosoy222.com',
  cvPdf: 'cv.pdf',
};

export const servicios = [
  {
    titulo: 'Desarrollo web a la medida',
    texto:
      'Sitios rápidos y estáticos (Astro) o aplicaciones con base de datos, panel y autenticación. Deploy automático en cada cambio.',
  },
  {
    titulo: 'Apps móviles',
    texto:
      'Aplicaciones Android con React Native / Expo y Flutter: tasa de cambio, tarot, alertas sísmicas. APK firmado y actualización automática desde GitHub Releases.',
  },
  {
    titulo: 'Automatización y bots',
    texto:
      'Flujos n8n + WhatsApp/Telegram: atención al cliente, reportes programados y alertas de servidores 24/7.',
  },
  {
    titulo: 'Infraestructura y despliegue',
    texto:
      'Servidores Linux, Docker, Cloudflare, backups y monitoreo con alertas. Sitios que no se caen solos.',
  },
  {
    titulo: 'Auditoría web y SEO técnico',
    texto:
      'Informe de 8 páginas con notas por área (diseño, accesibilidad, rendimiento, conversión y SEO), mediciones reales en móvil y escritorio, y plan de arreglos priorizado con el ahorro estimado de cada uno.',
  },
];

export const habilidades = [
  'Astro',
  'Next.js',
  'JavaScript / TypeScript',
  'React / React Native',
  'Flutter / Dart',
  'FastAPI',
  'Node.js',
  'Python',
  'Supabase / PostgreSQL',
  'Docker / Caddy',
  'n8n',
  'Cloudflare',
  'SEO técnico',
  'Git / GitHub Actions',
  'Linux (Debian)',
];

export const experiencia = [
  {
    puesto: 'Fundador y desarrollador — J Solución Tecnológica',
    periodo: '2023 — presente',
    puntos: [
      'Producto propio en producción: QR Dinámico (qrcoder.win), generador de QR con planes, redirecciones editables y métricas de escaneo. FastAPI + PostgreSQL en VPS con Docker y Caddy, 746 pruebas automatizadas.',
      'Apps Android propias publicadas como APK firmado con actualización automática por GitHub Releases: Tasa del Día, PsicoTarot y SismoVE.',
      'Operación de los productos: servidores Debian, Docker y Caddy, Cloudflare, backups y monitoreo con alertas 24/7.',
    ],
  },
  {
    puesto: 'Sitios y plataformas para clientes (freelance)',
    periodo: '2024 — presente',
    puntos: [
      'YoSoy222 (Venezuela): tienda PWA de 49 productos con analítica propia en Supabase + GA4, service worker con versionado de caché validado en CI y headers de seguridad en Cloudflare.',
      'Interliga — Futbol Camiseta Pasión: plataforma de pronósticos con registro, ranking en vivo, validación anti-trampa y Postgres con RLS por usuario.',
      'Adima Design LLC (EE. UU.): sitio corporativo en Astro desplegado en VPS con SSL propio detrás de Cloudflare, entrega llave en mano.',
      'Automatización de atención y reportes con n8n + WhatsApp/Telegram, y auditorías web con informe técnico priorizado por impacto.',
    ],
  },
];
