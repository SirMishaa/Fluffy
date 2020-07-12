/*
 * Fluffy - https://github.com/SirMishaa/Fluffy
 * Author - SirMishaa
 * License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
 */

import Vue from "vue";
import Vuesax from "vuesax";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "@/assets/css/tailwindcss.scss";
import "@/assets/css/main.scss";
import "vuesax/dist/vuesax.css";

Vue.config.productionTip = false;

Vue.use(Vuesax, {});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
