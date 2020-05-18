<template>
  <!-- TODO: implement mobile design of nav bar -->
  <div
    id="nav-container"
    class="fixed flex items-center justify-end w-screen top-0 font-default text-white h-16 transition-background-color duration-100 border-b border-t-0 border-l-0 border-r-0"
    :class="{'border border-gray-700 bg-gray-900': isNavActive, 'border-gray-900': !isNavActive}"
  >
    <nav
      id="nav-bar"
      class="opacity-0 transition-opacity duration-100"
      :class="{'opacity-100': isNavActive}"
    >
      <!-- add mobile-first styles here (flex columns) -->
      <ul class="flex">
        <li

          v-for="(section, index) in sections"
          :key="index"
          :class="index === sections.length - 1 ? 'mr-4' : ''"
        >
          <router-link
            :to="section.href"
            :tabindex="isNavActive ? 0 : -1"
            class="px-4 text-lg hover:text-teal-400 hover:opacity-100"
          >
            {{ section.name }}
          </router-link>
        </li>
      </ul>
    </nav>
    <nav-toggle
      @toggleNavigation="isNavActive = $event"
    />
  </div>
</template>

<script>
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
    href: "/music",
    name: "Music",
  },
  // {
  //   href: "/shows",
  //   name: "Shows",
  // },
  {
    href: "/press",
    name: "Press",
  },
  // {
  //   href: "/contact",
  //   name: "Contact",
  // },
];

export default {
  components: {
    NavToggle,
  },
  data() {
    return {
      isNavActive: false,
      sections,
    };
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
        const firstRouterLink = document.querySelector("#nav-bar ul li:first-child a");
        firstRouterLink.focus();
      });
    },
  },
};
</script>

<style src="@/assets/css/tailwind.css">
</style>
