<template>
  <span class="m-1">
    <h6 v-text="comic.title"></h6>
    <span class="">
      <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" class="img-fluid comicImg pe-1"
        :title="comic.title" />
    </span>
    <p v-html="comic.description"></p>
    <p class="pageCount mb-0">Page Count: <span v-text="comic.pageCount"></span></p>
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
  /* width: 50%; */
  /* height: auto; */
}

.pageCount {
  clear: both;
}
</style>