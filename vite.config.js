import path, { resolve } from "path";
import { partytownVite } from "@builder.io/partytown/utils";
import { defineConfig } from "vite";

// vite.config.js

export default defineConfig({
  base: "/",


  plugins: [
    // html(),
    partytownVite({
      dest: path.join(__dirname, "dist", "~partytown"),
    }),
  ],
});
