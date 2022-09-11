<template>
  <div class="menu" ref="menu">
    <button class="toggle-button" @click="active = !active">
      <Icon name="octicon:three-bars-16" />
    </button>
    <ul class="dropdown" :class="{ active }">
      <li @click="language = (language === 'ja') ? 'en' : 'ja'">
        {{ translate("menu", "language") }} : {{translate("languages", language) }}
      </li>
      <li @click="colorMode.preference = ({light: 'dark', dark: 'system', system: 'light'})[colorMode.preference]!">
        {{ translate("menu", "color") }}: {{ translate("colors", colorMode.preference as "light" | "dark" | "system") }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
const active = ref(false);
const language = useLanguage();
const translate = useTranslate();
const colorMode = useColorMode();
const menu = ref<HTMLUListElement>();
onClickOutside(menu, () => { active.value = false; });
</script>

<style lang="scss" scoped>
@import "~/assets/styles/utils";

.menu {
  align-self: flex-start;
  transform: translateX(-24px) translateY(-24px);

  @include sp {
    align-self: flex-end;
    transform: translateX(16px) translateY(-16px);
  }

  position: relative;
}

.toggle-button {
  background-color: transparent;
  border: none;
  cursor: pointer;

  padding: 8px;
  font-size: 1.2em;

  .icon {
    color: var(--text-white);
  }

}

.dropdown {
  position: absolute;
  left: 8px;
  min-width: 150px;
  width: max-content;
  opacity: 0;
  pointer-events: none;
  user-select: none;
  color: var(--text-main);
  background-color: var(--bg-menu);
  list-style-type: none;
  border-radius: 4px;
  padding: 0;
  overflow: hidden;
  margin: 0;
  box-shadow: 0 2px 4px var(--shadow);

  @include transition;

  @include sp {
    left: auto;
    right: 8px;
  }

  &.active {
    opacity: 1;
    pointer-events: all;
  }

  li {
    @include transition;
    padding: 12px 16px;
    cursor: pointer;

    &:hover {
      background-color: var(--bg-menu-active);
    }

    &:not(:last-child) {
      border-bottom: 1px solid var(--divider);
    }
  }
}
</style>
