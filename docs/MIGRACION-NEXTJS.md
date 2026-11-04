# ¿Migrar a Next.js? Estimación de esfuerzo, riesgos y beneficios

Tras las fases 1–4, la web en Vite ya tiene metadatos por página, sitemap, 404 real, cabeceras de seguridad, formulario con servidor y JS inicial de 73 KB. Lo que **sigue faltando** por ser una SPA es que el **contenido** de cada página (no solo el `<head>`) llegue en el HTML: hoy el texto se pinta con JavaScript.

## Qué aportaría Next.js (App Router, generación estática)

| Beneficio | Impacto real hoy |
|---|---|
| Contenido en el HTML (SSG): Google y otros buscadores lo leen sin ejecutar JS | **Medio-alto** para SEO local y para LCP en móviles lentos |
| `next/image` (AVIF/WebP responsive automáticos) | Medio: ya hay WebP, faltan tamaños por dispositivo |
| Metadata API, `sitemap.ts` y `robots.ts` nativos | Bajo: ya resuelto con `routes.json` y `build-seo.mjs` |
| Route Handlers para el formulario | Nulo: `api/contact.ts` ya funciona igual en Vercel |
| Blog en MDX o CMS con ISR | Medio si vas a publicar con frecuencia |

## Esfuerzo estimado

| Tarea | Días |
|---|---|
| Esqueleto App Router, Tailwind, fuentes con `next/font`, layout (cabecera, pie, gestor de cookies como Client Components) | 0,5–1 |
| Portar 23 páginas (casi todo JSX estático; los cambios son `Link` y `"use client"` donde hay estado) | 1–1,5 |
| Formulario y función: reutilizar `contact-schema.ts` y `handleContact` en `app/api/contact/route.ts` | 0,25 |
| Metadatos por página desde `routes.json`, JSON-LD y sitemap | 0,5 |
| CSP compatible con Next (ver riesgos) | 0,5–1 |
| Pruebas: axe, Lighthouse, teclado, enlaces y redirecciones, preview en Vercel | 1 |
| **Total** | **≈ 4–5 días** de desarrollo y revisión |

## Riesgos

1. **CSP**: Next.js inyecta *scripts* en línea. Una CSP estricta requiere *nonces* generados en *middleware*, lo que obliga a renderizar cada página en el servidor (se pierde el HTML estático y aumentan coste y latencia). La alternativa es permitir `'unsafe-inline'` en `script-src`, que **rebaja la seguridad** respecto a la CSP actual.
2. **Regresiones de URL o SEO**: hay que conservar exactamente las 23 rutas (hay un test que las compara) y las redirecciones.
3. **Mantenimiento**: más complejidad (componentes de servidor y de cliente, caché) para editar contenido.
4. **Doble trabajo**: cualquier cambio de diseño hecho en Vite antes de migrar habría que portarlo.

## Alternativa intermedia (recomendada como siguiente paso)

**Prerrenderizar la SPA actual** con `vite-react-ssg` u otra herramienta equivalente. Genera el HTML completo de cada ruta en el build sin cambiar de framework.

- Esfuerzo: **≈ 1–1,5 días**.
- Obtienes el beneficio principal (contenido en el HTML) y mantienes la CSP estricta actual (sin *scripts* en línea), `vercel.json` y todo lo hecho.
- Riesgo: algunos componentes que leen `window` o `localStorage` al montar (gestor de cookies, animaciones) deben protegerse para el prerenderizado. Son pocos y ya están aislados.

## Recomendación

- **Si la web va a seguir siendo de contenido estable** (páginas de servicio, casos, algún artículo): no migrar ahora. Haz primero el prerrenderizado (1–1,5 días) y mide en Search Console durante 4–6 semanas.
- **Si vas a crecer en blog o contenido con CMS**, o a añadir áreas privadas o de clientes: Next.js compensa. Planifícalo como proyecto propio (≈ 1 semana), tras cerrar los `[POR_CONFIRMAR]` y con la CSP con *nonce* asumida.
