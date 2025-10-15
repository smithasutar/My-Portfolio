// src/env.d.ts
interface ImportMetaEnv {
    readonly VITE_EMAIL: string;
    readonly VITE_PUBLIC_KEY: string
    readonly VITE_TEMPLATE_ID: string
    readonly VITE_SERVICE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
