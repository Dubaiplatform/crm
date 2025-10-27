#!/bin/bash

# Fix vite.config.ts on the server
cat > /home/bitnami/crm/drep-ui/vite.config.ts << 'EOF'
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // enables TS path aliases from tsconfig.json
  ],
});
EOF

echo "✅ vite.config.ts updated on server"

