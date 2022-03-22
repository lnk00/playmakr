import { defineConfig } from 'vite';
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  server: {
    port: 8080
  },
  plugins: [
    ...VitePluginNode({
      adapter: 'koa',
      appPath: './app.ts',
      exportName: 'playmakrApp',
      tsCompiler: 'esbuild',
    })
  ]
});