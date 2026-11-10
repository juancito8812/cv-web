# AGENTS.md — cv-web (J Solución Tecnológica + CV personal)

> Sitio de la agencia **J Solución Tecnológica** (home, servicios, proyectos, trabajo, contacto, legales)
> con el CV personal en `/cv`. Astro estático → GitHub Pages → dominio propio.

## 1. Stack y estructura

- Astro (build estático, 7 páginas). Sin framework de UI, sin datos remotos.
- `src/data/agencia.ts` — **fuente única** de la agencia: nombre, RIF, domicilio fiscal, email, WhatsApp, servicios.
  Lo que cambies ahí se propaga a home, footer y las 4 páginas legales en el siguiente build.
- `src/data/perfil.ts` — datos del CV personal (`/cv`) y del PDF.
- `public/cv.pdf` — PDF del CV; se regenera con CDP `printToPDF` contra `/cv`, no se edita a mano.
- `CNAME` = `jsolucionestegnologicas.com`. `astro.config.mjs` define `base` para que `/cv` funcione bajo el dominio.

## 2. Comandos

```bash
npm ci
npm run build          # dist/
npm run preview        # sirve dist/ para revisar local
```

## 3. Deploy

- Repo `juancito8812/cv-web`. `CNAME` = dominio propio sobre GitHub Pages.
- `.github/workflows/deploy.yml` **solo escucha `main`** (verificado 9-nov-2026): un push a `preview` NO publica.
  `.github/workflows/preview-build.yml` compila `preview` solo para validar (CI, sin deploy). Staging real
  para previews: `https://jsolucion.serverjr.uk` (nginx debianm700, noindex).
- Workflow `.github/workflows/deploy.yml` corre en cada push a `main`: build + publicar en Pages.
- Cloudflare delante (proxy + SSL strict). Tras un deploy, verificar en vivo:
  `curl -s https://jsolucionestegnologicas.com/legal/aviso-legal/ | grep -o 'P-001347077'`.
- Camino obligatorio del dueño: rama secundaria → push a `preview` → OK explícito → merge ff-only a `main`.

## 4. Datos fiscales y contacto (verificado 2026-11-09)

- Titular: **Juan Raudel Sánchez Payán** — RIF SENIAT `P-001347077` (persona natural).
- Domicilio fiscal: Av. Los Roques, Edif. Goaigoaza, Piso 8, Apto 5, Conjunto Residencial Villa Panamericana,
  Guarenas, Miranda, Zona Postal 1220.
- Se muestran en `/legal/aviso-legal/`, `/legal/privacidad/`, `/legal/terminos/`, `/legal/cookies/` y en el footer.
- Copia canónica de estos datos en Bitwarden: carpeta **Documentos fiscales** → *RIF SENIAT - Juan Raudel Sanchez Payan*.
- Email público del sitio: `contacto@jsolucionestegnologicas.com`. Entra por **Cloudflare Email Routing**
  (regla `contacto@` + catch-all) y reenvía a `juanraudel170@gmail.com`. El gmail personal **solo** aparece en `/cv`.
- Envío saliente: **Resend** con `from juan@jsolucionestegnologicas.com` (clave en `~/.secrets/jsolucion-mail.env`
  y en Bitwarden *ENV · J Solución Mail*). Brevo queda como respaldo.

## 5. Trampas

1. No pongas el gmail personal en `agencia.ts`: el sitio debe mostrar el correo de marca; el personal vive en `perfil.ts`.
2. Si cambias `CNAME` o `base`, revisa que `/cv` y `/cv.pdf` sigan resolviendo (son rutas con `base` propio).
3. Los textos legales leen `agencia.ts`; si `rif` queda vacío el sitio escribe "RIF en trámite" — no lo dejes vacío.
4. El CI fija Node 22.23.4 por un bug del toolcache; no "modernizar" la versión sin probar el workflow.
5. Verificar siempre la página real después del deploy; el CI verde no garantiza que el dominio sirvió el commit nuevo.
