<template>
  <div id="app"
    >
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

<style>
body {
  padding: 0;
  margin: 0;
  margin-top: 4rem;
  padding-top: 4rem;
  background-color: rgb(45, 55, 72);
  background-color: rgb(26, 32, 44);
}
body *:focus {
  outline: 0;
  box-shadow: 0 0 3pt 2pt rgb(178, 245, 234);
  /* outline: rgb(178, 245, 234) dotted 2px; */
  border-color: transparent;
}
body.dark {
  background-color: rgb(26, 32, 44);
}
h1 {
  text-align: center;
}


</style>
