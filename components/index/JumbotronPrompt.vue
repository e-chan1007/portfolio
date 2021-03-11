<template>
  <div
    class="shell-bg"
    @click="$refs.commandInput && $refs.commandInput.focus();">
    <div
      ref="shellContainer"
      class="shell p-sm-4 p-3 container-lg">
      <!-- eslint-disable -->
      <div v-if="isIndexVisible">Welcome to e-chan's Portfolio

        <table style="margin-left: 1em;">
          <col style="width: 8em;"/>
          <tbody>
            <tr><td>* About me:</td><td><nuxt-link to="/about" :class="{active: $route.path==='/about'}">https://www.e-chan.cf/about</nuxt-link></td></tr>
            <!-- <tr><td>* Articles:</td><td><nuxt-link to="/articles" :class="{active: $route.path==='/articles'}">https://www.e-chan.cf/articles</nuxt-link></td></tr>-->
            <tr><td>* Works:</td><td><nuxt-link to="/works" :class="{active: $route.path==='/works'}">https://www.e-chan.cf/works</nuxt-link></td></tr>
          </tbody>
        </table>
        <br>
      </div>{{ postText }}<div class="command-input">
        <input
        autofocus
          ref="commandInput"
          v-model="command"
          @input="e => command = e.target.value"
          @keypress.enter="onCommandSent"><span class="carret" /></div>
      <div
        ref="commandPreview"
        class="d-inline-block"
        style="white-space: pre; opacity: 0;">{{ command }}</div>
      <!-- eslint-enable -->
    </div>
  </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return { isIndexVisible: false, prompt: "e-chan1007@e-chan.cf ~$ ", command: "", postText: "" };
  },
  head() {
    return { titleTemplate: "" };
  },
  watch: {
    command() {
      this.$nextTick(() => {
        (this.$refs.commandInput as HTMLInputElement).style.width = `${(this.$refs.commandPreview as HTMLDivElement).clientWidth}px`;
      });
    }
  },
  async mounted() {
    this.isIndexVisible = true;
    this.postText += this.prompt;
  },
  methods: {
    onCommandSent() {
      this.postText += `${this.command}\n`;
      let [, command, ...params] = (this.command.match(/^\s*(\S+)(?:\s+(\S+))?(?:\s+(\S+))?\s*$/) || []);
      params = params.filter(param => typeof param !== "undefined");
      switch (command) {
      case "cd":
        if (params.length > 0) {
          if (/^\/?(about|articles|works)?$/.test(params[0])) {
            this.$router.push(params[0]);
          } else {
            this.postText += `cd: ${params[0]}: No such file or directory\n`;
          }
        }
        break;
      case "clear":
        console.log("clear");
        this.postText = "";
        this.isIndexVisible = false;
        break;
      case "exit":
        if (history.length > 1) history.back(); else window.close();
        break;
      case "help":
        this.postText += `These shell commands are defined internally.  Type \`help' to see this list.        
            cd [page]
            clear
            exit
            help
            ls
            rm [-rf] [dir]\n`;
        break;
      case "ls":
        this.postText += `about    articles works\n`;
        break;
      case "rm":
        console.log(params);
        if (params.length > 0) {
          if (/-(?:rf|fr)/.test(params[0])) {
            if (params.length > 1) {
              if (/^\/\*?$/.test(params[1])) {
                this.postText += `いーちゃん: お願い、消さないで…。\n`;
              } else if (/^\/?(about|articles|works)?$/.test(params[1])) {
                this.postText += `rm: cannot remove '${params[1]}': Permission denied\n`;
              } else {
                this.postText += `cd: cannot remove '${params[1]}': No such file or directory\n`;
              }
            } else {
              this.postText += `rm: missing operand\n`;
            }
          } else if (params[0] === "-r") {
            if (params.length > 1 && /^\/?(about|articles|works)?$/.test(params[1])) {
              this.postText += `rm: cannot remove '${params[1]}': Permission denied\n`;
            } else if (params.length > 1) {
              this.postText += `cd: cannot remove '${params[1]}': No such file or directory\n`;
            } else {
              this.postText += `rm: missing operand\n`;
            }
          } else {
            if (/^\/?(about|articles|works)?$/.test(params[0])) {
              this.postText += `rm: cannot remove '${params[0]}': Is a directory\n`;
            } else {
              this.postText += `cd: cannot remove '${params[0]}': No such file or directory\n`;
            }
          }
        } else {
          this.postText += `rm: missing operand\n`;
        }
        break;
      default:
        if (typeof command !== "undefined") this.postText += `${command}: command not found\n`;
      }
      this.command = "";
      this.postText += `${this.prompt}`;
      this.$nextTick(() => {
        (this.$refs.shellContainer as HTMLDivElement).scrollTop = (this.$refs.shellContainer as HTMLDivElement).scrollHeight;
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/bootstrap-utilities.scss";

.shell-bg {
  position: relative;
  height: 100%;
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
    background-color: rgba($secondary, 0.8);
  }

  .shell {
    position: relative;
    z-index: 1;
    height: 100%;
    overflow-y: scroll;
    font-family: $font-family-monospace;
    color: $white;
    word-break: break-all;
    white-space: pre-line !important;

    .command-input {
      position: relative;
      display: inline-block;
      width: auto;
      padding: 0;
      margin: 0;
      letter-spacing: -0.4em;

      input {
        width: 0;
        padding: 0;
        margin: 0;
        color: $white;
        letter-spacing: normal;
        background: transparent;
        border: none;
        outline: none;
        caret-color: transparent;
      }

      .carret {
        display: inline-block;
        width: 0.5em;
        height: 1em;
        border-bottom: 0.2em solid $white;
        animation: flash 1s step-start infinite;
      }
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
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: rgba($white, 0.4);
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
