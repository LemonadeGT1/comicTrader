<template>
  <span class="m-1">
    <div class="mb-2">
      <h6 v-text="comic.title" class="m-0"></h6>
    </div>
    <div class="text-center">
      <img :src="comic.thumbnail.path + '.' + comic.thumbnail.extension" class="img-fluid comicImg rounded mb-3"
        :title="comic.title" data-bs-toggle="modal" data-bs-target="#ViewComicModal" :data-id="comic.id"
        @click="setActiveComic(comic)" />
    </div>
    <p v-if="comic.description?.length > 0" class="" v-html="comic.description?.substring(0, 40) + '\u2026'"></p>
    <p v-if="comic.pageCount > 0" class="pageCount mb-0">Page Count: <span v-text="comic.pageCount"></span></p>
  </span>
  <!-- //NOTE If the user is logged in -->
  <div class="row" v-if="account.id">
    <p class="m-0">Add To:</p>
    <div class="col-12 mb-2 d-flex justify-content-evenly">
      <button type="button" class="btn btn-success py-0 px-1 elevation-3" @click="addToWishList(comic.id)">Wish
        List</button>
      <button type="button" class="btn btn-success py-0 px-1 elevation-3"
        @click="addToCollection(comic.id)">Collection</button>
      <!-- //NOTE If it is in the users collection -->
      <button type="button" class="btn btn-warning py-0 px-1 elevation-3" @click="addToForTrade(comic.id)">For
        Trade</button>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { Comic } from "../models/Comic.js";
import { logger } from "../utils/Logger.js";
import { AppState } from "../AppState.js";

export default {
  props: {
    comic: { type: Comic, required: true }
  },

  setup(props) {
    return {
      account: computed(() => AppState.account),
      addToWishList(comicId) {
        logger.log('addToWishList: ' + comicId)
      },
      addToCollection(comicId) {
        logger.log('addToCollection: ' + comicId)
      },
      addToForTrade(comicId) {
        logger.log('addToForTrade: ' + comicId)
      },
      setActiveComic(comic) {
        logger.log('setActiveComic', comic)
        AppState.activeComic = comic
      }
    };
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