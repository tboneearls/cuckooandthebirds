<template>
  <!-- TODO: implement mobile design of nav bar -->
  <div>
    <nav
      v-show="isNavActive"
      id="nav-bar"
    >
      <ul>
        <li
          v-for="(section, index) in sections"
          :key="index"
        >
          <router-link
            :to="section.href"
            :tabindex="isNavActive ? 0 : -1"
            class="px-1"
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
