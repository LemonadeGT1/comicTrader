<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark">
    <div class="text-warning lighten-30">
      Made with 💀 by Michael Patience
    </div>
  </footer>

  <Modal id="ViewComicModal">
    <template #header>
      {{ AppState?.activeComic.title }}
    </template>
    <template #modalBody>
      <ViewComicDetails />
    </template>
  </Modal>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      AppState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root {
  --main-height: calc(100vh - 32px - 64px);
}


footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
