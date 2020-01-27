<template>
  <div class="text-card">
    <slot></slot>
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
  .text-card {
    max-width: 80vw;
    margin: 0 auto;
  }
</style>
