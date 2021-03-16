<template>
  <div>
    <subpage-title>Works</subpage-title>
    <div class="container-lg">
      <div class="row">
        <works-work-card
          v-for="work in works"
          :key="work.id"
          :work="work"
          @click.native="openModal(work)" />
      </div>
    </div>
    <div
      ref="modal"
      class="modal fade"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered modal-xl">
        <div
          v-if="activeWork.id"
          class="modal-content">
          <img
            class="img-fluid rounded-top border-bottom border-gray-500"
            :src="`/images/works/bg/${activeWork.id}.webp`"
            :alt="activeWork.name">
          <div class="modal-body">
            <h1 class="mb-0">
              {{ activeWork.name }}
            </h1>
            <p class="text-muted mb-2">
              {{ activeWork.date }}
            </p>
            <p
              v-if="activeWork.tags.length > 0"
              class="tags">
              <span
                v-for="tag in activeWork.tags"
                :key="tag">
                {{ tag }}
              </span>
            </p>
            <p>{{ activeWork.description }}</p>
            <a
              v-if="activeWork.link"
              class="btn btn-primary text-white"
              :href="activeWork.link"
              target="_blank"
              rel="noopener noreferrer">開く</a>
          </div>
          <button
            type="button"
            class="btn-close shadow"
            data-bs-dismiss="modal"
            aria-label="閉じる" />
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";

type Work = {
  id: string,
  name: string,
  date: string,
  link?: string,
  tags: string[],
  description: string
};

export default Vue.extend({
  data() {
    return { works: require("~/assets/json/works/works.json") as Work[], activeWork: {} };
  },
  head() {
    return { title: "Works" };
  },
  methods: {
    openModal(work: Work) {
      this.activeWork = work;
      this.$nextTick(() => {
        (this.$bootstrap.Modal.getInstance(this.$refs.modal) || new this.$bootstrap.Modal(this.$refs.modal)).show();
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import "~/assets/scss/bootstrap-utilities.scss";

.modal-content {
  position: relative;

  .btn-close {
    position: absolute;
    top: 8px;
    right: 8px;
    z-index: 100;
    padding: 8px;
    background-color: rgba($white, 0.8) !important;
    border: 1px solid $gray-400;
    opacity: 1;
  }

  .tags {
    span {
      padding: 4px 8px;
      margin: 2px 4px 2px 0;
      font-size: 0.8rem;
      border: 1px solid $gray-500;
      border-radius: 4px;
    }
  }
}
</style>
