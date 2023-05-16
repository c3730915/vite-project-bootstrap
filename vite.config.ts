import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  '@': fileURLToPath(new URL('./src', import.meta.url)),
  // 增加~bootstrap
  '~bootstrap': './node_modules/bootstrap',
  '~bootstrap2': path.resolve(__dirname, 'node_modules/bootstrap'),

})
