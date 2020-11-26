<template>
  <div
    class="fixed top-0 right-0 z-10 float-right p-4 h-16 sm:float-none sm:static"
  >
    <button
      id="custom-toggler"
      class="group pt-1 px-1 rounded-sm"
      style="margin-top: -0.2rem;"
      :class="{ active: isNavActive, inactive: !isNavActive }"
      :aria-label="`${isNavActive ? 'Close Navigation' : 'Open Navigation'}`"
      @click="handleToggle($event)"
    >
      <div
        id="toggler-top"
        class="bg-red-600 group-hover:bg-cyan-300"
      />
      <div
        id="toggler-middle"
        class="bg-red-600 group-hover:bg-cyan-300"
      />
      <div
        id="toggler-bottom"
        class="bg-red-600 group-hover:bg-cyan-300"
      />
    </button>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState([
      "isNavActive",
    ]),
    bodyTopMargin() {
      const navContainer = document.getElementById("nav-container");
      const navHeight = navContainer.offsetHeight;
      let margin = `${navHeight + 4}px`;
      return margin;
    },
  },
  beforeMount() {
    window.addEventListener("resize", this.adjustBodyTopMargin);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.adjustBodyTopMargin);
  },
  methods: {
    handleToggle() {
      this.adjustBodyTopMargin();
      this.$store.commit("toggleNavActive");
    },
    adjustBodyTopMargin() {
      this.$nextTick(() => {
        if (this.isNavActive && window.innerWidth < 640) {
          document.body.style.marginTop = this.bodyTopMargin;
        } else {
          document.body.style.marginTop = "4.25rem"; // horizontal navHeight is 4rem (64px)
        }
      });
    },
  },
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
</style>
