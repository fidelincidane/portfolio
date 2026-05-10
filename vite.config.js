import { defineConfig } from 'vite'
import path from 'path'

export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        loadPaths: [path.resolve(__dirname, 'src/scss')],
      },
    },
  },
})