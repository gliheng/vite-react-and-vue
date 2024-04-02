import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      include: 'src/vue-app/*.tsx'
    }),
    react({
      include: 'src/react-app/*.tsx'
    }),
  ],
})
