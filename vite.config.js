import path, { resolve } from "path";
import { defineConfig } from "vite"; // Use double quotes
import { partytownVite } from "@builder.io/partytown/utils";

// vite.config.js

export default defineConfig({
  plugins: [
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cabinets_order: resolve(__dirname, "src/cabinets_order/index.html"),
        retail_register: resolve(__dirname, "src/retail_register/index.html"),
        thank_you: resolve(__dirname, "src/thank_you/index.html"),
        process_pages: resolve(__dirname, "src/process_pages/index.html"),
        faq: resolve(__dirname, "src/faq/index.html"),
        contact_us_page: resolve(__dirname, "src/contact_us_page/index.html"),
      },
    },
  },
});
