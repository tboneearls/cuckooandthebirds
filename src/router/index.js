import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // landing page?
  // {
  //   path: "/",
  //   name: "home",
  //   component: () => import(/* webpackChunkName: "home" */ "../views/VueHome.vue"),
  // },
  {
    path: "/",
    name: "VueBio",
    component: () => import(/* webpackChunkName: "bio" */ "../views/VueBio.vue"),
  },
  {
    path: "/contact",
    name: "VueContact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ "../views/VueContact.vue"),
  },
  {
    path: "/music",
    name: "VueMusic",
    component: () => import(/* webpackChunkName: "music" */ "../views/VueMusic.vue"),
  },
  {
    path: "/music/:title",
    name: "release",
    component: () => import(/* webpackChunkName: "release" */ "../components/releases/MusicReleaseList.vue"),
  },
  {
    path: "/press",
    name: "VuePress",
    component: () => import(/* webpackChunkName: "press" */ "../views/VuePress.vue"),
  },
  {
    path: "/shows",
    name: "VueShows",
    component: () => import(/* webpackChunkName: "shows" */ "../views/VueShows.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      // scroll to relative url on page
      return {
        selector: to.hash,
      };
    } if (savedPosition) {
      // emulates native-like behavior as if using a back button
      return savedPosition;
    }
    // start at top of page by default
    return { x: 0, y: 0 };
  },
});

export default router;
