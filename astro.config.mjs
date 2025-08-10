// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
  },

  vite: {
    server: {
      allowedHosts: [
        "luminary.local", // local dev
      ],
    },
  },
});
