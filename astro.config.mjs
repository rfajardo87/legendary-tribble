import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import react from "@astrojs/react";
// https://astro.build/config
export default defineConfig({
  integrations: [
    react(),
    starlight({
      title: "Documentation",
    }),
  ],
});
