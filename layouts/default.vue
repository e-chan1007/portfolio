<template>
  <div class="d-flex flex-column">
    <navbar
      ref="navbar"
      class="flex-grow-0" />
    <div
      ref="main"
      style="height: 100vh;">
      <nuxt
        class="flex-grow-1 h-100" />
    </div>
    <e-footer class="footer flex-grow-0" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return { loading: true };
  },
  mounted() {
    const setFillHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);

      const mainStyle = (this.$refs.main as HTMLDivElement).style;
      mainStyle.marginTop = `${(document.querySelector("nav.navbar") as HTMLElement).clientHeight}px`;
      mainStyle.height = `calc(${window.innerHeight}px - ${(document.querySelector("nav.navbar") as HTMLElement).clientHeight}px - 1.5rem)`;
    };
    window.addEventListener("resize", setFillHeight);
    setFillHeight();
  }
});
</script>

<style lang="scss" scoped>
.page-enter-active, {
  transition: opacity 0.8s;
}

.page-enter {
  opacity: 0;
}
</style>
