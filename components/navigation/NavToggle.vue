<template>
  <div class="p-4 h-16">
    <button
      id="custom-toggler"
      class="flex items-center px-3 py-2 border rounded text-red-600 border-red-400 hover:text-teal-400 hover:border-teal-400"
      :class="{active: isToggleActive, inactive: !isToggleActive}"
      :aria-label="`${isToggleActive ? 'Close Navigation' : 'Open Navigation'}`"
      @click="handleToggle($event);"
    >
      <svg
        class="fill-current h-3 w-3"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isToggleActive: false,
      hoverClass: false
    };
  },
  methods: {
    handleToggle() {
      this.isToggleActive = !this.isToggleActive;
      this.$emit("toggleNavigation", this.isToggleActive);
    }
  }
};
</script>

<style>
</style>
