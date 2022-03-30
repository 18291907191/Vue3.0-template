import {
  defineConfig
 } from 'vite'
 import path from "path";
 import vue from '@vitejs/plugin-vue'

 // https://vitejs.dev/config/
 export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname,'src')
      },
      {
        find: 'views',
        replacement: path.resolve(__dirname, 'src/views')
      },
      {
        find: 'components',
        replacement: path.resolve(__dirname, 'src/components')
      },
      {
        find: 'utils',
        replacement: path.resolve(__dirname, 'src/utils')
      },
      {
        find: 'apis',
        replacement: path.resolve(__dirname, 'src/apis')
      }
    ]
  },
  plugins: [vue()],
 })