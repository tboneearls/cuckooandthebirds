<template>
  <div id="app">
    <nav-bar />

    <!-- clears nav height above each view -->
    <router-view />

    <vue-footer />
  </div>
</template>
<script>
import NavBar from "@/components/navigation/NavBar.vue";
import VueFooter from "@/components/global/VueFooter.vue";

export default {
  name: "app",
  components: {
    NavBar,
    VueFooter,
  },
};
</script>

<style lang="scss">
@import "src/scss/global.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $red;
  margin-top: calc(#{$navHeight} + 10px);
}
</style>
