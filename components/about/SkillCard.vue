<template>
  <div
    v-if="skill"
    class="col-lg-4 col-md-6 p-2">
    <div class="skill-card h-100">
      <div class="d-flex flex-row align-items-baseline justify-content-between">
        <div class="d-flex flex-column mb-3">
          <h4
            class="mb-0">
            <img
              :src="require(`~/assets/images/${skill.label.toLowerCase().replace(/\./g, '')}.webp`)"
              :alt="skill.label">
            {{ skill.label }}
          </h4>
          <span
            v-if="skill.usedHere"
            class="used-here">
            このサイトでも使用中
          </span>
        </div>
        <span class="level">{{ levelLabels[skill.level] }}</span>
      </div>
      <p class="mb-0">
        {{ skill.description }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropOptions } from "vue";
type Skill = {
    label: string,
    level: "good" | "little" | "ever" | undefined,
    description: string,
    usedHere: boolean
  };

export default Vue.extend({
  props: {
    skill: {
      type: Object,
      default: null
    } as PropOptions<Skill>
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

.skill-card {
  padding: 16px;
  border: 1px solid $gray-500;

  h4 {
    img {
      height: 1em;
      margin-right: 2px;
      margin-bottom: 4px;
    }
  }

  .level {
    display: inline-block;
    padding: 4px 8px;
    font-size: 0.9rem;
    color: $gray-600;
    border: 1px solid $gray-500;
    border-radius: 4px;
  }

  .used-here {
    display: inline-block;
    font-size: 0.8rem;
    color: $gray-600;
  }
}
</style>
