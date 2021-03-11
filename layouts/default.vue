<template>
  <div class="d-flex flex-column">
    <navbar />
    <nuxt class="main flex-grow-1" />
    <e-footer class="footer flex-grow-0" />
  </div>
</template>

<style lang="scss" scoped>
.main {
  height: unquote("calc(100vh - 5rem)");
  margin-top: 3.5rem;
}

.page-enter-active, {
  transition: opacity 0.8s;
}

.page-enter {
  opacity: 0;
}
</style>
