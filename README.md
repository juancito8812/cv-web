# cv-web — J Solución Tecnológica + CV personal

Astro estático: home, servicios, proyectos, trabajo, contacto y legales de la agencia, más el CV personal en `/cv`. Documentación completa en [`AGENTS.md`](AGENTS.md) — este README es el resumen para Anyone nueva en el repo.

## Comandos

```bash
npm ci
npm run build        # dist/
npm run preview      # revisar dist/ localmente
```

## Deploy

- Repo `juancito8812/cv-web`, GitHub Pages con `CNAME` = `jsolucionestegnologicas.com`.
- **Solo publica desde `main`** (`deploy.yml`). `preview-build.yml` compila `preview` para validar, sin deploy.
- Staging para previews: `https://jsolucion.serverjr.uk` (nginx debianm700, noindex).
- Después de cada merge a `main`, verificar en vivo: `curl -s https://jsolucionestegnologicas.com/legal/aviso-legal/ | grep -o 'P-001347077'`.

## Demo en vivo (home)

La home muestra la demo abierta de **administración de condominios** (`src/data/demo.ts`):
edificio ficticio "Residencial Los Samanes" corriendo en `https://condominios-demo.serverjr.uk`.
Regla dura: solo se publican las 2 cuentas de vista limitada (junta + vecino); la cuenta **admin nunca**
aparece en la web. La tarjeta "Condominios App" del listado de trabajo se retiró el 15-nov-2026 — queda
solo la demo en vivo. Detalles en [`AGENTS.md`](AGENTS.md) §6.

## Trampas rápidas

- Node fijado 22.23.4 en el CI (bug del toolcache): no "modernizar" sin probar el workflow.
- Datos fiscales display los leen de `src/data/agencia.ts`; el CV de `src/data/perfil.ts`. Sin datos remotos, sin backend.
- `public/cv.pdf` se regenera con CDP `printToPDF` contra `/cv`; no editar a mano.
