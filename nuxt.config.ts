import { NuxtConfig } from "@nuxt/types";
import path from "path";
import fs from "fs";
import { NuxtOptionsServer } from "@nuxt/types/config/server";

const nuxtConfig: NuxtConfig = {
  ssr: true,
  server: { host: "0.0.0.0" },
  build: { hardSource: true },
  buildModules: [
    "@nuxt/typescript-build",
    "@nuxtjs/style-resources",
    ["@nuxtjs/stylelint-module", { fix: true }]
  ],
  modules: ["@nuxtjs/pwa", "@nuxtjs/sitemap", "@nuxtjs/dotenv"],
  plugins: [{ src: "~/plugins/bootstrap", mode: "client" }],
  components: true,
  telemetry: false,

  head: {
    htmlAttrs: { lang: "ja" },
    headAttrs: { prefix: "og: https://ogp.me/ns#" },
    title: "いーちゃん",
    titleTemplate: "%s - いーちゃん",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "いーちゃん" },
      { hid: "og:url", property: "og:url", content: "https://e-chan.cf" },
      { hid: "og:title", property: "og:title", content: "いーちゃん" },
      { hid: "og:description", property: "og:description", content: "いーちゃんのポートフォリオ・Webサイトです。自己紹介や制作したプロジェクトについて掲載しています。" },
      { property: "og:image", content: "https://e-chan.cf/images/ogp.png" }

    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }
    ]
  },
  loading: { color: "#0195E6" },
  css: [
    "~/assets/scss/_fonts.scss",
    "~/assets/scss/bootstrap.scss"
  ],
  styleResources: { scss: [] },
  pwa: {
    meta: {
      name: "いーちゃん",
      description: "いーちゃんのポートフォリオ・Webサイトです。自己紹介や制作したプロジェクトについて掲載しています。",
      lang: "ja",
      theme_color: "#0195E6"
    },
    manifest: {
      name: "いーちゃん",
      short_name: "いーちゃん",
      description: "いーちゃんのポートフォリオ・Webサイトです。自己紹介や制作したプロジェクトについて掲載しています。",
      lang: "ja",
      theme_color: "#0195E6"
    },
    workbox: {
      offline: false,
      skipWaiting: true,
      clientsClaim: true,
      runtimeCaching: [{
        urlPattern: /^\/(images|fonts)/,
        handler: "cacheFirst",
        method: "GET",
        strategyOptions: {
          cacheExpiration: { maxAgeSeconds: 60 * 60 * 24 * 7 },
          cacheableResponse: { statuses: [200] }
        }
      }]
    }
  },
  sitemap: { hostname: "https://e-chan.cf/" }
};

try {
  (nuxtConfig.server as NuxtOptionsServer).https = {
    key: fs.readFileSync(path.resolve(__dirname, "ssl/localhost.key")),
    cert: fs.readFileSync(path.resolve(__dirname, "ssl/localhost.crt"))
  };
} catch (ignored) {
  delete (nuxtConfig.server as NuxtOptionsServer).https;
}

export default nuxtConfig;
