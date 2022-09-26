<template>
  <Html :lang="language" />
  <Title>{{ translate("name") }}</Title>
  <Meta name="description" :content="translate('siteDescription')" />
  <Link rel="preconnect" href="https://fonts.googleapis.com" />
  <Link rel="preconnect" href="https://fonts.gstatic.com" />
  <Link rel="preload" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Roboto:wght@400;700&display=swap" as="style" onload="this.onload=null;this.rel='stylesheet'" />
  <div class="wrapper">
    <nav>
      <NavMenu />
      <NuxtImg class="icon" src="/img/icon.webp" :alt="translate('nav', 'iconAlt')" width="128" height="128" />
      <p>{{ translate("name") }}</p>
      <div>{{ contents.profile }}</div>
      <ul class="links">
        <li>
          <a title="GitHub" href="https://github.com/e-chan1007/" target="_blank" rel="noreferrer noopener">
            <Icon name="octicon:mark-github-16" />
          </a>
        </li>
        <li>
          <a title="Twitter" href="https://twitter.com/e_chan1007/" target="_blank" rel="noreferrer noopener">
            <Icon name="mdi:twitter" />
          </a>
        </li>
      </ul>
    </nav>
    <main>
      <div class="container">
        <section>
          <h1>{{ translate("headers", "works") }}</h1>
          <div class="works">
            <WorkCard v-for="work, id in contents.works" :id="id" :key="id" :work="work" />
          </div>
        </section>
        <section>
          <h1>{{ translate("headers", "articles") }}</h1>
          <div class="articles">
            <ArticleCard v-for="article in articles" :key="article.title" :article="article" />
          </div>
        </section>
      </div>
    </main>
  </div>
</template>

<script lang="ts" setup>
import "modern-normalize/modern-normalize.css";

const contents = useContent();
const articles = await useArticles();
const language = useLanguage();
const translate = useTranslate();
</script>

<style lang="scss">
@import "~/assets/styles/utils";
@import "~/assets/styles/variables";

html,
body,
#__nuxt {
  width: 100%;
  min-height: 100%;
  margin: 0;
  color: var(--text-main);
  font-family: 'Roboto', 'Noto Sans JP', sans-serif;
  line-height: 1.6em;
  @include transition(color);
}

body {
  background-image: url("/img/background.webp");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
}

.wrapper {
  display: flex;
  flex-direction: row;
  min-height: 100%;

  @include sp {
    flex-direction: column;
  }
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 256px;
  min-height: 100%;
  padding: 32px;
  flex-shrink: 0;
  background-color: var(--bg-sidebar);
  color: var(--text-white);

  @include transition((color, background-color));

  @include sp {
    width: 100%;
    height: auto;
  }

  >.icon {
    width: 128px;
    border-radius: 64px;
  }

  .links {
    padding: 0;
    list-style-type: none;
    font-size: 1.2em;

    li {
      display: inline-block;

      &:not(:last-of-type) {
        margin-right: 16px;

        @include sp {
          margin-right: 24px;
        }
      }

      a {
        color: inherit;
      }

      @include sp {
        font-size: 1.4em;
      }
    }
  }
}

main {
  background-color: var(--bg-main);
  width: 100%;
  height: 100%;
  padding: 8px 0 24px 0;
  @include transition(background-color);
}

.container {
  width: 80%;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @include sp {
    width: calc(100% - 64px);
    margin: 0 32px;
    padding: 0;
  }
}

.works {
  display: flex;
  margin: -8px;
  flex-wrap: wrap;
}
</style>
