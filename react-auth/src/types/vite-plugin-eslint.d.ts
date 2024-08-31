import { Plugin } from 'vite';

declare module 'vite-plugin-eslint' {
  interface Options {
    include?: string | string[];
    exclude?: string | string[];
    cache?: boolean;
    failOnWarning?: boolean;
    failOnError?: boolean;
    throwOnWarning?: boolean;
    throwOnError?: boolean;
  }

  export default function eslintPlugin(options?: Options): Plugin;
}
