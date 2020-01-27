<template>
  <footer>
    <br/>
    <social-media-icons></social-media-icons>
    <h6 v-html="footerText"></h6>
  </footer>
</template>

<script>
import SocialMediaIcons from "@/components/widgets/SocialMediaIcons.vue";

export default {
  components: {
    SocialMediaIcons,
  },
  computed: {
    footerText() {
      const year = new Date().getFullYear();
      return `&copy; ${year} Cuckoo and the Birds`;
    },
  },
};
</script>

<style lang="scss">

</style>
