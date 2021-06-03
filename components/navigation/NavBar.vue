<template>
  <div
    id="nav-container"
    ref="nav-container"
    class="fixed z-100 flex items-center justify-end w-screen top-0 font-default text-white border border-gray-500 border-t-0 border-l-0 border-r-0 h-fit"
    :class="{'border-b-1 bg-coolgray-900': isNavActive, 'border-0 border-b-0 h-16': !isNavActive}"
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
            :key="'section-' + index"
            class="flex items-center mx-auto pt-2 sm:py-2 text-center w-1/3 border border-t-0 border-l-0 border-r-0 border-b-1 border-gray-600 sm:border-none sm:mx-0 sm:w-auto"
            :class="{'border-none': index === sections.length - 1, 'pb-2': (section.childLinks && section.childLinks.length === 0) || !section.showChildren}"
          >
            <router-link
              v-if="section.childLinks && section.childLinks.length === 0"
              :to="section.href"
              :tabindex="isNavActive ? 0 : -1"
              class="px-4 text-lg hover:text-cyan-300 hover:opacity-100 rounded-sm w-full sm:w-auto"
            >
              {{ section.name }}
            </router-link>
            <div 
              v-else
              class="w-full"
            >
              <div class="flex items-center">
                <router-link
                  :to="section.href"
                  :tabindex="isNavActive ? 0 : -1"
                  class="pl-4 pr-1 text-lg hover:text-cyan-300 hover:opacity-100 rounded-sm w-full sm:w-auto"
                >
                  {{ section.name }}
                </router-link>
                <button 
                  v-if="section.childLinks && section.childLinks.length > 0"
                  :ref="`section-dropdown-${index}`"
                  class="inline-block arrow-right mx-2"
                  :class="{'down': section.showChildren}"
                  @click="handleDropdownClick(section)"
                />
              </div>
              <div 
                v-if="section.childLinks && section.childLinks.length > 0"
                v-show="section.showChildren"
              >
                <ul class="static sm:absolute top-full z-20 flex flex-col sm:border sm:border-gray-600 bg-coolgray-900">
                  <li 
                    v-for="(childLink, childLinkIndex) in section.childLinks"
                    :key="'section-child-link-' + childLinkIndex"
                    class="inline-block text-center sm:text-left border-gray-700 w-full mx-auto sm:mx-0 sm:w-auto sm:border-gray-600"
                    :class="{'sm:border-b': childLinkIndex < section.childLinks.length - 1}"
                  >
                    <hr 
                      :class="{'mt-2': childLinkIndex === 0}"
                      class="sm:hidden border-gray-700 w-4/5 mx-auto"
                    >
                    <router-link
                      :to="childLink.href"
                      :tabindex="isNavActive ? 0 : -1"
                      :data-section="index"
                      class="child-link block px-4 py-2 text-sm sm:text-md hover:text-cyan-300 hover:opacity-100 rounded-sm w-full"
                    >
                      {{ childLink.name }}
                    </router-link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </transition>
    <nav-bar-toggle />
  </div>
</template>

<script>
import { mapState } from "vuex";
import NavBarToggle from "./NavBarToggle.vue";

// TODO: add sections to setup hook when Vue 3.x is released
/*
 * href: router-link url
 * name: route name that will appear on nav bar
 */
const sections = [
  {
    href: "/",
    name: "Bio",
    childLinks: [],
    showChildren: false,
  },
  {
    href: "/releases",
    name: "Releases",
    childLinks: [
      {
        href: "/releases/twin-stars",
        name: "Twin Stars",
      },
      {
        href: "/releases/show-me-the-dark",
        name: "Show Me The Dark",
      },
    ],
    showChildren: false,
  },
  // {
  //   href: "/shows",
  //   name: "Shows",
  //   childLinks: [],
  // },
  {
    href: "/press",
    name: "Press",
    childLinks: [],
    showChildren: false,
  },
  {
    href: "/booking",
    name: "Booking",
    childLinks: [],
    showChildren: false,
  },
];

export default {
  components: {
    NavBarToggle,
  },
  data() {
    return {
      sections,
      navHeight: 0,
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
      } else {
        this.sections.map((section) => section.showChildren = false);
      }
      this.checkNavHeight();
    },
    navHeight(navHeight) {
      document.body.style.marginTop = `${navHeight + 20  }px`;
    },
  },
  mounted() {
    this.checkNavHeight();
    window.addEventListener("resize", this.checkNavHeight);
  },
  destroyed() {
    window.removeEventListener("resize", this.checkNavHeight);
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
        } else if (activeRouterLink.classList.contains("child-link")) {
          const sectionId = activeRouterLink.dataset.section;
          const dropdownButton = this.$refs[`section-dropdown-${sectionId}`][0];
          dropdownButton.click();
          this.$nextTick(() => {
            activeRouterLink.focus();
          });
        } else {
          activeRouterLink.focus();
        }
      });
    },
    checkNavHeight() {
      this.$nextTick(() => {
        const navContainer = this.$refs["nav-container"];
        this.navHeight = navContainer.offsetHeight;
      });
    },
    handleDropdownClick(section) {
      section.showChildren = !section.showChildren;
      this.checkNavHeight();
    },
  },
};
</script>

<style scoped>
#nav-container {
  will-change: border-bottom-width;
  transition: border-bottom-width 0.1s ease-in;
}
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
