import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite transforms JSX and creates a deployable static bundle in dist/.
export default defineConfig({
  plugins: [react()],
  build: { emptyOutDir: true },
  server: { allowedHosts: ["terminal.local"] },
  preview: { allowedHosts: ["terminal.local"] },
});
