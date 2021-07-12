<template>
  <div class="w-full">
    <div class="flex items-center">
      <button
        v-if="childLinks && childLinks.length > 0"
        :ref="`parent-dropdown-${parentIndex}`"
        class="flex items-center justify-center m-0 p-0 sm:mx-2 sm:pl-2 sm:pr-1 text-lg group hover:opacity-100 rounded-sm w-full sm:w-auto"
        @click="handleDropdownClick()"
      >
        <span class="group-hover:text-cyan-300">{{ parentLabel }}</span>
        <div
          class="inline-block arrow-right mx-2 group-hover:border-l-cyan-300"
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
          <li
            v-for="(childLink, childLinkIndex) in childLinks"
            :key="'parent-child-link-' + childLinkIndex"
            class="inline-block text-center sm:text-left border-gray-700 w-full mx-auto sm:mx-0 sm:w-auto sm:border-gray-600"
            :class="{
              'sm:border-b': childLinkIndex < childLinks.length - 1
            }"
          >
            <hr
              :class="{ 'mt-2': childLinkIndex === 0 }"
              class="sm:hidden border-gray-700 w-4/5 mx-auto"
            >
            <router-link
              :to="childLink.href"
              :tabindex="showChildren ? 0 : -1"
              class="child-link block px-4 py-2 text-sm sm:text-md hover:text-cyan-300 hover:opacity-100 rounded-sm w-full"
            >
              {{ childLink.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
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
    parentIndex: {
      type: Number,
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
  transition: transform 0.1s linear;
}
.arrow-right.down {
  transform: rotate(90deg);
  transition: transform 0.1s linear;
}
</style>
