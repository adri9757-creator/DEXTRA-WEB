import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import seo from "@/config/routes.json";
import { SITE_URL } from "@/config/site";

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  type?: string;
}

const byPath = new Map<string, RouteMeta>(seo.routes.map((r) => [r.path, r]));

export function getRouteMeta(pathname: string): RouteMeta | null {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, "") : pathname;
  return byPath.get(clean) ?? null;
}

function setMeta(selector: string, attr: "content" | "href", value: string) {
  const el = document.head.querySelector<HTMLMetaElement | HTMLLinkElement>(selector);
  if (el) el.setAttribute(attr, value);
}

/**
 * Mantiene título, descripción, canonical y Open Graph al navegar dentro de la
 * SPA. La primera carga ya llega con estos valores en el HTML estático
 * generado por scripts/build-seo.mjs (lo que leen buscadores y redes sociales).
 */
export function usePageMeta(): void {
  const { pathname } = useLocation();
  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const title = meta?.title ?? seo.notFound.title;
    const description = meta?.description ?? seo.notFound.description;
    const url = `${SITE_URL}${meta?.path === "/" ? "/" : meta?.path ?? pathname}`;

    document.title = title;
    setMeta('meta[name="description"]', "content", description);
    setMeta('meta[property="og:title"]', "content", title);
    setMeta('meta[property="og:description"]', "content", description);
    setMeta('meta[property="og:url"]', "content", url);
    setMeta('meta[name="twitter:title"]', "content", title);
    setMeta('meta[name="twitter:description"]', "content", description);
    setMeta('link[rel="canonical"]', "href", url);

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!meta) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = "noindex";
    } else if (robots) {
      robots.content = "index, follow";
    }
  }, [pathname]);
}
