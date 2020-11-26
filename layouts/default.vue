<template>
  <div id="app">
    <nav-bar />

    <nuxt />

    <vue-footer />
  </div>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import VueFooter from "../components/global/VueFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    VueFooter,
  },
};
</script>

<style>
body {
  padding: 0;
  margin: 0;
  margin-top: 4.25rem;
  transition: margin 300ms ease;
  background-color: rgb(26, 32, 44);
}
body *:focus {
  outline: 0;
  box-shadow: 0 0 3pt 2pt rgb(178, 245, 234);
  border-color: transparent;
}
</style>
