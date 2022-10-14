import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/mindows-live-messenger/',
  plugins: [
    vue(),
  ],
});
