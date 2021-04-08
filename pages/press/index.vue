<template>
  <text-card>
    <main id="press">
      <h1 class="text-center font-default text-4xl font-bold text-red-600 mb-8">
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
          class="interview-link"
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
          class="review-link"
        >
          {{ review.text }}
        </a>
      </template>
    </main>
  </text-card>
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
    text: "V3 Media (April 2021)",
    href: "https://v13.net/2021/04/cuckoo-and-the-birds-go-retro-with-their-video-game-themed-show-me-the-dark-music-video-premiere",
  },
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

<style scoped>
.interview-link, .review-link {
  @apply inline-block text-white text-xl px-2 mx-6 my-2 hover:text-cyan-300 rounded-sm;
}
</style>
