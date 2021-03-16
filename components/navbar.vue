<template>
  <nav class="navbar navbar-expand-md navbar-dark fixed-top shadow-sm bg-primary">
    <div class="container-lg">
      <nuxt-link
        class="navbar-brand"
        to="/"
        @click.native="hideCollapse">
        いーちゃん
      </nuxt-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="メニューを開閉する">
        <span class="navbar-toggler-icon" />
      </button>
      <div
        id="navbarSupportedContent"
        ref="navbarSupportedContent"
        class="collapse navbar-collapse w-sm-auto vw-100">
        <ul class="navbar-nav me-auto mb-sm-0 mb-2 mb-lg-0 d-flex-sm justify-content-end w-100">
          <li
            v-for="(link, label) in links"
            :key="label"
            class="nav-item">
            <nuxt-link
              class="nav-link"
              :class="{active: $route.path === link}"
              :to="link"
              @click.native="hideCollapse">
              {{ label }}
            </nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      links: {
        "Home": "/",
        "About": "/about",
        "Works": "/works"
      }
    };
  },
  methods: {
    hideCollapse() {
      const collapse = this.$bootstrap.Collapse.getInstance(this.$refs.navbarSupportedContent as HTMLDivElement);
      if (collapse) collapse.hide();
    }
  }
});
</script>
