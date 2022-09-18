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
