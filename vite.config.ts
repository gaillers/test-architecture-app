import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(), 
    TanStackRouterVite(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@core': path.resolve(__dirname, 'src/core'),
      '@services': path.resolve(__dirname, 'src/core/services'),
      '@types': path.resolve(__dirname, 'src/core/types'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@hooks': path.resolve(__dirname, 'src/shared/hooks'),
      '@components': path.resolve(__dirname, 'src/shared/components'),
      '@ui': path.resolve(__dirname, 'src/shared/ui'),
      '@utils': path.resolve(__dirname, 'src/shared/utils'),
    },
  },
  server: {
    host: 'localhost',
    port: 3030,
    hmr: {
      overlay: false, 
    },
  },
})
