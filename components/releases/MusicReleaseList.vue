<template>
  <section>
    <div
      v-for="(release, key) in releases"
      :key="key"
    >
      <slot
        :title="release.title"
        :year="release.year"
        name="title-year"
      >
        <h2 class="text-red-600 text-center text-2xl font-semibold mb-4">
          {{ release.title }} ({{ release.year }})
        </h2>
      </slot>

      <div class="w-4/5 mx-auto">
        <div 
          class="mx-auto w-4/5 mb-4 md:w-1/2 md:float-left md:mr-2 md:mb-2"
        >
          <slot name="image">
            <a
              target="_blank"
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
          </slot>
        </div>
        <div class="px-8 mb-4">
          <slot name="description" />
        </div>
      </div>

      <TextCard>
        <div>
          <h2 class="text-red-600 text-2xl font-semibold mb-4">
            Credits:
          </h2>
          <slot name="credits">
            <p
              v-for="(member, index) in release.members"
              :key="'member' + index"
              class="px-8 text-xl"
            >
              {{ member }}
            </p>
            <br>
            <p
              v-for="(credit, index) in release.credits"
              :key="'credit' + index"
              class="px-8 text-xl"
            >
              {{ credit }}
            </p>
          </slot>
        </div>
      </TextCard>
    </div>
  </section>
</template>

<script>
import TextCard from "@/components/widgets/TextCard.vue";

const releases = [
  {
    imgsrc: "Twin%20Stars/twin-stars-album-art.jpg",
    year: 2019,
    "v-href": "twin-stars",
    title: "Twin Stars",
    href: "https://cuckooandthebirds.bandcamp.com/releases",
    // description:
    //   `Twin Stars is a project born in the aftermath of Tyler’s previous band breaking up. It explores the stages of coping with losing someone so close that a part of yourself seems lost, too.
    //   These songs encapsulate a newfound sense of agency after a toxic friendship ends with finality, and the necessary re-framing of identity that follows.
    //   In a similar sense, because these are the first five songs Tyler has written since high school, when the Cuckoo and the Birds moniker was created, they can be viewed as a thought experiment to test how far this reinvigorated expression can go.
    //   They were tracked, mixed, and mastered by Zachary Taylor, whose recording prowess and drumming wizardry take the songs to new heights. They were recorded DIY style over several nights in the comfort of Zach’s basement.
    //   Featuring only two musicians, the raw, understated texture becomes a distinguishing character of Twin Stars.`,
    members: [
      "Tyler Earls: Vocals, Guitars, Bass",
      "Zachary Taylor: Drums, Percussion",
    ],
    credits: [
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
};
</script>

<style>
/* need this style because I can't target the image in tailwind */
.cld-image > img {
  width: 95%;
}
</style>
