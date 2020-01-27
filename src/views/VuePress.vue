<template>
  <TextCard>
    <main id="press">
      <h1>Cuckoo and the Birds Press</h1>
      <h2>Interviews:</h2>
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

  #press {
    h2 {
      text-align: left;
    }
    a {
      display: block;
      font-size: 22px;
      text-align: left;
      padding: 0 20px;
    }
  }
</style>
