import path, { resolve } from "path";
import { partytownVite } from "@builder.io/partytown/utils";
import { defineConfig } from "vite";
import html from "rollup-plugin-html";
import postcss from "rollup-plugin-postcss";

// vite.config.js

export default defineConfig({
  base: "/",

  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        ascut: resolve(__dirname, "pages/ascut/index.html"),
        retail_register: resolve(__dirname, "pages/retail_register/index.html"),
        thank_you: resolve(__dirname, "pages/thank_you/index.html"),
      },
    },
  },

  plugins: [
    // html(),
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],
});
