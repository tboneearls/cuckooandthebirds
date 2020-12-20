<template>
  <div 
    class="flex flex-row my-8"
    :class="imageFirst ? '' : 'flex-row-reverse'"
  >
    <div class="self-center max-w-md px-2">
      <slot 
        name="image" 
      />
    </div>
    <div class="self-center px-2">
      <slot 
        name="text" 
      />
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
