<template>
  <span class="m-1">
    <div class="text-center">
      <img :src="activeComic.thumbnail?.path + '.' + activeComic.thumbnail?.extension" class="img-fluid comicImg2 rounded"
        :title="activeComic.title" />
    </div>
    <p class="pt-3" v-html="activeComic.description"></p>
    <p v-if="activeComic.pageCount > 0" class="pageCount mb-0">Page Count: <span v-text="activeComic.pageCount"></span>
    </p>
  </span>
</template>

<script>
import { computed } from "vue";
import { AppState } from "../AppState.js";

export default {
  setup() {
    return {
      activeComic: computed(() => AppState.activeComic)
    };
  },
};
</script>

<style>
.comicImg2 {
  box-shadow: 5px 5px 5px #00000066;
}
</style>