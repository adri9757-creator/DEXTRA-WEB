# Dextra Law Firm – Web

Sitio web del despacho Dextra Law Firm (Valencia): derecho penal, extranjería y civil.

**Stack:** Vite 8 + React 18 + React Router 7 + Tailwind CSS 3, desplegado en Vercel. El formulario de contacto usa una función serverless (`api/contact.ts`) y Resend.

```bash
npm ci
npm run dev        # desarrollo en http://localhost:8080
npm test           # tests (vitest)
npm run build      # build + páginas SEO estáticas, sitemap, robots y security.txt
npm run preview    # revisar dist/ con las cabeceras de Vercel en http://localhost:4173
```

## Dónde está cada cosa

| Qué | Dónde |
|---|---|
| Datos de contacto, WhatsApp, enlaces | `src/config/site.ts`, `src/config/business.json` |
| Título y descripción SEO de cada página | `src/config/routes.json` |
| Gestor de cookies y servicios de terceros | `src/lib/consent.ts`, `src/components/consent/` |
| Formulario: validación compartida y función de envío | `src/lib/contact-schema.ts`, `api/contact.ts` |
| Cabeceras de seguridad, redirecciones y región | `vercel.json` |
| Textos legales | `src/pages/AvisoLegal.tsx`, `Privacidad.tsx`, `Cookies.tsx`, `Condiciones.tsx`, `Seguridad.tsx` |

## Documentación

- [docs/DESPLIEGUE.md](docs/DESPLIEGUE.md): variables de entorno, activación del formulario y dominio.
- [docs/CHECKLIST.md](docs/CHECKLIST.md): cambios, checklist legal, de seguridad, SEO y accesibilidad, y datos `[POR_CONFIRMAR]`.
- [docs/MIGRACION-NEXTJS.md](docs/MIGRACION-NEXTJS.md): estimación de migrar a Next.js.
- [GUIA-BLOGS.md](GUIA-BLOGS.md): guía para publicar artículos.

Al añadir una página: crea el componente, añade su `<Route>` en `src/App.tsx` y su entrada en `src/config/routes.json` (un test comprueba que coinciden).
