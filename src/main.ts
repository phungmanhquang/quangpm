import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// i18n
import i18n from "@/config/i18n";

// tailwind
import "./index.css";

// icon
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(fas);

Vue.component("icon", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
