// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import qwikdev from "@qwikdev/astro";

export default defineConfig({
  vite: {
      plugins: [tailwindcss()],
	},

  integrations: [qwikdev()],
});