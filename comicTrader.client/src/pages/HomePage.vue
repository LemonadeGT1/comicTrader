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

            <div v-for="c in comics" :key="c.id" class="item p-0 my-2">
              <div class="comicCard"
                :style="{ 'background-image': 'url(' + c.thumbnail.path + '.' + c.thumbnail.extension + ')' }">

                <div class="blur p-1 d-flex flex-column justify-content-between">
                  <div class="row">
                    <div class="col-12">
                      <h6>{{ c.title }}</h6>
                    </div>
                    <div class="col-12 ps-1 my-1">
                      <img :src="c.thumbnail.path + '.' + c.thumbnail.extension" class="img-fluid comicImg pe-1"
                        :title="c.title" />
                      <p v-html="c.description"></p>
                    </div>
                    <div class="col-12">
                      <p class="mb-0">Page Count: {{ c.pageCount }}</p>
                    </div>
                  </div>
                </div>
              </div>
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
  height: 80vh;
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
  background-position: center;
  background-size: cover;
  // min-height: 20vh;
  border-radius: 10px;
}

.blur {
  // height: 100%;
  // width: 100%;
  border-radius: 10px;
  /* From https://css.glass */
  background: rgba(255, 248, 196, 0.30);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  // border: 1px solid rgba(255, 248, 196, 1);
}

.comicImg {
  width: 50%;
  height: auto;
  float: left;
}

.masonry {
  columns: 5 300px;
  column-gap: 1rem;
  // max-width: 100%;

  .item {
    width: 100%;
    margin-bottom: 15px;
  }
}
</style>
