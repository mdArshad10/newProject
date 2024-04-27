import path from "path";
import { partytownVite } from "@builder.io/partytown/utils";
import { defineConfig } from "vite";

// vite.config.js

export default defineConfig({
  base: "/",
  // Build Options

  rollupOptions: {
    input: {
      main: resolve(__dirname, "index.html"),
      pages: resolve(__dirname, "ascut/index.html"),
    },
  },

  plugins: [
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],
});
