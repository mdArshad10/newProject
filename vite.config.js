import path, { resolve } from "path";
import { partytownVite } from "@builder.io/partytown/utils";
import html from "vite-plugin-html";

// vite.config.js

export default {
  plugins: [
    html(),
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ascut: resolve(__dirname, "pages/ascut/index.html"),
        retail_register: resolve(__dirname, "pages/retail_register/index.html"),
        thank_you: resolve(__dirname, "pages/thank_you/index.html"),
        process_pages: resolve(__dirname, "pages/process_pages/index.html"),
      },
    },
  },
};
