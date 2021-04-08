<template>
  <div
    class="flex flex-col sm:flex-row my-24 w-full justify-between"
    :class="imageFirst ? '' : 'sm:flex-row-reverse'"
  >
    <div class="p-4 self-center max-w-md w-full sm:w-1/2 text-red-500 text-center">
      <slot name="image" />
      <slot name="photo-credit" />
    </div>
    <div class="p-4 self-center w-full sm:w-1/2">
      <slot name="text" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    imageFirst: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
