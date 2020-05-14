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
  created() {
    this.checkIsMobile();
    window.addEventListener("resize", this.checkIsMobile);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkIsMobile);
  },
  methods: {
    checkIsMobile() {
      let isMobile;
      if (window.innerWidth <= this.$store.state.mobileMaxWidth) {
        isMobile = true;
      } else {
        isMobile = false;
      }
      // only commit mutation when value in store needs to be changed
      if (isMobile !== this.$store.state.isMobile) {
        this.$store.commit("resize", isMobile);
      }
    }
  },
};
</script>

<style lang="scss">
@import "~/assets/scss/variables.scss";
body {
  padding: 0;
  margin: 0;
  margin-top: 4rem;
  transition: padding 400ms $easing;
  background-color: $softblack;
  padding-top: 4rem;
}
h1, h2, span {
  color: $red;
}
h1 {
  text-align: center;
}

</style>
