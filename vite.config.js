import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path';
import manifestSRI from 'vite-plugin-manifest-sri';

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [

          vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
         }),
        manifestSRI(),

    //  vue({ script: { defineModel: true, propsDestructure: true }})

  ],
  resolve: {

    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
      '~': path.join(__dirname, '/node_modules/'),
    },
 

  },

  build: { chunkSizeWarningLimit: 1600, },

    rollupOptions: {
      output: {
        globals: {
          vue: 'Vue'
        }
      }
  },

})
