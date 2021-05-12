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
        <div class="mx-auto w-4/5 mb-4 md:w-1/2 md:float-left md:mr-8 md:mb-2">
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
          <template v-for="(description, index) in release.descriptions">
            <p
              :key="'description-' + index"
              class="text-xl"
            >
              {{ description }}
            </p>
            <br :key="'description-break-' + index">
          </template>
        </div>
      </div>

      <text-card>
        <div>
          <h2 class="text-red-600 text-2xl font-semibold mb-4">
            Credits:
          </h2>
          <div class="my-4">
            <p
              v-for="(performer, index) in release.performingCredits"
              :key="'performer-' + index"
              class="px-8 text-xl"
            >
              {{ performer }}
            </p>
          </div>
          <div
            v-if="release.videoCredits.length > 0"
            class="my-4"
          >
            <p
              v-for="(videoCredit, index) in release.videoCredits"
              :key="'video-credit-' + index"
              class="px-8 text-xl"
            >
              {{ videoCredit }}
            </p>
          </div>
          <div class="my-4">
            <p
              v-for="(performingCredit, index) in release.recordingCredits"
              :key="'performing-credit-' + index"
              class="px-8 text-xl"
            >
              {{ performingCredit }}
            </p>
          </div>
        </div>
      </text-card>
    </section>
  </main>
</template>

<script>
import TextCard from "@/components/widgets/TextCard.vue";
import releaseDetailsData from "../../assets/data/releases/releaseDetailsData.json";

export default {
  components: {
    TextCard,
  },
  async asyncData({ params, error }) {
    const releaseId = params.slug;
    if (releaseId in releaseDetailsData === false) {
      return error({ statusCode: 404, message: `${releaseId} does not exist` });
    }
    return { releaseId };
  },
  computed: {
    release() {
      if (this.releaseId in releaseDetailsData) {
        return releaseDetailsData[this.releaseId];
      }
      // in practice, this should never happen because asyncData creates the 404 response for us.
      throw new Error(`${this.releaseId} is not a valid release id.`);
    },
  },
  mounted() {
    const releaseLinks = document.querySelectorAll(".release-link");
    for (let i = 0; i < releaseLinks.length; i++) {
      let releaseLink = releaseLinks[i];
      releaseLink.addEventListener("focus", this.addFocusStyleToParent);
      releaseLink.addEventListener("blur", this.removeFocusStyleFromParent);
    }
  },
  destroyed() {
    const releaseLinks = document.querySelectorAll(".release-link");
    for (let i = 0; i < releaseLinks.length; i++) {
      let releaseLink = releaseLinks[i];
      releaseLink.removeEventListener("focus", this.addFocusStyleToParent);
      releaseLink.removeEventListener("blur", this.removeFocusStyleFromParent);
    }
  },
  methods: {
    addFocusStyleToParent(e) {
      e.target.parentElement.style.boxShadow = "0 0 3pt 2pt rgb(178, 245, 234)";
    },
    removeFocusStyleFromParent(e) {
      e.target.parentElement.style.boxShadow = "";
    },
  },
};
</script>
