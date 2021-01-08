import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";
import VueAxios from "vue-axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "@/assets/styles/_main.scss";

Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(fab);
library.add(fas);
Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(Buefy, {
  defaultIconComponent: "font-awesome-icon",
  defaultIconPack: "fas",
});
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
