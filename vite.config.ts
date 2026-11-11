import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vitest/config';
import { loadEnv } from 'vite';
import type { Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { normalizeBasePath, resolvePage } from './src/lib/routing.ts';

function staticPageDevelopment(deploymentBase: string): Plugin {
  let outputDirectory = '';
  return {
    name: 'karave-static-pages',
    configResolved(config) {
      outputDirectory = resolve(config.root, config.build.outDir);
    },
    configureServer(server) {
      server.middlewares.use((request, _response, next) => {
        const url = new URL(request.url || '/', 'http://development.invalid');
        if (deploymentBase !== '/' && !url.pathname.startsWith(deploymentBase)) return next();
        const relativePath =
          deploymentBase === '/' ? url.pathname : `/${url.pathname.slice(deploymentBase.length)}`;
        const route = resolvePage(relativePath);
        if (
          (request.method === 'GET' || request.method === 'HEAD') &&
          (route.page || route.retired || route.alias)
        ) {
          request.url = `${deploymentBase}index.html${url.search}`;
        }
        next();
      });
    },
    configurePreviewServer(server) {
      return () => {
        server.middlewares.use((request, response, next) => {
          const url = new URL(request.url || '/', 'http://preview.invalid');
          if (url.pathname.endsWith('.html')) return next();
          // Static files and directory indexes have already been handled by Vite.
          // Unknown HTML requests must keep a real 404 status, as on GitHub Pages.
          if (
            (request.method === 'GET' || request.method === 'HEAD') &&
            request.headers.accept?.includes('text/html')
          ) {
            response.statusCode = 404;
            response.setHeader('Content-Type', 'text/html; charset=utf-8');
            response.end(
              request.method === 'HEAD' ? '' : readFileSync(resolve(outputDirectory, '404.html')),
            );
            return;
          }
          next();
        });
      };
    },
  };
}

export default defineConfig(({ isSsrBuild, mode }) => {
  const environment = loadEnv(mode, process.cwd(), ['SITE_', 'GOOGLE_SITE_VERIFICATION']);
  const deploymentBase = normalizeBasePath(environment.SITE_BASE_PATH || '/');
  return {
    plugins: [react(), tailwindcss(), staticPageDevelopment(deploymentBase)],
    appType: 'mpa',
    base: deploymentBase,
    publicDir: isSsrBuild ? false : 'public',
    define: {
      'import.meta.env.VITE_SITE_URL': JSON.stringify(
        environment.SITE_URL || 'https://nammakarave.com',
      ),
      'import.meta.env.VITE_BUILD_YEAR': JSON.stringify(String(new Date().getFullYear())),
      'import.meta.env.VITE_GOOGLE_SITE_VERIFICATION': JSON.stringify(
        environment.GOOGLE_SITE_VERIFICATION || '',
      ),
    },
    build: {
      target: 'es2022',
      sourcemap: false,
      chunkSizeWarningLimit: 350,
      manifest: !isSsrBuild,
    },
    test: {
      environment: 'jsdom',
      setupFiles: ['./src/test-setup.ts'],
      include: ['src/**/*.test.{ts,tsx}'],
      clearMocks: true,
    },
  };
});
