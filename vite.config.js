import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        src: resolve(__dirname, "./src/main.js"),
      },
    },
  },
});
