<template>
  <div class="container-fluid">
    <div class="row mt-2">
      <div class="col-12">
        <h2>Welcome to ComicTrader!</h2>
        <h4 type="button" class="btn btn-outline-dark" @click="getComics()"> Get Comics </h4>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { comicsService } from '../services/ComicsService.js';

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
</style>
