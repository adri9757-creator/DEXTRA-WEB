# Despliegue en Vercel

La web es una SPA de **Vite + React** con una función serverless (`api/contact.ts`) para el formulario. Vercel detecta ambas cosas sin configuración adicional; `vercel.json` fija cabeceras de seguridad, URLs limpias, región y redirecciones.

## 1. Requisitos locales

```bash
npm ci
npm run typecheck && npm run lint && npm test
npm run build      # vite build + scripts/build-seo.mjs
npm run preview    # sirve dist/ como Vercel (cabeceras, CSP, 404) en http://localhost:4173
```

`npm run preview` **no** ejecuta `/api/contact`. Para probar la función en local: `npx vercel dev` (requiere vincular el proyecto con `npx vercel link`).

## 2. Variables de entorno (Vercel → Project → Settings → Environment Variables)

| Variable | Ámbito | Valor |
|---|---|---|
| `VITE_SITE_URL` | Production, Preview | `https://dextralawfirm.com` (sin barra final) |
| `CONTACT_FORM_ENABLED` | Production | `false` hasta completar el paso 4; después `true` |
| `RESEND_API_KEY` | Production (marcar como *Sensitive*) | Clave de Resend con permiso solo de envío |
| `CONTACT_TO_EMAIL` | Production | `info@dextralawfirm.com` |
| `CONTACT_FROM_EMAIL` | Production | p. ej. `Web Dextra Law Firm <web@dextralawfirm.com>` |
| `ALLOWED_ORIGINS` | Opcional | Orígenes extra separados por comas (p. ej. `https://dextra-web-one.vercel.app` mientras no esté el dominio propio) |

Ninguna variable secreta lleva el prefijo `VITE_`: las que lo llevan se incrustan en el JavaScript público.

## 3. Desplegar la rama para revisión (sin tocar producción)

1. Sube la rama `fix/fase-legal-seguridad` a GitHub.
2. Vercel crea automáticamente un **Preview Deployment** con su propia URL. Producción (`main`) no cambia.
3. Revisa el preview. En previews, la función acepta el origen `https://$VERCEL_URL` automáticamente.
4. Cuando lo apruebes: merge a `main` → Vercel despliega a producción.

## 4. Activar el formulario (cuando lo autorices)

1. Crea la cuenta en [resend.com](https://resend.com).
2. *Domains → Add domain* → `dextralawfirm.com` → **Region: `eu-west-1` (Ireland)**. La región se elige al dar de alta el dominio y no se puede cambiar después.
3. Añade en el DNS los registros que indique Resend (SPF, DKIM y, recomendado, DMARC) y espera a que el dominio figure como *Verified*.
4. Revisa y acepta el **DPA de Resend** (Settings → Legal/Compliance) y completa los `[POR_CONFIRMAR]` correspondientes en la Política de privacidad.
5. Crea una API key con permiso *Sending access* restringido a ese dominio.
6. Configura las variables del paso 2 y cambia `CONTACT_FORM_ENABLED` a `true`. Vuelve a desplegar.
7. Prueba un envío real y comprueba que llega a `CONTACT_TO_EMAIL` con *Responder a* = el correo del remitente.

Mientras `CONTACT_FORM_ENABLED` no sea `true` (o falte la clave o alguna dirección), la función responde `503` y la web muestra el correo y el teléfono como alternativa. **No se envía nada.**

## 5. Dominio propio

1. Vercel → Settings → Domains → añade `dextralawfirm.com` y `www.dextralawfirm.com` (redirige `www` al dominio raíz).
2. Configura el DNS según indique Vercel.
3. Cuando el dominio funcione, redirige el subdominio `vercel.app` al dominio propio para evitar contenido duplicado. Añade a `redirects` en `vercel.json`:

```json
{
  "source": "/:path*",
  "has": [{ "type": "host", "value": "dextra-web-one.vercel.app" }],
  "destination": "https://dextralawfirm.com/:path*",
  "permanent": true
}
```

**No lo añadas antes** de que el dominio esté activo: dejaría la web inaccesible.

4. Da de alta el sitio en Google Search Console y envía `https://dextralawfirm.com/sitemap.xml`.

## 6. Recomendado tras el despliegue

- **Límite global de envíos**: el límite por IP de `api/contact.ts` es por instancia. Añade en Vercel → Firewall una regla de *Rate limiting* para `POST /api/contact` (p. ej. 5 peticiones / 10 min por IP).
- **Elfsight**: en el editor del widget, desactiva *Rich snippets*. La web ya elimina el JSON-LD `Product` que inyecta, pero así no llega a generarse. Valora quitar el enlace «Free Google Reviews Widget» (requiere plan de pago).
- **Comprobar cabeceras**: [securityheaders.com](https://securityheaders.com) y [observatory.mozilla.org](https://developer.mozilla.org/en-US/observatory).
- **HSTS preload**: la cabecera ya incluye `preload`. Solo envía el dominio a [hstspreload.org](https://hstspreload.org) cuando todos los subdominios funcionen con HTTPS.
- **Dependencias**: `npm audit` mensual. A fecha de este cambio quedan 12 avisos *moderados* en herramientas de desarrollo (cadena de `eslint` → `minimatch`) que no llegan a producción.
