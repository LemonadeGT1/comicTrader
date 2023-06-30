<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="profilePic" :src="account.picture" alt="" />
    <p class="mt-2">{{ account.email }}</p>
    <!-- <p>Id: {{ account.id }}</p> -->
  </div>

  <!-- <div class="text-center">

    <button @click="gotoProfile(account?.id)" class="btn btn-primary py-0 px-1 mx-1">
      View Profile Page</button>
  </div> -->

  <!-- //SECTION - Account Collection -->
  <div class="container-fluid mt-4">
    <div class="row">
      <div class="col-md-4">
        <h3>Your Collection:</h3>
      </div>
    </div>

    <div class="masonry">
      <div v-for="c in collection" :key="c?.id" class="item py-0 rounded comicCard px-2">
        <ComicCard :comic="c" />
      </div>
    </div>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { logger } from "../utils/Logger.js"
import { useRouter } from "vue-router"
import { collectionsService } from "../services/CollectionsService.js"
import Pop from "../utils/Pop.js"
export default {
  setup() {
    const router = useRouter()

    async function getCollection() {
      try {
        // logger.log('AccountPage: getting collection')
        await collectionsService.getCollection()
      } catch (error) {
        logger.log(error.message)
        Pop.error(error.message)
      }
    }

    onMounted(() => {
      getCollection()
    })

    return {
      account: computed(() => AppState.account),
      collection: computed(() => AppState.collection),

      gotoProfile(profileId) {
        logger.log(profileId)
        router.push({ name: 'Profile', params: { accountId: profileId } })
      }
    }
  }
}
</script>

<style scoped lang="scss">
.masonry {
  columns: 8 150px;
  column-gap: 1rem;
  // max-width: 100%;

  .item {
    width: 100%;
    margin-bottom: 15px;
    break-inside: avoid;
    border: 1px solid #ffffff;
  }
}

img {
  max-width: 80px;
}
</style>
