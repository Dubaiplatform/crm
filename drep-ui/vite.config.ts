import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // enables TS path aliases
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // <-- correct
    },
  },
});
