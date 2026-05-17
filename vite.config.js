import path from 'node:path';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import legacy from '@vitejs/plugin-legacy';
import critical from 'rollup-plugin-critical';
import dynamicImport from 'vite-plugin-dynamic-import';
import mkcert from 'vite-plugin-mkcert';
import ViteRestart from 'vite-plugin-restart';

//Import Critical URL
import { loadEnv } from 'vite';
const env = loadEnv('', process.cwd());

// https://vitejs.dev/config/
export default ({ command }) => ({
  base: command === 'serve' ? '' : '/dist/',
  publicDir: './assets/public',
  build: {
    emptyOutDir: true,
    manifest: true,
    outDir: './web/dist',
    rollupOptions: {
      input: {
        app: './assets/js/app.ts',
      },
    },
    sourcemap: true,
  },
  resolve: {
    alias: {
      '@templates': path.resolve('./templates'),
      '@assets': path.resolve('./assets'),
    },
  },
  plugins: [
    critical({
      criticalUrl: env.VITE_PRIMARY_SITE_URL,
      criticalBase: 'web/dist/criticalcss',
      criticalPages: [
        { uri: '/', template: '_pages/home/home' },
        { uri: '/404', template: '_pages/errorPages/404' },
      ],
      criticalConfig: {
        width: 1680,
        height: 1200,
        user: env.VITE_BASIC_AUTH_KEY,
        pass: env.VITE_BASIC_AUTH_KEY,
        request: {
          https: {
            rejectUnauthorized: false,
          },
        },
      },
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
    nodeResolve({
      modulePaths: [path.resolve('./node_modules')],
    }),
    ViteRestart({
      reload: ['./assets/**/*', './templates/**/*'],
    }),
    dynamicImport(),
    mkcert(),
  ],
  // Use this for Laravel Valet
  server: {
    fs: {
      strict: false,
    },
    host: '0.0.0.0',
    https: true,
    origin: 'https://localhost:3000',
    port: 3000,
    strictPort: true,
  },
});
