<template>
  <div class="about text-center">
    <h1>Welcome {{ account.name }}</h1>
    <img class="profilePic" :src="account.picture" alt="" />
    <p>{{ account.email }}</p>
  </div>

  <div class="text-center">

    <button @click="gotoProfile(account?.id)" class="btn btn-primary py-0 px-1 mx-1">
      To Profile Page</button>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
import { logger } from "../utils/Logger.js"
import { useRouter } from "vue-router"
export default {
  setup() {
    const router = useRouter()
    return {
      account: computed(() => AppState.account),

      gotoProfile(profileId) {
        logger.log(profileId)
        router.push({ name: 'Profile', params: { accountId: profileId } })
      }
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
