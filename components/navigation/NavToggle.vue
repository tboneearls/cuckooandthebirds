<template>
  <div class="p-4 h-16">
    <button
      id="custom-toggler"
      class="pt-1 px-1 rounded-sm"
      style="margin-top: -0.2rem;"
      :class="{active: isToggleActive, inactive: !isToggleActive}"
      :aria-label="`${isToggleActive ? 'Close Navigation' : 'Open Navigation'}`"
      @click="handleToggle($event);"
      @mouseover="hoverClass = true;"
      @mouseleave="hoverClass = false;"
    >
      <div
        id="toggler-top"
        class="bg-red-600"
        :class="{hover: hoverClass}"
      />
      <div
        id="toggler-middle"
        class="bg-red-600"
        :class="{hover: hoverClass}"
      />
      <div
        id="toggler-bottom"
        class="bg-red-600"
        :class="{hover: hoverClass}"
      />
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

<style scoped>
#custom-toggler > div {
  width: 32px;
  height: 2px;
  margin-bottom: 8px;
  transition: transform 500ms ease, opacity 500ms;
  will-change: transform, opacity;
}
#toggler-top {
  margin-top: 4px;
}
#toggler-bottom {
  margin-bottom: 4px;
}
.active #toggler-top {
  transform: translateY(10px) rotate(-135deg);
}
.active #toggler-middle {
  opacity: 0;
  transform: rotate(135deg);
}
.active #toggler-bottom {
  transform: translateY(-10px) rotate(-45deg);
}
.hover {
  background-color: rgb(79, 209, 197) !important;
  transition: 0.2s ease;
}
</style>
