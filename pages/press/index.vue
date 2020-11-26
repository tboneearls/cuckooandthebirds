<template>
  <TextCard>
    <main id="press">
      <h1 class="text-center font-default text-4xl font-bold text-red-600 mb-4">
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
          class="block text-white text-xl px-8 my-2 hover:text-teal-400 rounded-sm"
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
          class="block text-white text-xl px-8 my-2 hover:text-teal-400 rounded-sm"
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
