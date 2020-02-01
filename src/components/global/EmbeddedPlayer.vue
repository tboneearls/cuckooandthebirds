<template>
  <iframe
    src="https://open.spotify.com/embed/album/5c9HeJ9tE2eUy9sqIc3fU4"
    @mouseover="width = 300;"
    @mouseleave="width = 80;"
    :width="width"
    height="80"
    frameborder="0"
    allowtransparency="true"
    allow="encrypted-media"></iframe>
</template>
<script>
export default {
  data() {
    return {
      width: 80,
    };
  },
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
