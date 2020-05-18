<template>
  <div class="text-card font-default">
    <slot />
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
  h1 {
    margin-bottom: 24px;
  }
  h2 {
    margin-bottom: 12px;
  }
  p {
    text-align: left;
  }
  .text-card {
    max-width: 80vw;
    margin-left: auto;
    margin-right: auto;
  }
</style>
