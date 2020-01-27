<template>
  <TextCard>
    <main id="press">
      <h1>Press</h1>
      <br/>
      <h2>Interviews:</h2>
      <br/>
      <template v-for="(interview, index) in interviews">
        <a
          :key="'interview' + index"
          :href="interview.href"
          target="_blank">
          {{ interview.text }}
        </a>
        <br :key="'interview' + (interviews.length + index)"/>
      </template>

      <h2>Reviews:</h2>
      <br/>
      <template v-for="(review, index) in reviews">
        <a
          :key="'review' + index"
          :href="review.href"
          target="_blank">
          {{ review.text }}
        </a>
        <br :key="'review' + (reviews.length + index)"/>
      </template>
    </main>
  </TextCard>
</template>

<script>
import TextCard from "@/components/widgets/TextCard.vue";

// TODO: move these to a setup hook when Vue 3.x is released
const interviews = [
  {
    text: "Kill the Music (September 2019)",
    href: "https://www.killthemusic.net/blog/unsigned-spotlight-cuckoo-and-the-birds",
  },
];
const reviews = [
  {
    text: "Vents Magazine (August 2019)",
    href: "https://ventsmagazine.com/2019/08/30/premiere-cuckoo-and-the-birds-streams-new-album-twin-stars",
  },
];
export default ({
  data() {
    return {
      interviews,
      reviews,
    };
  },
  components: {
    TextCard,
  },
});
</script>

<style lang="scss">
@import "src/scss/global.scss";
#press {
  h2 {
    text-align: left;
  }
  a {
    display: block;
    color: $softwhite;
    font-size: 22px;
    text-align: left;
    padding: 0 20px;
    &:hover {
      color: $lightblue;
    }
  }
}
</style>
