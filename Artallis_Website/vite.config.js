import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // base: "/",
  base: "/projetos_sg/Artallis/",
  build: {
    // target: "esnext",
    chunkFileNames: "./assets/[name].[hash].js",
    assetFileNames: "./assets/media/[name].[hash].[ext]",
  },
  //   server: {
  //     mimeTypes: {
  //       js: "application/javascript",
  //     },
  //   },
});
