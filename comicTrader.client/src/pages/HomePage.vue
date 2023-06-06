<template>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col-12">
        <h2>Welcome to ComicTrader!</h2>
        <p></p>
      </div>
      <div class="row m-0">
        <div class="col-12">
          <div class=" masonry">

            <div v-for="c in comics" :key="c.id" class="item pb-0 rounded comicCard p-2">
              <span class="m-1">
                <h6 v-text="c.title"></h6>
                <span class="">
                  <img :src="c.thumbnail.path + '.' + c.thumbnail.extension" class="img-fluid comicImg pe-1"
                    :title="c.title" />
                </span>
                <p v-html="c.description"></p>
                <p class="pageCount mb-0">Page Count: <span v-text="c.pageCount"></span></p>
              </span>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { comicsService } from '../services/ComicsService.js';
import { AppState } from "../AppState.js";

export default {
  setup() {

    async function getComics() {
      try {
        logger.log('HomePage: getting comics')
        await comicsService.getComics()
      } catch (error) {
        logger.log(error.message)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getComics()
    })

    return {
      comics: computed(() => AppState.comics)
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  // height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.comicCard {
  background-color: #B51717;
  color: white;
}

.comicImg {
  width: 50%;
  height: auto;
}

.masonry {
  columns: 5 300px;
  column-gap: 1rem;
  // max-width: 100%;

  .item {
    width: 100%;
    margin-bottom: 20px;
  }
}

.pageCount {
  clear: both;
}
</style>
