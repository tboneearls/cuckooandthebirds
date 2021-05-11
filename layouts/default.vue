<template>
  <div id="app">
    <nav-bar />

    <nuxt />

    <the-footer />
  </div>
</template>

<script>
import NavBar from "../components/navigation/NavBar.vue";
import TheFooter from "../components/global/TheFooter.vue";

export default {
  name: "App",
  components: {
    NavBar,
    TheFooter,
  },
};
</script>

<style>
body {
  @apply bg-coolgray-900 font-default p-0 m-0;
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
  /* 4 items in nav, 28 mt difference. mt change = nav items * 7 */
  @apply mt-48 pt-1 sm:mt-20 sm:pt-0;
}
p {
  line-height: 2rem !important;
  /* max-width: 50ch; */
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
