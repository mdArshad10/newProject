import path,{resolve} from "path";
import { partytownVite } from "@builder.io/partytown/utils";
import { defineConfig } from "vite";

// vite.config.js

export default defineConfig({
  base: "/",
  // Build Options

  build: {
    base:"https://psm-new-project.vercel.app/",
    outDir:"/",
    emptyOutDir: true,

    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        ascut: resolve(__dirname, "pages/ascut","index.html"),
        
        retail_register: resolve(__dirname, "pages/retail_register","index.html"),
        thank_you: resolve(__dirname, "pages/thank_you","index.html"),
      },
    },
  },

  plugins: [
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],
});
