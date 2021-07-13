<template>
  <!-- need to implement more robust a11y -->
  <!-- https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton -->
  <div class="w-full">
    <div class="flex items-center">
      <button
        v-if="childLinks && childLinks.length > 0"
        :data-parent-path="parentPath"
        class="flex items-center justify-center my-1 p-0 sm:mx-2 sm:my-0 sm:pl-2 sm:pr-1 text-lg group hover:opacity-100 rounded-sm w-full sm:w-auto"
        @click="handleDropdownClick()"
      >
        <span class="group-hover:text-cyan-300">{{ parentLabel }}</span>
        <div
          class="inline-block arrow-right mx-2 group-hover:border-l-cyan-300 transition-transform"
          :class="{ down: showChildren }"
        />
      </button>
    </div>
    <transition
      name="fade"
      mode="in-out"
    >
      <div
        v-if="childLinks && childLinks.length > 0"
        v-show="showChildren"
      >
        <ul
          class="static sm:absolute top-full z-20 flex flex-col sm:border sm:border-gray-600 bg-coolgray-900"
        >
          <nav-child-link 
            v-for="(childLink, childLinkIndex) in childLinks"
            :key="`nav-child-link-${childLinkIndex}`"
            :child-link="childLink"
            :parent-path="parentPath"
            :is-last="childLinkIndex === childLinks.length - 1"
          />
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavChildLink from "./NavChildLink.vue";

export default {
  components: {
    NavChildLink,
  },
  props: {
    childLinks: {
      // TODO: add type definition for data structure. Array<ChildLink>
      type: Array,
      required: true,
    },
    parentLabel: {
      type: String,
      required: true,
    },
    parentPath: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showChildren: false,
    };
  },
  computed: {
    ...mapState(["isNavActive"]),
  },
  watch: {
    isNavActive(newValue) {
      if (newValue === false) {
        setTimeout(() => {
          this.showChildren = false;
        }, 0);
      }
    },
  },
  methods: {
    handleDropdownClick() {
      this.showChildren = !this.showChildren;
      this.$emit("toggle");
    },
    getFullChildPath(childPath) {
      return this.parentPath + childPath;
    },
  },
};
</script>

<style scoped>
.arrow-right {
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 8px solid white;
}
.arrow-right.down {
  transform: rotate(90deg);
}
</style>
