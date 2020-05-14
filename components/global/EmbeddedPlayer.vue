<template>
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
</template>
<script>
export default {
  data() {
    return {
      isMaxWidth: false
    };
  },
  created() {
    this.checkIsMaxWidth();
    window.addEventListener("resize", this.checkIsMaxWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkIsMaxWidth);
  },
  methods: {
    checkIsMaxWidth() {
      if (window.innerWidth >= 700) {
        this.isMaxWidth = true;
      } else {
        this.isMaxWidth = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
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
  width: 100%;
}
</style>
