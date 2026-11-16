/**
 * Demo pública del software de administración de condominios.
 *
 * Regla: solo se publican las cuentas de la junta y de un vecino. La cuenta de
 * administrador nunca se expone en la web (tiene permisos sobre todo el edificio).
 * El edificio y sus datos son ficticios: no corresponden a ningún cliente real.
 */
export const demoCondominios = {
  nombre: 'Residencial Los Samanes',
  url: 'https://condominios-demo.serverjr.uk',
  descripcion:
    'Un edificio completo funcionando de verdad: cobranza con recibos y morosidad, estado de cuenta por apartamento, comunicados, reservas de áreas comunes e incidencias con seguimiento. Los datos son de prueba, puedes tocar todo sin miedo.',
  stack: ['Next.js 15', 'PostgreSQL + RLS', 'Docker', 'Caddy'],
  cuentas: [
    {
      rol: 'Junta de condominio',
      detalle: 'Ve todo el edificio: cobranza, gastos, comunicados y reportes.',
      email: 'directivo@lossamanes.com.ve',
      clave: 'Samanes2026!',
    },
    {
      rol: 'Vecino · apto 5-2',
      detalle: 'Lo que ve un residente: su estado de cuenta, reservas e incidencias.',
      email: 'inquilino-5-2@lossamanes.com.ve',
      clave: 'Samanes2026!',
    },
  ],
} as const;
