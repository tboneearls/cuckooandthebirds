<template>
  <div id="app">
    <header>
      <nav-bar
        id="nav-bar"
        ref="navbar"
        :inert="!navActive"
        v-show="navActive"/>
      <nav-toggle
        class="nav-toggle"
        @toggle="handleToggle();"/>
    </header>

    <!-- clears nav height above each view -->
    <router-view />

    <vue-footer />
  </div>
</template>
<script>
// global
import VueFooter from "@/components/global/VueFooter.vue";

// navigation
import NavBar from "@/components/navigation/NavBar.vue";
import NavToggle from "@/components/navigation/NavToggle.vue";

export default {
  name: "app",
  data() {
    return {
      navActive: false,
    };
  },
  components: {
    NavBar,
    NavToggle,
    VueFooter,
  },
  methods: {
    handleToggle() {
      this.navActive = !this.navActive;

      if (this.navActive) {
        this.initializeFocus();
      }
    },
    initializeFocus() {
      const firstLink = document.querySelector("nav ul li:first-child a");
      firstLink.focus();
    },
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
