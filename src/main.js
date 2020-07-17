import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueFirestore from 'vue-firestore'
require('firebase/firestore')
import store from "./store";
import {
  fb
} from "@/firebase";


Vue.use(VueFirestore)

import 'bootstrap';
import 'popper.js';
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

import './assets/scss/app.scss';

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