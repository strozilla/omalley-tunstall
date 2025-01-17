import { defineConfig } from 'vite';
import path from 'path';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  plugins: [svgLoader()],
  server: {
    host: "omalleytunstall.test", // Ensure the server host matches your development URL
    port: 5175,
    cors: true, // Enables CORS for local development
    hmr: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "theme/assets"),
    },
  },
  build: {
    manifest: true,
    outDir: "theme/assets/dist",
    assetsDir: ".",
    rollupOptions: {
      input: "theme/assets/main.js",
    },
  },
});
