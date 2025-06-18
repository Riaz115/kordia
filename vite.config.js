import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@Components": "/src/Components",
      // "@": "/src",
      "@pages": "/src/pages",
    },
  },
  server: {
    host: true,
  },
  build: {
    outDir: "dist",
  },
});
