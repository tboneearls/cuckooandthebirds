<template>
  <footer style="margin-bottom: 125px;">
    <br/>
    <social-media-icons></social-media-icons>
    <h6 v-html="footerText"></h6>
    <embedded-player></embedded-player>
  </footer>
</template>

<script>
import SocialMediaIcons from "@/components/widgets/SocialMediaIcons.vue";
import EmbeddedPlayer from "@/components/global/EmbeddedPlayer.vue";

export default {
  components: {
    SocialMediaIcons,
    EmbeddedPlayer,
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
