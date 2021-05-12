<template>
  <main
    id="releases"
    class="font-default text-white"
  >
    <h1 class="text-center font-default text-4xl font-bold text-red-600 mb-8">
      Releases
    </h1>
    <!-- <text-card class="release-header-text">Hello friend. </text-card> -->
    <text-card class="release-header-text">If you want, you can click on the album artwork below to learn more about it!</text-card>
    <section class="flex flex-col md:flex-row justify-center">
      <div
        v-for="release in sortedReleases"
        :key="release.id"
      >
        <image-link
          class="mx-auto max-w-sm"
          :image-src="release.cldImgPath"
          :image-alt="release.alt"
          :image-href="`releases/${release.releaseId}`"
        >
          <text-card
            slot="link-text"
            class="mx-auto text-center"
          >
            {{ release.title }}
          </text-card>
        </image-link>
      </div>
    </section>
  </main>
</template>

<script>
import ImageLink from "@/components/widgets/ImageLink.vue";
import TextCard from "@/components/widgets/TextCard.vue";

import releases from "../../assets/data/releases/releaseSlugData.json";

export default {
  components: {
    ImageLink,
    TextCard,
  },
  data() {
    return {
      releases,
    };
  },
  computed: {
    sortedReleases() {
      return [...this.releases].sort((a, b) => a.year > b.year);
    },
  },
};
</script>

<style>
/* need this style because I can't target the image in tailwind */
.cld-image > img {
  width: 95%;
}
.cld-image > img:hover {
  opacity: 0.7;
}
.release-header-text {
  @apply my-4 text-xl mx-auto text-center max-w-65ch;
}
</style>
