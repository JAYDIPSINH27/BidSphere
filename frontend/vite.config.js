import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: 'index.html',
    },
  },
  define: {
    global: 'window',
  },
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/,
    exclude: [],
  },
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
  plugins: [react(), eslint()],
  server: {
    host: '0.0.0.0',
  },
  test: {
    globals: true,
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@core': path.resolve(__dirname, './src/core'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@atoms': path.resolve(__dirname, './src/components/atoms'),
      '@molecules': path.resolve(__dirname, './src/components/molecules'),
      '@organisms': path.resolve(__dirname, './src/components/organisms'),
      '@pages': path.resolve(__dirname, './src/components/pages'),
      '@templates': path.resolve(__dirname, './src/components/templates'),
      '@utils': path.resolve(__dirname, './src/components/utils'),
    },
  },
});
