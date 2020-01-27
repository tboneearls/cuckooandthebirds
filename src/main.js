import Vue from "vue";
import Cloudinary from "cloudinary-vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

Vue.use(Cloudinary, {
  configuration: {
    cloudName: "cuckooandthebirds",
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
