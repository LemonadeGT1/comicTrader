<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark navGradient px-3">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      <div class="d-flex flex-column align-items-center">
        <img alt="logo" src="../assets/img/ComicTrader.png" height="45" />
      </div>
    </router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
      aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto">
        <li>
          <router-link :to="{ name: 'Home' }" class="btn text-warning lighten-30 selectable text-uppercase">
            Home
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'About' }" class="btn text-warning lighten-30 selectable text-uppercase">
            About
          </router-link>
        </li>
      </ul>
      <!-- LOGIN COMPONENT HERE -->
      <Login />
    </div>
  </nav>
</template>

<script>
import Login from './Login.vue'
export default {
  setup() {
    return {}
  },
  components: { Login }
}
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-warning);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

.navGradient {
  background: linear-gradient(180deg, rgb(36, 36, 36) 0%, rgba(1, 2, 3, 1) 50%);
}

@media screen and (min-width: 768px) {
  nav {
    height: 64px;
  }
}
</style>
