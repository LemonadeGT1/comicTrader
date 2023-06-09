<template>
  <div class="container-fluid">
    <div class="row my-2">
      <div class="col-md-6">
        <h2>Welcome<span v-if="account.id">, <span v-text="account.name" class=""></span>,</span> to ComicTrader!</h2>
      </div>
      <div class="col-md-6 text-end">The place for collecting, and trading comics!</div>

      <!-- //NOTE Page Navigation -->
      <div class="row justify-content-center mb-0 mx-0">
        <div class="col-6 text-end">
          <p>
            <button v-if="AppState.offset >= 10000" class="btn btn-success py-0 px-1 mx-1"
              @click="changePage(-10000)">10,000</button>
            <button v-else class="btn btn-success py-0 px-1 mx-1 disabled">10,000</button>

            <button v-if="AppState.offset >= 1000" class="btn btn-success py-0 px-1 mx-1"
              @click="changePage(-1000)">1,000</button>
            <button v-else class="btn btn-success py-0 px-1 mx-1 disabled">1,000</button>

            <button v-if="AppState.offset >= 100" class="btn btn-success py-0 px-1 mx-1"
              @click="changePage(-100)">100</button>
            <button v-else class="btn btn-success py-0 px-1 mx-1 disabled">100</button>

            <button v-if="AppState.offset >= 20" class="btn btn-success py-0 px-1 mx-1"
              @click="changePage(-20)">20</button>
            <button v-else class="btn btn-success py-0 px-1 mx-1 disabled">20</button>
            &lt; Prev
          </p>
        </div>
        <div class="col-6">
          <p>Next &gt;
            <button v-if="AppState.offset < AppState.comicTotal - 20" class="btn btn-success py-0 px-1 mx-1"
              @click="changePage(20)">20</button>
            <button v-else class="btn btn-success py-0 px-1 mx-1 disabled">20</button>

            <button v-if="AppState.offset < AppState.comicTotal - 100" class="btn btn-success py-0 px-1 mx-1"
              @click="changePage(100)">100</button>
            <button v-else class="btn btn-success py-0 px-1 mx-1 disabled">100</button>

            <button v-if="AppState.offset < AppState.comicTotal - 1000" class="btn btn-success py-0 px-1 mx-1"
              @click="changePage(1000)">1,000</button>
            <button v-else class="btn btn-success py-0 px-1 mx-1 disabled">1,000</button>

            <button v-if="AppState.offset < AppState.comicTotal - 10000" class="btn btn-success py-0 px-1 mx-1"
              @click="changePage(10000)">10,000</button>
            <button v-else class="btn btn-success py-0 px-1 mx-1 disabled">10,000</button>
          </p>
        </div>
      </div>
      <div class="row justify-content-center pt-0">
        <div class="col-4 text-center">
          <p>Now viewing {{ AppState.offset }} - {{ AppState.offset + 20 }} of {{ AppState.comicTotal }}</p>
        </div>
      </div>

      <div class="container-fluid">

        <div class="masonry">
          <div v-for="c in comics" :key="c.id" class="item py-0 rounded comicCard px-2">
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
      AppState: computed(() => AppState),
      comics: computed(() => AppState.comics),
      account: computed(() => AppState.account),

      async changePage(num) {
        try {
          await comicsService.changePage(num)
        } catch (error) {
          logger.error(error.message)
          Pop.error(error.message)
        }
      }
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
