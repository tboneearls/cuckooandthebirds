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
  @apply bg-coolgray-900;
  padding: 0;
  margin: 0;
}
body *:focus {
  outline: 0;
  box-shadow: 0 0 3pt 2pt rgb(178, 245, 234);
  border-color: transparent;
}

h1 {
  @apply mt-20;
  will-change: margin;
  transition: all 300ms ease-out 100ms;
}
body.nav-active h1 {
  @apply mt-40 sm:mt-20;
}

/* transitions */

.fade-enter-active {
  transition: all 400ms ease-out;
}
.fade-leave-active {
  transition: all 200ms ease-in;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
