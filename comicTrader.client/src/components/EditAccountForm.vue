<template>
  <form @submit.prevent="editProfile()">
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input v-model="editable.name" type="text" class="form-control" id="name">
    </div>
    <div class="mb-3">
      <label for="picture" class="form-label">Picture</label>
      <input v-model="editable.picture" type="url" class="form-control" id="picture">
    </div>
    <div class="mb-3">
      <label for="coverImg" class="form-label">Cover Photo</label>
      <input v-model="editable.coverImg" type="url" class="form-control" id="coverImg">
    </div>
    <div class="mb-3">
      <label for="bio" class="form-label">Biography</label>
      <input v-model="editable.bio" type="text" class="form-control" id="bio">
    </div>
    <!-- <div class="mb-3">
      <label for="email" class="form-label">Email</label>
      <input v-model="editable.email" type="text" class="form-control" id="email">
    </div> -->
    <div class="modal-footer">
      <button type="Submit" class="btn btn-primary" data-bs-dismiss="modal">
        Submit Edits
      </button>
    </div>
  </form>
</template>

<script>
import { computed, ref, watchEffect } from 'vue';
import { Account } from '../models/Account.js';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { profilesService } from '../services/ProfilesService.js';

export default {

  setup() {
    const editable = ref({})
    watchEffect(() => {
      editable.value = { ...AppState.account }
    })
    return {
      editable,
      account: computed(() => AppState.account),

      async editProfile() {
        try {
          const profileData = editable.value
          // logger.log('EditAccountForm editProfile', profileData)
          await profilesService.editProfile(profileData)
        } catch (error) {
          logger.log(error)
          Pop.error(error)
        }
      }
    };
  },
};
</script>

<style></style>