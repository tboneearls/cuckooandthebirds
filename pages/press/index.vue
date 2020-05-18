<template>
  <TextCard>
    <main id="press">
      <h1 class="font-default text-4xl font-bold text-red-600">
        Press
      </h1>
      <h2 class="text-red-600 text-2xl font-semibold">
        Interviews:
      </h2>
      <template v-for="(interview, index) in interviews">
        <a
          :key="'interview' + index"
          :href="interview.href"
          rel="noreferrer"
          target="_blank"
          class="block text-white text-xl px-8 mb-2 hover:text-teal-400 hover:opacity-100"
        >
          {{ interview.text }}
        </a>
      </template>

      <h2 class="text-red-600 text-2xl font-semibold">
        Reviews:
      </h2>
      <template v-for="(review, index) in reviews">
        <a
          :key="'review' + index"
          :href="review.href"
          rel="noreferrer"
          target="_blank"
          class="block text-white text-xl px-8 mb-2 hover:text-teal-400 hover:opacity-100"
        >
          {{ review.text }}
        </a>
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
  components: {
    TextCard,
  },
  data() {
    return {
      interviews,
      reviews,
    };
  },
});
</script>

<style lang="scss" scoped>
// @import "~/assets/scss/global.scss";
// #press {
//   h2 {
//     text-align: left;
//   }
//   a {
//     display: block;
//     color: $softwhite;
//     font-size: 22px;
//     text-align: left;
//     padding: 0 20px;
//   }
// }
</style>
