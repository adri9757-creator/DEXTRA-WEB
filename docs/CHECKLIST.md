# Fases 1–4: cambios, checklist y datos pendientes

Rama: `fix/fase-legal-seguridad` · Fecha: noviembre de 2026 · Sin desplegar.

## Resultados de verificación (local, `npm run preview`)

| Prueba | Antes (producción) | Después |
|---|---|---|
| Lighthouse móvil: Rendimiento | 55 (TBT 5,2 s) | ~80 en local sin compresión (Vercel comprime: se espera más) |
| Lighthouse: Accesibilidad / Buenas prácticas / SEO | 97 / 79 / 100 | 100 / 100 / 100 |
| axe-core WCAG 2.2 A/AA (16 páginas) | no medido | 0 infracciones |
| JS inicial (gzip) | 185 KB | 73 KB |
| Imágenes | ~17 MB PNG | ~0,6 MB WebP |
| Peticiones a terceros antes del consentimiento | CookieScript, Elfsight ×4, Google Fonts | 0 |
| Tests automáticos | 1 (vacío) | 27 |

Limitación: Lighthouse se ejecutó contra el servidor local, que no comprime. El JSON-LD de Elfsight y la función `/api/contact` solo se pueden comprobar del todo en un *preview* de Vercel.

---

## Checklist legal

- [x] **Aviso legal (LSSI-CE art. 10)**: titular, NIF, domicilio, correo, teléfono, colegio, n.º de colegiado y titulación. Añadidas las normas profesionales con enlaces (abogacia.es, icav.es) y el seguro de RC (Ley 17/2009, art. 22) con marcadores.
- [ ] Datos de la SLP si se constituye (CIF, Registro Mercantil, Registro de Sociedades Profesionales) → `[POR_CONFIRMAR]`.
- [x] **Política de privacidad (RGPD arts. 13–14)**: responsable, finalidades, bases jurídicas, conservación, destinatarios, encargados (Vercel, Resend, correo, Cal.eu), transferencias con SCC, derechos y reclamación ante la AEPD.
- [x] **Formulario**: casilla no premarcada, primera capa de información (art. 11 LOPDGDD), enlace a la política y aviso para no incluir datos sensibles.
- [x] **Política de cookies** con el inventario real: gestor propio (`dextra_consent`), Google Maps y Elfsight. Cal.eu, WhatsApp y Google solo son enlaces. CookieScript retirado (y su cookie se borra).
- [x] **Gestor de consentimiento (guía AEPD)**: nada de terceros antes de consentir, Aceptar/Rechazar/Configurar con idéntico estilo, granular por servicio, sin muro de cookies, revocable desde el pie («Configurar cookies») y caducidad a los 12 meses.
- [x] **Una sola página de cookies**: `/politica-cookies` → redirección 308 a `/cookies`.
- [x] **Condiciones**: precio con IVA (importe pendiente), prepago, desistimiento de 14 días con modelo de formulario, pérdida del derecho conforme al art. 103.a TRLGDCU, fuero del consumidor, obligación de medios y quejas.
- [x] **Casos**: avisos de anonimización y de que los resultados no se garantizan; eliminadas las notas internas publicadas y el párrafo de otro caso pegado en «Arraigo»; «Casos de éxito» → «Casos»; CTA sin promesa de resultado.
- [x] **Reseñas inventadas** eliminadas (`src/app/api/google-reviews`).
- [x] Sin newsletter ni comunicaciones comerciales (la política lo declara).

## Checklist de seguridad

- [x] HTTPS + HSTS, CSP restrictiva (solo los dominios de Elfsight y Google necesarios), `X-Frame-Options: DENY`, `frame-ancestors 'none'`, `nosniff`, `Referrer-Policy`, `Permissions-Policy` y COOP.
- [x] Formulario: validación con el mismo esquema en cliente y servidor (zod), saneado (control, invisibles y bidi), escape HTML en el correo, honeypot, tiempo mínimo, límite por IP, verificación de `Origin` y `Content-Type`, límite de tamaño y sin datos personales en los logs.
- [x] La clave de Resend solo vive en el servidor; desactivado por defecto (`CONTACT_FORM_ENABLED`).
- [x] Dependencias: de 49 a 7 en producción; **0 vulnerabilidades en producción**. Vite 8, Vitest 5 y React Router 7.
- [x] `/seguridad` y `/.well-known/security.txt` (RFC 9116, con `Expires` renovado en cada build).
- [x] Servidor de desarrollo solo en `localhost` y sin *sourcemaps* en producción.
- [ ] Regla de *rate limiting* en el firewall de Vercel (ver DESPLIEGUE.md).

## Checklist de SEO y rendimiento

- [x] HTML estático por ruta con `title`, `description`, `canonical`, Open Graph y Twitter (23 rutas, `src/config/routes.json`).
- [x] `sitemap.xml`, `robots.txt` y 404 real (estado HTTP 404 y `noindex`).
- [x] JSON-LD `LegalService` con los datos públicos; se elimina el `Product` de Elfsight.
- [x] Imagen OG real de 1200×630 (`public/og-image.jpg`).
- [x] Fuentes autoalojadas (sin Google Fonts), imágenes WebP con dimensiones y `lazy`, rutas cargadas bajo demanda y fuera framer-motion, react-query y ~45 componentes sin uso.

## Checklist de accesibilidad (WCAG 2.1 AA / EN 301 549)

- [x] Enlace «Saltar al contenido», foco visible en todo el sitio y foco al contenido al cambiar de página.
- [x] Etiquetas asociadas, `aria-invalid` y `aria-describedby` en los errores, estado anunciado con `aria-live`.
- [x] Menú con `aria-expanded`, desplegable de Áreas usable con teclado y Escape.
- [x] Contraste: naranja de marca ajustado de `25 100% 50%` (2,9:1) a `25 100% 38%` (4,7:1); texto secundario a 40 %. El tono original se conserva como `--brand` para decoración.
- [x] `alt=""` en imágenes decorativas e iconos ocultos a lectores de pantalla.
- [x] Respeta «reducir movimiento».
- [ ] Prueba con lector de pantalla real (VoiceOver/NVDA): recomendada, no realizada.

---

## Datos pendientes de confirmar (`[POR_CONFIRMAR]`)

Búscalos con `grep -rn "POR_CONFIRMAR" src`.

### Verificación final antes de publicar

- [ ] **WhatsApp 624 164 536**: confirmado como número válido del despacho. Antes de publicar, enviar un mensaje de prueba desde un botón de la web y comprobar que llega al teléfono del despacho.
- [ ] **Precio en Cal.eu**: la web no muestra ningún importe. Comprobar que la página de reserva de Cal.eu tampoco muestra un precio antiguo (por ejemplo, 50 €) o que muestra el precio vigente con IVA incluido.

### Datos aún sin confirmar

| Dónde | Qué falta |
|---|---|
| `src/config/site.ts` | URL directa de la ficha de Google Business (hoy es una búsqueda) y URLs de LinkedIn e Instagram (ocultas mientras estén vacías). |
| Aviso legal | Aseguradora y ámbito del seguro de RC; datos de la SLP si se constituye. |
| Privacidad | DPD (sí/no); conservación concreta de los datos de clientes; proveedor del correo y sus garantías; ubicación y garantías de Cal.eu; DPA de Vercel; firma o aceptación de cada contrato de encargo (art. 28 RGPD). |
| Privacidad / Resend | Revisión y aceptación del DPA de Resend antes de activar el formulario. |
| Condiciones | Casilla de renuncia al desistimiento en Cal.eu; proporcionalidad de la retención por inasistencia. |
| Condiciones | Recargos por medio de pago: la frase se ha eliminado hasta confirmar si se cobran. |
| Condiciones | Hojas de reclamaciones y sistemas de resolución de conflictos: la frase se ha eliminado hasta confirmar si existen. |
| Todos los casos | Confirmar autorización del cliente o que no es identificable (p. ej., «familia latinoamericana con menores, 2024»). |

### Resuelto con texto provisional (noviembre de 2026)

- Precio de la consulta: sin importe; se informa antes de la reserva, IVA incluido. Consulta presencial: «precio a consultar». No hay consulta inicial gratuita.
- Medios de pago: efectivo y transferencia bancaria, con nota sobre los límites legales al pago en efectivo.
- Penal: «En la primera consulta te facilitamos un presupuesto personalizado según tu caso».
- Caso Arraigo: eliminados el párrafo incorrecto y la frase «Trabajamos en tres ejes».
- Conservación de consultas, reservas y registros del servidor: texto genérico aprobado.
- Encargados: Resend, Cal.eu y Elfsight descritos por su función; duración de Elfsight «según su política».

## Afirmaciones que conviene revisar (no las he cambiado)

- «Expertos en normativa migratoria, con **cientos de expedientes tramitados con éxito**» (Inicio, Equipo): es verificable; debe poder acreditarse.
- «Nuestro equipo **acude inmediatamente**…» (FAQ penal): es un compromiso de disponibilidad.
- «Preferimos calidad a cantidad, y **eso se nota en los resultados**» (Equipo).
- «Especialistas» y «especializados»: en España no existe un título oficial de especialista para la abogacía; valora si mantenerlo.

Cambiado por implicar promesa de resultado: «En Dextra **recuperamos** lo que es tuyo» → «te ayudamos a **reclamar** lo que es tuyo».

## Otros avisos

- Las imágenes estaban **descargadas a iCloud** (no en disco) y por eso git las veía como borradas. Las nuevas WebP se generaron desde las copias de git. Recomendación: no tener el repositorio dentro de una carpeta sincronizada con iCloud (Escritorio/Documentos).
- El repositorio tiene una referencia rota `refs/heads/main 2` (un duplicado de iCloud) que hace fallar `git fetch`. Se puede borrar con `git update-ref -d "refs/heads/main 2"` tras comprobarlo.
- Archivos sin seguimiento que no he tocado: `package-lock 2.json` y `.windsurf/`.
- Se retiró `twitter:site=@DextraLawFirm` porque no he podido verificar que la cuenta exista.
