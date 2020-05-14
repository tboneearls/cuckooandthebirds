<template>
  <section>
    <div
      v-for="(release, key) in releases"
      :key="key"
    >
      <TextCard>
        <slot
          :title="release.title"
          :year="release.year"
          name="title-year"
          class="release-title"
        >
          <h2 class="text-red-600">{{ release.title }} ({{ release.year }})</h2>
        </slot>
      </TextCard>

      <div class="release-container">
        <div 
          :class="{'mobile-release-image': $store.state.isMobile, 'desktop-release-image': !$store.state.isMobile}"
          class="release-image"
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
                  :public-id="release.imgsrc"
                >
                  <cld-transformation
                    width="400"
                    crop="scale"
                  />
                </cld-image>
              </client-only>
            </a>
            <span class="text-red-600 italic">Artwork by Breanda Fedie</span>
          </slot>
        </div>
        <div class="release-description">
          <slot name="description" />
        </div>
      </div>

      <TextCard>
        <div class="credits">
          <h2 class="text-red-600">Credits:</h2>
          <slot name="credits">
            <p
              v-for="(credit, index) in release.lineup"
              :key="index"
            >
              {{ credit }}
            </p>
            <br>
          </slot>

          <p>Songs written by Tyler Earls</p>
          <p>Tracked, Mixed, and Mastered by Zachary Taylor</p>
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
    lineup: [
      "Tyler Earls: Vocals, Guitars, Bass",
      "Zachary Taylor: Drums, Percussion",
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
      imgwidth: 0,
    };
  },
};
</script>

<style lang="scss">
  .mobile-release-image {
    width: 80%;
    margin: 0 auto;
    float: none;
    img {
      width: 100%;
      margin: 10px 0 !important;
    }
  }
  a:hover {
    opacity: 0.7;
  }
  .inline {
    display: inline;
  }
  .credits {
    h2 {
      text-align: left !important;
      font-size: 20px;
      margin-bottom: 16px;
    }
  }
  .release-title {
    text-align: center;
  }
  .release-container {
    max-width: 80vw;
    margin: 0 auto;
  }
  .desktop-release-image {
    float: left;
    width: 50%;
    img {
      width: calc(100% - 20px * 2);
    }
  }
  .release-image {
    text-align: center;
    height: max-content;
    margin-bottom: 4px;
    img {
      margin: 20px;
    }
  }
  .release-description {
    padding: 12px;
    height: max-content;
    text-align: left;
    margin-bottom: 4px;
  }
</style>
