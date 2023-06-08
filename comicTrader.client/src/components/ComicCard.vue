<template>
  <span class="m-1">
    <div class="mb-2">
      <h6 v-text="comic.title" class="m-0"></h6>
    </div>
    <div class="text-center">
      <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" class="img-fluid comicImg rounded"
        :title="comic.title" />
    </div>
    <p class="pt-3" v-html="comic.description"></p>
    <p v-if="comic.pageCount > 0" class="pageCount mb-0">Page Count: <span v-text="comic.pageCount"></span></p>
  </span>
</template>

<script>
import { Comic } from "../models/Comic.js";

export default {
  props: {
    comic: { type: Comic, required: true }
  },

  setup(props) {
    return {};
  },
};
</script>

<style>
.comicCard {
  background-color: #B51717;
  color: white;
}

.comicImg {
  width: 50%;
  /* height: auto; */
  box-shadow: 5px 5px 5px #00000066;
}

.pageCount {
  clear: both;
}

.titleText {
  background-color: #000000cc;
  padding: 4px 4px 2px 4px;
  border-radius: 5px;
}
</style>