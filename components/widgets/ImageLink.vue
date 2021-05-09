<template>
  <div>
    <!-- TODO: show some text on hover -->
    <a :href="imageHref">
      <template v-if="isCloudinaryImage">
        <client-only>
          <cld-image
            class="flex justify-center m-2"
            format="jpg"
            :public-id="imageSrc"
            :alt="imageAlt"
          >
            <cld-transformation
              width="400"
              quality="auto"
            />
          </cld-image>
        </client-only>
      </template>
      <template v-else>
        <img 
          :src="imageSrc" 
          :alt="imageAlt"
        >
      </template>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    imageHref: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    imageAlt: {
      type: String,
      required: true,
    },
    isCloudinaryImage: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
