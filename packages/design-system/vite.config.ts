import { defineConfig } from 'vite';
import path from 'node:path';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin({ identifiers: 'short' }),
    dts({
      insertTypesEntry: true,
      exclude: ['node_modules/**', '**/vite-env.d.ts'],
      clearPureImport: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@casavo/worms-ui',
      fileName: (format) => `index.${format}.js`,
      formats: ['es', 'cjs'],
    },
    sourcemap: true,
    target: 'esnext',
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
