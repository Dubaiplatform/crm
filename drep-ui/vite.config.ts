import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // <-- this enables TypeScript path aliases
  ],
  resolve: {
    alias: {
      "@": "/src", // optional, tsconfigPaths handles most cases
    },
  },
});
