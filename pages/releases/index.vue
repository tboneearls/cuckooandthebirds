<template>
  <main
    id="releases"
    class="font-default text-white"
  >
    <h1 class="text-center font-default text-4xl font-bold text-red-600 mb-8">
      Releases
    </h1>
    <section>
      <div
        v-for="release in releases"
        :key="release.id"
      >
        <pre>
          {{ release }}
        </pre>
        <image-link
          :image-src="release.cldImgPath"
          :image-alt="release.alt"
          :image-href="`releases/${release.releaseId}`"
        />
        <text-card>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, nisi. Soluta ea asperiores delectus sint hic quod, exercitationem, explicabo omnis, facilis amet alias tenetur ipsam tempore autem inventore fuga facere?
        </text-card>
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
</style>
