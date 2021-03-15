<template>
  <div class="col-lg-4 col-md-6 p-2">
    <div class="work-card">
      <img
        class="img-fluid"
        :src="`/images/works/bg/${work.id}.webp`"
        :alt="work.name">
      <h2>{{ work.name }}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";

type Work = {
  id: string,
  name: string,
  date: string,
  link?: string,
  tags: string[],
  description: string
};

export default Vue.extend({
  props: {
    work: {
      type: Object,
      default: null
    } as PropOptions<Work>
  },
  data() {
    return {
      levelLabels: {
        "good": "使える",
        "little": "少し使える",
        "ever": "使用経験あり"
      }
    };
  }
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/bootstrap-utilities.scss";

.work-card {
  position: relative;
  cursor: pointer;
  border: 1px solid $gray-500;

  &,
  img,
  h2 {
    transition: all ease 0.3s;
  }

  h2 {
    position: absolute;
    right: 12px;
    bottom: 4px;
    margin: 0;
    color: white;
    opacity: 0;
  }

  &:hover {
    img {
      filter: brightness(60%) saturate(80%);
    }

    h2 {
      bottom: 12px;
      opacity: 1;
    }
  }
}
</style>
