<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
  <footer class="bg-dark grad">
    <div class="text-warning lighten-30">
      Made with 💀 by Michael Patience. Data on this site provided by Marvel. &copy; {{ new Date().getFullYear()
      }} Marvel.
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

.grad {
  background: linear-gradient(0deg, rgba(36, 36, 36, .3) 0%, rgba(1, 2, 3, 1) 50%);
}
</style>
