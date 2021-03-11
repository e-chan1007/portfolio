<template>
  <div class="shell-bg">
    <div class="shell p-sm-4 p-3 container-sm">
      {{ text }}
      <span
        v-if="!isFinished"
        class="caret" />
      <br>
      <div v-if="isFinished">
        <b># いーちゃんのポートフォリオ</b><br>
        ようこそ!<br><br>
        <b>## 目次</b><br>
        <!-- eslint-disable -->
        - <nuxt-link to="/about" :class="{active: $route.path==='/about'}">[About](/about)</nuxt-link>: いーちゃんについて<br>
        - <nuxt-link to="/works">[Works](/works)</nuxt-link>: 作成したもの<br>
        - <nuxt-link to="/articles">[Articles](/articles)</nuxt-link>: 執筆した記事
        <!-- eslint-enable -->
      </div>
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return { isFinished: false, prompt: { type: "", text: "" }, text: "" };
  },
  head() {
    return { titleTemplate: "" };
  },
  async mounted() {
    this.prompt = [
      { type: "shell", text: "e-chan1007@e-chan.cf:~$ " },
      { type: "shell", text: "[e-chan1007@e-chan.cf ~]$ " },
      { type: "shell", text: "e-chan1007@e-chan.cf ~ % " },
      { type: "cmd", text: "C:\\Users\\e-chan1007>" },
      { type: "ps", text: "PS C:\\Users\\e-chan1007> " }
    ][Math.floor(Math.random() * 5)];

    this.text = this.prompt.text;

    const commandLine = `${{ shell: "cat", cmd: "type", ps: "Get-Content" }[this.prompt.type]} index.md`;
    const splittedCommandLine = commandLine.split("");
    for (let i = 0; i < splittedCommandLine.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 30 + (Math.random() * 60)));
      this.text += splittedCommandLine[i];
    }
    await new Promise(resolve => setTimeout(resolve, 200));
    this.isFinished = true;
  }
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/bootstrap-utilities.scss";

.shell-bg {
  position: relative;
  height: 256px;
  overflow: none;
  background-image: url("/images/sky.jpg");
  background-position: 0 65%;
  background-size: cover;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: "";
    background-color: rgba($secondary, 0.75);
  }

  .shell {
    position: relative;
    z-index: 1;
    height: 256px;
    overflow-y: scroll;
    font-family: $font-family-monospace;
    color: $white;
    word-break: break-all;

    .caret {
      display: inline-block;
      width: 0.5em;
      height: 1em;
      border-bottom: 0.1em solid $white;
      animation: flash 1s step-start infinite;
    }

    a {
      color: $white;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }

  ::-webkit-scrollbar {
    width: 4px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba($white, 0.6);
    border-radius: 4px;
  }
}

@keyframes flash {
  0%,
  50%,
  100% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }
}
</style>
