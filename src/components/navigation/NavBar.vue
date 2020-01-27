<template>
  <!-- TODO: implement mobile design of nav bar -->
  <nav>
    <ul>
      <li v-for="(section, index) in sections"
        :key="index">
        <router-link
          :to="section.href"
          :tabindex="inert ? -1 : 0">
          {{section.name}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>

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
  data() {
    return {
      sections,
    };
  },
  props: ["inert"],
};
</script>

<style lang="scss" scoped>
@import "src/scss/global.scss";

a {
    font-size: 20px;
    padding: 0px 5px;
}
#headshot {
    display: block;
    margin-left: auto;
    margin-right: auto;
    padding-top: 15px;
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
}
@media (max-width: $S) {
    nav {
        ul {
            margin-right: 50px;
            li {
                padding: 0 2px !important;
            }
        }
    }
}
</style>
