import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFirestore from "vue-firestore";
import "firebase/firestore";
import store from "./store";
import {
  fb
} from "@/firebase";

// App SCSS
import "./assets/scss/app.scss";

// App JS
import "./assets/js/app";

// Firestore
Vue.use(VueFirestore, {
  key: 'id', // the name of the property. Default is '.key'.
  enumerable: true //  whether it is enumerable or not. Default is true.
});

// Configs
Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/]

let app;

fb.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount("#app");
  }
});