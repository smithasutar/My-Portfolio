// src/env.d.ts
interface ImportMetaEnv {
    readonly email: string;
    readonly pub_key: string
    readonly pub_temp: string
    readonly pub_name: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
