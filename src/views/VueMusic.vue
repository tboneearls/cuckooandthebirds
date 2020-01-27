<template>
  <main id="music">
    <h1>Cuckoo and the Birds Releases</h1>
    <br/>

    <music-release-list>
      <!-- todo: use scoped slots here -->
      <!-- <template #title></template>
      <template #image>
        <router-link
          :to="`music/${release.href}`">
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
import MusicReleaseList from "../components/releases/MusicReleaseList.vue";

export default ({
  components: {
    MusicReleaseList,
  },
});
</script>

<style lang="scss">
#music {
  .description {
    font-size: 18px !important;
  }
  .credits p {
    font-size: 14px !important;
  }
}

</style>
