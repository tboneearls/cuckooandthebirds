<template>
  <div
    id="nav-container"
    class="fixed flex items-center justify-end w-screen top-0 font-default text-white border border-gray-600 border-t-0 border-l-0 border-r-0 h-fit"
    :class="{'border-b-1 bg-coolgray-900': isNavActive, 'border-0 border-b-0': !isNavActive}"
  >
    <transition
      name="fade"
      mode="out-in"
    >
      <nav
        v-show="isNavActive"
        id="nav-bar"
        class="w-screen"
      >
        <ul class="flex flex-col h-auto justify-center sm:flex-row sm:justify-end">
          <li
            v-for="(section, index) in sections"
            :key="index"
            class="mx-auto py-2 text-center w-1/3 border border-t-0 border-l-0 border-r-0 border-b-1 border-gray-700 sm:border-none sm:mx-0 sm:w-auto"
            :class="index === sections.length - 1 ? 'border-none' : ''"
          >
            <router-link
              :to="section.href"
              :tabindex="isNavActive ? 0 : -1"
              class="px-4 text-lg hover:text-cyan-300 hover:opacity-100 rounded-sm"
            >
              {{ section.name }}
            </router-link>
          </li>
        </ul>
      </nav>
    </transition>
    <nav-toggle />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavToggle from "./NavToggle.vue";

// TODO: add sections to setup hook when Vue 3.x is released
/*
 * href: router-link url
 * name: route name that will appear on nav bar
 */
const sections = [
  {
    href: "/",
    name: "Bio",
  },
  {
    href: "/releases",
    name: "Releases",
  },
  // {
  //   href: "/shows",
  //   name: "Shows",
  // },
  {
    href: "/press",
    name: "Press",
  },
  {
    href: "/booking",
    name: "Booking",
  },
];

export default {
  components: {
    NavToggle,
  },
  data() {
    return {
      sections,
    };
  },
  computed: {
    ...mapState([
      "isNavActive",
    ]),
  },
  watch: {
    isNavActive(isActive) {
      if (isActive) {
        this.initializeFocus();
      }
    },
  },
  methods: {
    initializeFocus() {
      // need to use next tick to ensure tabindex is set to 0 before attempting to focus
      this.$nextTick(() => {
        const activeRouterLink = document.querySelector("a.nuxt-link-exact-active");
        if (activeRouterLink == null) {
          const firstRouterLink = document.querySelector("#navbar ul li:first-child a");
          if (firstRouterLink != null) {
            firstRouterLink.focus();
          }
        } else {
          activeRouterLink.focus();
        }
      });
    },
  },
};
</script>

<style scoped>
#nav-container {
  will-change: border-bottom-width;
  transition: border-bottom-width 0.1s ease-in;
}
</style>
