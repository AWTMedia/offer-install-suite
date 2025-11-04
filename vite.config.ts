import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// IMPORTANT: set base to match the repo name for GitHub Pages
// If your site will live at https://USERNAME.github.io/offer-install-site/
// then base MUST be "/offer-install-site/"
const repoBase = "/offer-install-suite/";

export default defineConfig(({ mode }) => ({
  base: repoBase,
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
