import path from "path";
import { partytownVite } from "@builder.io/partytown/utils";
import { defineConfig } from "vite";

// vite.config.js

export default defineConfig({
  base: "/",
  // Build Options

  build: {
    base: "/",
  },
  rollupOptions: {
    input: ["index.html", "/pages/ascut/index.html", "/pages/retail_register/index.html"],
  },
  plugins: [
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],
});
