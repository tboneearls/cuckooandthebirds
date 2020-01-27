<template>
  <TextCard>
    <main id="press">
      <h1>Press</h1>
      <h2>Interviews:</h2>
      <a
        href="https://www.killthemusic.net/blog/unsigned-spotlight-cuckoo-and-the-birds"
        target="_blank">
        Kill the Music (September 2019)
      </a>
      <br/>
      <h2>Reviews:</h2>
      <a
        href="https://www.ventsmagazine.com/2019/08/30/premiere-cuckoo-and-the-birds-streams-new-album-twin-stars"
        target="_blank">
        Vents Magazine (August 2019)
      </a>
    </main>
  </TextCard>
</template>

<script>
import TextCard from "@/components/widgets/TextCard.vue";

export default ({
  components: {
    TextCard,
  },
});
</script>

<style lang="scss">

  #press {
    h2 {
      text-align: left;
    }
    a {
      display: block;
      font-size: 22px;
      text-align: justify;
      padding: 0 20px;
    }
  }
</style>
