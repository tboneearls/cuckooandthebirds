<template>
  <main
    :id="`${releaseId}-release`"
    class="font-default text-white"
  >
    <section>
      <h1 class="text-red-600 text-center text-3xl font-semibold mb-4">
        {{ release.title }} ({{ release.year }})
      </h1>

      <div class="w-4/5 mx-auto">
        <div class="mx-auto w-4/5 mb-4 md:w-1/2 md:float-left md:mr-2 md:mb-2">
          <a
            target="_blank"
            class="release-link focus:shadow-none"
            rel="noreferrer"
            :aria-label="'Listen to ' + release.title"
            :href="release.href"
          >
            <client-only>
              <cld-image
                class="flex justify-center m-2"
                format="jpg"
                :public-id="release.imgsrc"
                :alt="release.alt"
              >
                <cld-transformation
                  width="400"
                  quality="auto"
                />
              </cld-image>
            </client-only>
          </a>
          <span
            class="block text-center text-red-600 text-lg italic"
          >Artwork by {{ release.artworkCredit }}</span>
        </div>
        <div class="px-8 mb-4">
          <template v-for="(paragraph, index) in release.descriptions">
            <p
              :key="'paragraph' + index"
              class="text-xl"
            >
              {{ paragraph }}
            </p>
            <br :key="'paragraph-break' + index">
          </template>
        </div>
      </div>

      <text-card>
        <div>
          <h2 class="text-red-600 text-2xl font-semibold mb-4">
            Credits:
          </h2>
          <p
            v-for="(member, index) in release.members"
            :key="'member' + index"
            class="px-8 text-xl"
          >
            {{ member }}
          </p>
          <br>
          <p
            v-for="(credit, index) in release.recordingCredits"
            :key="'credit' + index"
            class="px-8 text-xl"
          >
            {{ credit }}
          </p>
        </div>
      </text-card>
    </section>
  </main>
</template>

<script>
import TextCard from "@/components/widgets/TextCard.vue";
import releaseData from "../../assets/data/releaseData.json";

export default {
  components: {
    TextCard,
  },
  async asyncData({ params }) {
    const releaseId = params.slug;
    return { releaseId };
  },
  computed: {
    release() {
      if (this.releaseId in releaseData) {
        return releaseData[this.releaseId];
      }
      throw new Error(`${this.releaseId} is not a valid release id.`);
    },
  },
};
</script>
