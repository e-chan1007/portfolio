<template>
  <div class="d-flex justify-content-center">
    <h2><span><slot /></span></h2>
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

  span {
    background: linear-gradient(transparent 65%, $accent 65%);
  }
}
</style>
