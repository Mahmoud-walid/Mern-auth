declare module 'vite-plugin-eslint' {
  import { Plugin } from 'vite';
  interface Options {
    include?: string[];
  }
  function eslintPlugin(options?: Options): Plugin;
  export default eslintPlugin;
}
