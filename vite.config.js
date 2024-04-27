import path,{resolve} from "path";
import { partytownVite } from "@builder.io/partytown/utils";
import { defineConfig } from "vite";

// vite.config.js

export default defineConfig({
  base: "/",

  build: {
    rollupOptions: {
      input: {
        index:"./index.html",
        ascut:"./pages/ascut/index.html",
        retail_register:"./pages/retail_register/index.html",
        thank_you:"./pages/thank_you/index.html",  
      },
    },
  },

  plugins: [
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],
});
