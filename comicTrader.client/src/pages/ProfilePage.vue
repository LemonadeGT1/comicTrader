<template>
  <div class="container-fluid">

    <div class="row">
      <div class="col-12">
        <section class="d-flex justify-content-start banner-size rounded coverImg"
          :style="{ 'background-image': 'url(' + profile?.coverImg + ')' }">
          <img class="img-relative profile-picture img-fluid" :src="profile?.picture"
            :alt="profile?.name + ' ' + profile?.id">
        </section>
      </div>
    </div>

    <div class="row p-3 mt-5">
      <div class="col-md-3"></div>
      <div class="col-md-8 p-3 bio-background rounded d-flex justify-content-between align-items-end">
        <section>
          <h3 class="pb-3">Name: {{ profile?.name }}</h3>
          <h5>Biography:</h5>
          <p>{{ profile?.bio }}</p>
        </section>
        <button data-bs-toggle="modal" data-bs-target="#editAccountModal" v-if="profile?.id == account?.id"
          class="btn btn-primary" title="Edit Profile"><i class="mdi mdi-pencil"></i></button>
      </div>
    </div>
  </div>

  <Modal id="editAccountModal">
    <template #header>
      <h5>Edit Profile!</h5>
    </template>
    <template #modalBody>
      <EditAccountForm />
    </template>
  </Modal>
</template>

<script>
import { useRoute } from "vue-router"
import { computed, watchEffect } from 'vue'
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { profilesService } from "../services/ProfilesService.js";
import { AppState } from "../AppState.js";

export default {
  setup() {
    const route = useRoute()

    async function getProfileById() {
      try {
        const profileId = route.params.accountId
        // logger.log("[logging profile Id]", profileId)
        await profilesService.getProfileById(profileId)
      } catch (error) {
        logger.log(error.message)
        Pop.error(error.message)
      }
    }


    watchEffect(() => {
      route.params.profileId
      getProfileById()
    })

    return {
      route,
      profile: computed(() => AppState.activeProfile),
      account: computed(() => AppState.account)
    };
  },
};
</script>

<style>
.img-relative {
  position: relative;
  bottom: -220px;
  left: 10vw;
}

@media screen and (max-width: 768px) {
  .img-relative {
    bottom: -150px;
    left: 15vw;
  }
}

.profile-picture {
  height: 200px;
  width: 200px;
  border-radius: 50%;
  border-style: solid;
  border-color: #0e0d0d;
  border-width: 2px;
}

.coverImg {
  background-size: cover;
  background-position: center;
}

.banner-size {
  height: 35vh;
  /* width: 100vw; */
}

.bio-background {
  background-image: url('../assets/img/ComicTraderCardBG_001.png');
  border: 1px solid rgba(255, 251, 251, 1);
}
</style>