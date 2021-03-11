<template>
  <div class="d-flex justify-content-center">
    <h1><slot /></h1>
  </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/bootstrap-utilities.scss";

h1 {
  display: inline-block;
  padding: 0 0.2em;
  font-size: 4rem;
  vertical-align: middle;
  background: linear-gradient(transparent 65%, $accent 65%);
}
</style>
