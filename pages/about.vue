<template>
  <div class="container-lg px-md-5 px-4">
    <subpage-title>About me</subpage-title>
    <div class="d-flex flex-sm-row flex-column align-items-center justify-content-center">
      <img
        class="rounded-3"
        src="~/assets/images/icon.webp"
        style="width: 96px; height: 96px;"
        alt="いーちゃん">
      <div class="ms-sm-5 mt-sm-0 my-2 d-flex flex-column align-align-items-center justify-content-center">
        <h1 class="mb-0 text-center">
          いーちゃん
        </h1>
        <small class="text-muted text-center">
          e_chan1007
        </small>
      </div>
    </div>
    <p class="my-2">
      普通科高校1年生です。プログラミングは小学校4年生のときから始め、公開に至らなかったものを含め様々なプログラムを作成してきました。
      2020年からはSGG(すごくなりたいがくせいぐるーぷ)のメンバーとしても活動しています。フロントエンド開発が主となっていますが、
      LINEBotやAndroidアプリ、Windowsソフトウェアの開発などもしています。最近は2021年1月に購入したRaspberry Pi 4を用いて
      様々なサーバーを実験的に立てています。他にも、簡単な動画編集や画像加工にも幅広く取り組んでいます。
    </p>
    <section-title id="links">
      Links
    </section-title>
    <div>
      <dl class="row">
        <template
          v-for="(link, i) in links">
          <dt
            class="col-lg-2 col-sm-3 col-6 py-sm-2 py-1">
            <img
              class="link-icon"
              :alt="link.label"
              :src="require(`~/assets/images/${link.label.toLowerCase()}.webp`)">
            {{ link.label }}
          </dt>
          <dd
            class="col-lg-2 col-sm-3 col-6 py-sm-2 py-1 text-end">
            <a
              :href="`${link.baseUrl}${link.id}`"
              target="_blank"
              rel="noopener noreferrer">@{{ link.id }}</a>
          </dd>
        </template>
      </dl>
    </div>
    <section-title id="skills">
      Skills
    </section-title>
    <template
      v-for="skillCategory in skillCategories">
      <h3 class="skill-category-label">
        {{ skillCategory.label }}
      </h3>
      <div class="row d-flex flex-row align-items-md-stretch align-items-center mb-4">
        <about-skill-card
          v-for="(skill, i) in skillCategory.skills"
          :key="i"
          :skill="skill" />
      </div>
    </template>
    <section-title id="contributions">
      Contributions
    </section-title>
    <div class="d-flex flex-row align-items-center justify-content-center my-2">
      <a
        href="https://github.com/e-chan1007"
        target="_blank"
        rel="noopener noreferrer">
        <img
          src="https://raw.githubusercontent.com/e-chan1007/e-chan1007/main/profile-summary-card-output/nord_bright/0-profile-details.svg"
          class="img-fluid mb-4"
          alt="GitHub コントリビューション数の推移">
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

    type SocialLink = {
    label: string,
    baseUrl: string,
    id: string
    }
    type SkillCategory = {
    label: string,
    skills: {
    label: string,
    level: "good" | "little" | "ever" | undefined,
    description: string,
    usedHere: boolean
    }[]
    }

export default Vue.extend({
  data() {
    return {
      links: require("~/assets/json/about/links.json") as SocialLink[],
      skillCategories: require("~/assets/json/about/skills.json") as SkillCategory[]
    };
  },
  head() {
    return { title: "About" };
  }
});
</script>

    <style
      lang="scss"
      scoped>
      @import "~/assets/scss/bootstrap-utilities.scss";

      .link-icon {
        display: inline-block;
        width: 1em;
      }

      .skill-category-label {
        display: inline-block;
        font-size: 1.2rem;
        color: $gray-600;
        vertical-align: middle;

        &::before,
        &::after {
          display: inline-block;
          width: 0.5em;
          height: 0.5em;
          margin-top: 0.5em;
          content: "";
          border-top: 1px solid $gray-600;
        }
      }
    </style>
  </div>
</template>
