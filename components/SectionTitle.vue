<template>
  <div class="d-flex justify-content-center">
    <h2><slot /></h2>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/bootstrap-utilities.scss";

h2 {
  @extend h2;

  display: inline-block;
  padding: 0 0.2em;
  margin: 2rem 0 1.5rem 0;
  vertical-align: middle;
  background: linear-gradient(transparent 65%, $accent 65%);
}
</style>
