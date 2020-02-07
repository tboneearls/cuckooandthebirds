<template>
  <iframe
    style="border: 0; width: 100%; height: 120px;"
    src="https://bandcamp.com/EmbeddedPlayer/album=2807622445/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
    seamless>
    <a href="http://cuckooandthebirds.bandcamp.com/album/twin-stars">
      Twin Stars by Cuckoo and the Birds
    </a>
  </iframe>
</template>
<script>
export default {
};
</script>

<style lang="scss" scoped>
  iframe {
    position: fixed;
    left: 0;
    bottom: 0;
    transition: width 200ms linear;
  }
</style>
