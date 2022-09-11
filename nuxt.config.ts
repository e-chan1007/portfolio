import { defineNuxtConfig } from "nuxt";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: "src",
  typescript: { strict: true },
  modules: [
    "@nuxt/image-edge",
    "@nuxtjs/color-mode",
    "@vueuse/nuxt",
    "nuxt-icon"
  ]
});
