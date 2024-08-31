import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import eslintPlugin, {Options} from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin({
    include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.js', 'src/**/*.jsx'],
  } as Options)],
})
