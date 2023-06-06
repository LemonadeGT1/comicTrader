<template>
  <div class="container-fluid">
    <div class="row my-2">
      <div class="col-md-6">
        <h2>Welcome to ComicTrader!</h2>
      </div>
      <div class="col-md-6 text-end">The place for collecting, and trading comics!</div>

      <div class="container-fluid">

        <div class="masonry">
          <div v-for="c in comics" :key="c.id" class="item pb-0 rounded comicCard p-2">
            <ComicCard :comic="c" />
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
.masonry {
  columns: 5 300px;
  column-gap: 1rem;
  // max-width: 100%;

  .item {
    width: 100%;
    margin-bottom: 15px;
    break-inside: avoid;
  }
}

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
</style>
