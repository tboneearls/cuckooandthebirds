import Vue from "vue";

// 3rd party
import Cloudinary from "cloudinary-vue";

import router from "./router";
import store from "./store";
import App from "./App.vue";

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
