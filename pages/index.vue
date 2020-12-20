<template>
  <div>
    <text-card>
      <div>
        <h1
          class="text-center font-default text-4xl font-bold text-red-600 mb-8"
        >
          Our Story
        </h1>
        <!-- TODO: add splash image as a banner of sorts -->
        <section class="text-white text-xl">
          <text-image-card
            v-for="(item, index) in textData"
            :key="'text-item-' + index"
            :image-first="index % 2 === 0"
          >
            <template #image>
              <img
                :src="item.imgSrc"
                :alt="item.imgAlt"
              >
            </template>
            <template #text>
              <p
                v-if="item.html !== undefined"
                v-html="item.html"
              />
              <p v-else>
                {{ item.text }}
              </p>
            </template>
          </text-image-card>
        </section>
      </div>
    </text-card>
  </div>
</template>

<script>
import TextCard from "@/components/widgets/TextCard.vue";
import TextImageCard from "@/components/widgets/TextImageCard.vue";
import textData from "../assets/homePageTextData.json";

export default {
  components: {
    TextCard,
    TextImageCard,
  },
  data() {
    return {
      textData,
    };
  },
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px #111827, 1px -1px #111827, -1px 1px #111827,
    -1px -1px #111827;
}
</style>
