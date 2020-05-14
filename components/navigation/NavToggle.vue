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

<style src="@/assets/css/tailwind.css">
/* // @import "~/assets/scss/global.scss";

// #custom-toggler {
//     background: none;
//     border: none;
//     position: fixed;
//     top: 20px;
//     right: 30px;
//     z-index: 99999;
//     padding: 5px;
//     border-radius: 3px;
//     transform: none;
//     opacity: 1;
//     cursor: pointer;
//     div {
//         width: 32px;
//         height: 2px;
//         margin-bottom: 8px;
//         background-color: $red;
//         transition: transform 500ms $easing, opacity 500ms;
//         will-change: transform, opacity;
//     }
//     #toggler-top {
//         margin-top: 4px;
//     }
//     #toggler-bottom {
//         margin-bottom: 4px;
//     }
// }
// .active {
//     #toggler-top {
//         transform: translateY(10px) rotate(-135deg);
//     }
//     #toggler-middle {
//         opacity: 0;
//         transform: rotate(135deg);
//     }
//     #toggler-bottom {
//         transform: translateY(-10px) rotate(-45deg);
//     }
// }
// .hover {
//     background-color: $lightblue !important;
//     transition: 0.2s ease;
// }
// @media (max-width: $S) {
//     #custom-toggler {
//         right: 12px;
//         div {
//             width: 30px;
//         }
//     }
// } */
</style>
