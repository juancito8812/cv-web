// J Solución Tecnológica — datos de la agencia (home). El CV personal vive en perfil.ts + /cv.

export const agencia = {
  nombre: 'J Solución Tecnológica',
  nombreCorto: 'J Solución',
  mark: 'JS',
  eyebrow: 'Web · Automatización · CCTV · Soporte',
  h1Linea1: 'J Solución',
  h1Linea2: 'Tecnológica',
  subhead: 'Agencia TI en Caracas: sitios y apps en producción, automatización de WhatsApp, cámaras con acceso remoto y soporte de servidores.',
  tagline:
    'Instalamos y mantenemos lo que tu negocio necesita para operar: la web, la automatización, las cámaras y los servidores. Lo entregamos funcionando en producción, no maquetas.',
  base: 'Caracas, Venezuela',
  alcance: 'Caracas · Remoto global',
  operacion: '24/7 monitoreo',
  email: 'contacto@jsolucionestegnologicas.com',
  whatsappDisplay: '+58 412-934-0473',
  whatsappNum: '584129340473',
  // --- Datos legales (aviso legal / privacidad) ---
  rif: 'P-001347077', // RIF SENIAT del titular (persona natural)
  domicilio: 'Av. Los Roques, Edif. Goaigoaza, Piso 8, Apto 5, Conjunto Residencial Villa Panamericana, Guarenas, Miranda, Zona Postal 1220',
  legalActualizado: '2026-11-09',
};

export const serviciosAgencia = [
  {
    icon: '▤',
    titulo: 'Desarrollo web',
    texto:
      'Sitios y aplicaciones a la medida: catálogos, tiendas, plataformas con panel y base de datos. Cada entrega se despliega automáticamente y queda en producción.',
  },
  {
    icon: '◆',
    titulo: 'Automatización n8n · WhatsApp',
    texto:
      'Atención y reportes automatizados sobre WhatsApp y Telegram: el mensaje del cliente se contesta solo, de día y de noche, y tú ves toda la conversación.',
  },
  {
    icon: '◎',
    titulo: 'Cámaras y CCTV',
    texto:
      'Diseño e instalación de sistemas de cámaras con acceso remoto desde tu teléfono: ve tu negocio o tu casa en vivo y revisa grabaciones desde cualquier parte.',
  },
  {
    icon: '⚙',
    titulo: 'Soporte TI y servidores',
    texto:
      'Mantenimiento de equipos y redes, servidores VPS con backups, monitoreo con alertas 24/7. Cuando algo falla, lo arreglamos.',
  },
];

export const agenciaStats = [
  { valor: String(4), etiqueta: 'Sitios en producción' },
  { valor: String(serviciosAgencia.length), etiqueta: 'Servicios core' },
  { valor: '3+', etiqueta: 'Clientes activos' },
  { valor: '24/7', etiqueta: 'Monitoreo' },
];
