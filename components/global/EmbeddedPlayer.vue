<template>
  <client-only>
    <iframe
      rel="preconnect"
      title="Embedded Bandcamp Music Player"
      style="border: 0; height: 120px;"
      :class="{'desktop-embedded-player': isMaxWidth, 'mobile-embedded-player': !isMaxWidth}"
      src="https://bandcamp.com/EmbeddedPlayer/album=2807622445/size=large/bgcol=333333/linkcol=ffffff/tracklist=false/artwork=small/transparent=true/"
      seamless
    >
      <a href="https://cuckooandthebirds.bandcamp.com/album/twin-stars">
      Twin Stars by Cuckoo and the Birds
      </a>
    </iframe>
    <!-- light theme version -->
    <!-- <iframe
      style="border: 0; width: 100%; height: 120px;"
      src="https://bandcamp.com/EmbeddedPlayer/album=2807622445/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
      seamless
      ><a href="http://cuckooandthebirds.bandcamp.com/album/twin-stars"
        >Twin Stars by Cuckoo and the Birds</a
      ></iframe
    > -->
  </client-only>
</template>
<script>
export default {
  data() {
    return {
      isMaxWidth: false,
    };
  },
  beforeMount() {
    this.checkIsMaxWidth();
    window.addEventListener("resize", this.checkIsMaxWidth);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkIsMaxWidth);
  },
  methods: {
    checkIsMaxWidth() {
      // has to be 700px; that's the full width of the embedded player
      if (window.innerWidth >= 700) {
        this.isMaxWidth = true;
      } else {
        this.isMaxWidth = false;
      }
    },
  },
};
</script>

<style scoped>
iframe {
  display: block;
  position: fixed;
  left: 0;
  bottom: 0;
  transition: width 200ms linear;
}
.desktop-embedded-player {
  width: 700px;
}
.mobile-embedded-player {
  @apply w-full;
}
</style>
