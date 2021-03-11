import TBootstrap from "~/node_modules/@types/bootstrap";
import * as bootstrap from "bootstrap";
import Vue from "vue";

declare module "vue/types/vue" {
  interface Vue {
    $bootstrap: typeof TBootstrap
  }
}

Vue.prototype.$bootstrap = bootstrap;
