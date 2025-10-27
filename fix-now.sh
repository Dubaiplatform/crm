#!/bin/bash
# Run this on your server

cd /home/bitnami/crm/drep-ui

cat > vite.config.ts << 'EOFIMPORT'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // enables TS path aliases from tsconfig.json
  ],
});
EOFIMPORT

echo "✅ File updated! Now running build..."
npm run build:prod

