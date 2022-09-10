<template>
  <Teleport to="body">
    <div class="modal-wrapper" :class="{ active }" @click.self="emit('click-outside')">
      <div class="modal">
        <slot />
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
interface Props {
  active: boolean;
}
interface Emits {
  (event: "click-outside"): void
}
const props = defineProps<Props>();
const emit = defineEmits<Emits>();
</script>

<style lang="scss" scoped>
@import "~/assets/styles/utils";

.modal-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(var(--black-rgb), 70%);
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  overscroll-behavior: contain;
  padding: 24px;
  @include transition;

  &:not(.active) {
    pointer-events: none;
    opacity: 0%;
  }
}

.modal {
  background-color: var(--bg-card);
  margin: auto;
  max-width: 720px;
  border-radius: 8px;
  padding: 24px;
}
</style>
