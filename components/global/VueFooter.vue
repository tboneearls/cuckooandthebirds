<template>
  <footer>
    <br>
    <social-media-icons />
    <h6 v-html="footerText" />
    <embedded-player />
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
      const currentYear = new Date().getFullYear();
      return `&copy; 2019-${currentYear} &bull; Cuckoo and the Birds`;
    },
  },
};
</script>

<style lang="scss">
  footer {
    width: 100%;
    padding-bottom: 8px;
    margin-bottom: 120px !important; // to override body * style
  }
</style>
