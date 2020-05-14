<template>
  <main id="music">
    <h1 class="text-red-600">Releases</h1>
    <br>
    <music-release-list>
      <!-- TODO: put this in child component? -->
      <div slot="description">
        <p>
          Twin Stars is a project born in the aftermath of Tyler’s previous band breaking up. It explores the stages of coping with losing someone so close that a part of yourself seems lost, too.
        </p>
        <br>
        <p>
          These songs encapsulate a newfound sense of agency after a toxic friendship ends with finality, and the necessary re-framing of identity that follows.
        </p>
        <br>
        <p>
          In a similar sense, because these are the first five songs Tyler has written since high school, when the Cuckoo and the Birds moniker was created, they can be viewed as a thought experiment to test how far this reinvigorated expression can go.
        </p>
        <br>
        <p>
          They were tracked, mixed, and mastered by Zachary Taylor, whose recording prowess and drumming wizardry take the songs to new heights. They were recorded DIY style over several nights in the comfort of Zach’s basement.
        </p>
        <br>
        <p>
          Featuring only two musicians, the raw, understated texture becomes a distinguishing character of Twin Stars.
        </p>
      </div>
      <!-- TODO: use scoped slots here -->
      <!-- <template #title></template>
      <template #image>
        <router-link
          :to="`music/${release.v-href}`">
          <cld-image
            :publicId="`${release.imgsrc}`">
            <cld-transformation width="700" crop="scale" />
          </cld-image>
        </router-link>
      </template> -->
    </music-release-list>
  </main>
</template>

<script>
import MusicReleaseList from "@/components/releases/MusicReleaseList.vue";

export default ({
  components: {
    MusicReleaseList,
  },
});
</script>

<style lang="scss" scoped>

#music {
  .description {
    font-size: 18px !important;
  }
  .credits p {
    font-size: 16px !important;
  }
}

</style>
