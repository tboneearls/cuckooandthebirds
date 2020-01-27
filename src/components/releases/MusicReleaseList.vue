<template>
  <section>
    <div v-for="(release, index) in releases" :key="index">
      <slot :title="release.title" :year="release.year" name="title">
        <h2>{{ release.title }} ({{ release.year }})</h2>
      </slot>

      <br/>

      <slot name="image">
        <cld-image :publicId="release.imgsrc">
          <cld-transformation width="700" crop="scale" />
        </cld-image>
      </slot>

      <br/>
      <TextCard>
        <slot name="description">
          {{ release.description }}
        </slot>
      </TextCard>

      <br/>
      <TextCard>
        <div class="credits">
          <h2>Credits:</h2>
          <br/>
          <slot name="credits">
            <p v-for="(credit, index) in release.lineup" :key="index">
              {{ credit }}
            </p>
          </slot>
          <br/>

          <p>Songs written by Tyler Earls</p>
          <p>Tracked, Mixed, and Mastered by Zachary Taylor</p>
          <br/>

          <p>Artwork by Breanda Fedie</p>
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
    href: "twin-stars",
    title: "Twin Stars",
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
  data() {
    return {
      releases,
    };
  },
  components: {
    TextCard,
  },
};
</script>

<style lang="scss">
  .credits {
    h2 {
      text-align: left;
      font-size: 16px;
    }
  }
</style>
