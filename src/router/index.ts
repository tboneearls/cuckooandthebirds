import Vue from 'vue';
import VueRouter from 'vue-router';

// import Home from '../views/Home.vue';
import VueAbout from '../views/VueAbout.vue';

Vue.use(VueRouter);

const routes = [
  // landing page?
  // {
  //   path: '/',
  //   name: 'home',
  //   component: Home,
  // },
  {
    path: '/',
    name: 'VueAbout',
    component: VueAbout,
  },
  {
    path: '/contact',
    name: 'VueContact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/VueContact.vue'),
  },
  {
    path: '/music',
    name: 'VueMusic',
    component: () => import(/* webpackChunkName: "music" */ '../views/VueMusic.vue'),
  },
  {
    path: '/press',
    name: 'VuePress',
    component: () => import(/* webpackChunkName: "press" */ '../views/VuePress.vue'),
  },
  {
    path: '/shows',
    name: 'VueShows',
    component: () => import(/* webpackChunkName: "shows" */ '../views/VueShows.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      // scroll to relative url on page
      return {
        selector: to.hash
      }
    } else if (savedPosition) {
      // emulates native-like behavior as if using a back button
      return savedPosition;
    } else {
      // start at top of page by default
      return { x: 0, y: 0 };
    }
  },
});

export default router;