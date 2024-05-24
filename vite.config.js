import path, { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        cabinets_order: resolve(__dirname, "src/cabinets_order/index.html"),
        retail_register: resolve(__dirname, "src/retail_register/index.html"),
        trade_register_page: resolve(
          __dirname,
          "src/trade_register_page/index.html"
        ),
        thank_you: resolve(__dirname, "src/thank_you/index.html"),
        consultancy_page: resolve(__dirname, "src/consultancy_page/index.html"),
      },
    },
  },
});
