/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Dominio canónico del sitio, sin barra final. Es público (prefijo VITE_). */
  readonly VITE_SITE_URL?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
