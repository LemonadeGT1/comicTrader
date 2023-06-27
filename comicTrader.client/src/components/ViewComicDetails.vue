<template>
  <span class="m-1">
    <div class="text-center">
      <img :src="activeComic.thumbnail?.path + '.' + activeComic.thumbnail?.extension" class="img-fluid comicImg2 rounded"
        :title="activeComic.title" />
    </div>
    <p v-if="activeComic.description" class="pt-3 mb-0" v-html="activeComic.description"></p>
    <p class="pt-3 mb-0" v-if="parseInt(activeComic.issueNumber, 10) > 0">Issue Number: {{ activeComic.issueNumber }}</p>
    <p v-if="activeComic.pageCount > 0" class="pageCount mb-0 pt-3">Page Count: <span
        v-text="activeComic.pageCount"></span>
    </p>
    <p class="pt-3">Creators:
    <table>
      <tr v-for="c in activeComic.creators.items">
        <td class="ps-3 text-end">{{ c.role.charAt(0).toUpperCase() + c.role.slice(1) }}</td>
        <td class="ps-3 text-end">{{ c.name }}</td>
      </tr>
    </table>
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