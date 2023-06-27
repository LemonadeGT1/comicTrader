<template>
  <div class="container-fluid mt-3 aboutBG">
    <div class="row justify-content-center aboutBlur">
      <div class="col-md-4 mt-4 aboutText">
        <h1>Comic Trader</h1>
        <p>This site is for Comic lovers, collectors, traders, and anyone else interested in Marvel comics. Here you may
          create a collection of comics you own, add comics to your Wish List, or offer up your comics for trade to
          others.</p>
        <p>This is a personal project, built to keep various coding skills warm. Some of the technologies utilized here
          are:
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Vue 3</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
          <li>Git</li>
          <li>Auth0</li>
          <li>Node.js</li>
          <li>Bootstrap</li>
          <li>The Marvel API</li>
        </ul>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {

    }
  }
}
</script>

<style>
.aboutBG {
  background-image: url('http://i.annihil.us/u/prod/marvel/i/mg/8/b0/4bb41a300dc99.jpg');
  background-size: cover;
}

.aboutBlur {
  /* From https://css.glass */
  background: rgba(32, 32, 32, 0.9);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  /* height: 84vh; */
}

.aboutText {
  text-shadow: 1px 1px 3px black;
}
</style>
