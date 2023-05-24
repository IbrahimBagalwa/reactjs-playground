import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";
export default defineConfig({
  plugins: [react(), svgr(), VitePWA()],
});
