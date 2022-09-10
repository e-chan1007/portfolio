<template>
  <a :href="article.link" target="_blank" rel="noreferrer noopener">
    <div class="card">
      <span class="title">{{ article.title }}</span>
      <footer>
        <span>{{ article.link?.replace(/https:\/\/(.+?)\/.*/, "$1") }}</span>
        <time class="date">{{ format(article.pubDate!, "yyyy/MM/dd") }}</time>
      </footer>
    </div>
  </a>
</template>

<script lang="ts" setup>
import { format } from "date-fns";

interface Props {
  article: Awaited<ReturnType<typeof useArticles>>[number]
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
@import "~/assets/styles/utils";
@import "~/assets/styles/variables";

.card {
  position: relative;
  user-select: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 12px;

  &-image {
    width: 100%;
  }

  footer {
    display: flex;
    flex-direction: row;
    gap: 16px;
    font-size: 0.8em;
  }

  @include sp {
    flex-direction: column;
    align-items: flex-start;

    footer {
      flex-direction: row-reverse;
    }
  }
}

a {
  color: inherit;

  &:not(:last-of-type) .card {
    border-bottom: 1px solid var(--divider)
  }
}

a {
  text-decoration: none;
}

a:hover .card .title {
  text-decoration: underline;
}
</style>
