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
            v-for="(item, index) in textAndImageData"
            :key="'text-item-' + index"
            :image-first="index % 2 === 0"
          >
            <template
              v-if="item.cloudinaryPublicId != null"
              #image
            >
              <cld-image
                format="jpg"
                :public-id="item.cloudinaryPublicId"
                :alt="item.imgAlt"
                loading="lazy"
              >
                <cld-placeholder />
                <cld-transformation
                  width="500"
                  quality="auto"
                />
              </cld-image>
            </template>
            <template #photo-credit>
              <p class="my-2">
                Photo by Sanjana Elina
              </p>
            </template>
            <template #text>
              <p
                v-if="item.html != null"
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
      photoGroupLengths: {
        // harmonica: 2,
        joy: 5,
        martin: 11,
        profile: 7,
        rickenbacker: 6,
        telecaster: 2,
      },
    };
  },
  computed: {
    shuffledPhotoGroups() {
      return Object.keys(this.photoGroupLengths).sort(() => 0.5 - Math.random());
    },
    textAndImageData() {
      const photoGroups = this.shuffledPhotoGroups;
      return textData.map((item, i) => {
        const photoGroupName = photoGroups[i];
        if (photoGroupName == null) return item;
        
        const photoGroupLength = this.photoGroupLengths[photoGroupName];
        const photoId = this.getRandomNumber(photoGroupLength);
        return {
          ...item,
          cloudinaryPublicId: `Sanjana%20Quarantine%20Photoshoot/${photoGroupName}/${photoId}`,
          imageAlt: `Sanjana Quarantine Photoshoot ${photoGroupName}-${photoId}`,
        };
      });
    },
  },
  methods: {
    getRandomNumber(max, min = 1) {
      return Math.floor(Math.random()*(max-min+1)+min);
    },
  },
};
</script>

<style scoped>
.text-shadow {
  text-shadow: 1px 1px #111827, 1px -1px #111827, -1px 1px #111827,
    -1px -1px #111827;
}
</style>
