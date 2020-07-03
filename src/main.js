/*
 * Fluffy - https://github.com/SirMishaa/Fluffy
 * Author - SirMishaa
 * License GNU General Public License v3.0 - https://github.com/SirMishaa/Fluffy/blob/master/LICENSE
 */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
