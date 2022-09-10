<template>
  <button class="card" @click="isActive = true">
    <img v-if="id" :src="`/img/${id}.webp`" class="card-image">
    <div class="card-overlay">
      {{ work.title }}
    </div>
  </button>

  <Modal :active="isActive" @click-outside="isActive = false">
    <h1>{{ work.title }}</h1>
    <img v-if="id" :src="`/img/${id}.webp`" class="card-image">
    <ul class="details">
      <li v-if="work.url">
        <Icon name="octicon:globe-16" />
        <a :href="work.url" target="_blank" rel="noreferrer noopener">
          {{ work.url }}
        </a>
      </li>
      <li v-if="work.repo">
        <Icon name="octicon:mark-github-16" />
        <a :href="`https://github.com/${work.repo}`" target="_blank" rel="noreferrer noopener">
          {{ work.repo }}
        </a>
      </li>
      <li>
        <Icon name="octicon:tag-16" />
        <span v-for="tag, i in tags" :key="i" class="tag">{{tag}}</span>
      </li>
      <li>
        <Icon name="octicon:calendar-16" />{{ work.date }}
      </li>
    </ul>
    <p class="description">{{ work.description }}</p>
  </Modal>
</template>

<script lang="ts" setup>
interface Props {
  id: string,
  work: Work
}
const props = defineProps<Props>();

const translate = useTranslate();

const isActive = ref(false);

const frontFramework = computed(() => {
  switch (props.work.frontFramework) {
    case "react": return "React / Next.js";
    case "vue": return "Vue / Nuxt.js";
    default: return props.work.frontFramework;
  }
});
const tags = computed(() => [
  ...props.work.languages,
  frontFramework.value,
  ...props.work.categories.map(category => translate("categories", category))
].filter(Boolean));
</script>

<style lang="scss" scoped>
@import "~/assets/styles/utils";
@import "~/assets/styles/variables";

.card {
  position: relative;
  width: calc(50% - 16px);
  margin: 8px;
  user-select: none;
  background: none;
  border: none;
  padding: 0;

  @include transition;

  &-image {
    width: 100%;
    pointer-events: none;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 4px 4px var(--shadow);
  }

  &-overlay {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    padding: 8px;
    height: calc(2em);
    background: var(--shadow-black);
    color: var(--text-white);
  }

  @include sp {
    width: calc(100% - 8px);
  }
}

.details {
  padding: 0;
  list-style-type: none;

  li {
    margin-bottom: 4px;
  }

  .icon {
    margin-right: 8px;
    transform: translateY(-2px);
  }

  a {
    color: inherit;
  }

  .tag:not(:last-of-type)::after {
    content: ",";
    margin-right: 4px;
  }
}

.description {
  white-space: pre-line;
}

section {
  padding: 8px;
  background-color: var(--bg-card);
  width: 25%;
}
</style>
