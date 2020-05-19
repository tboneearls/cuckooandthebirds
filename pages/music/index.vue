<template>
  <main 
    id="music"
    class="font-default text-white"
  >
    <h1 class="text-center font-default text-4xl font-bold text-red-600 mb-4">
      Releases
    </h1>
    <section>
      <div
        v-for="(release, key) in releases"
        :key="key"
      >
        <h2 class="text-red-600 text-center text-2xl font-semibold mb-4">
          {{ release.title }} ({{ release.year }})
        </h2>

        <div class="w-4/5 mx-auto">
          <div 
            class="mx-auto w-4/5 mb-4 md:w-1/2 md:float-left md:mr-2 md:mb-2"
          >
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
                  :public-id="release.imgsrc"
                >
                  <cld-transformation
                    width="400"
                    crop="scale"
                  />
                </cld-image>
              </client-only>
            </a>
            <span class="block text-center text-red-600 text-lg italic">Artwork by Breanda Fedie</span>
          </div>
          <div class="px-8 mb-4">
            <template
              v-for="(paragraph, index) in release.descriptions"
            >
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

        <TextCard>
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
        </TextCard>
      </div>
    </section>
  </main>
</template>

<script>
import TextCard from "@/components/widgets/TextCard.vue";

/*
  imgsrc - cloudinary image link
  year - year the release was made
  title - title of the release
  href - bandcamp link
  descriptions - array of paragraphs to describe the release
  members - array of personnel who played on the release with credit
  recordingCredits - array of recording credits
*/
const releases = [
  {
    imgsrc: "Twin%20Stars/twin-stars-album-art.jpg",
    year: 2019,
    "v-href": "twin-stars",
    title: "Twin Stars",
    href: "https://cuckooandthebirds.bandcamp.com/releases",
    descriptions: [
      "Twin Stars is a project born in the aftermath of Tyler’s previous band breaking up. It explores the stages of coping with losing someone so close that a part of yourself seems lost, too.",
      "These songs encapsulate a newfound sense of agency after a toxic friendship ends with finality, and the necessary re-framing of identity that follows.",
      "In a similar sense, because these are the first five songs Tyler has written since high school, when the Cuckoo and the Birds moniker was created, they can be viewed as a thought experiment to test how far this reinvigorated expression can go.",
      "They were tracked, mixed, and mastered by Zachary Taylor, whose recording prowess and drumming wizardry take the songs to new heights. They were recorded DIY style over several nights in the comfort of Zach’s basement.",
      "Featuring only two musicians, the raw, understated texture becomes a distinguishing character of Twin Stars.",
    ],
    members: [
      "Tyler Earls: Vocals, Guitars, Bass",
      "Zachary Taylor: Drums, Percussion",
    ],
    recordingCredits: [
      "Songs written by Tyler Earls",
      "Tracked, Mixed, and Mastered by Zachary Taylor",
    ],
  },
];

export default {
  components: {
    TextCard,
  },
  data() {
    return {
      releases,
    };
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
    }
  }
};
</script>

<style>
/* need this style because I can't target the image in tailwind */
.cld-image > img {
  width: 95%;
}
.cld-image > img:hover {
  opacity: 70%;
}
</style>
