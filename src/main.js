import Vue from "vue";
import App from "./App";
import router from "./router";
import VueResource from "vue-resource";
import { store } from "./store/store.js";
import VeeValidate from "vee-validate";
import VTooltip from "v-tooltip";
import vSelect from "vue-select";
import Loader from "vue-spinner/src/RingLoader.vue";
import pusher from "vue-pusher";
import VueMq from 'vue-mq';
import './registerServiceWorker'

Vue.config.productionTip = false

require("./css/bootstrap.min.css");
 require("./css/font-awesome.min.css");
require("./css/css.css");
require("./css/animate.css");
require("./css/tooltip.css");

Vue.config.productionTip = false;
Vue.use(pusher, {
  api_key: "edc0fafa92d65aa9bace",
  options: {
    cluster: "us2",
    encrypted: true
  }
});
Vue.use(VueResource);
Vue.use(VTooltip);
Vue.use(VeeValidate, { inject: false });
Vue.component("v-select", vSelect);
Vue.component("v-loader", Loader);

Vue.use(VueMq, {
  breakpoints: {
    sm: 728,
    md: 1200,
    lg: Infinity
  }
})

Vue.directive("click-outside", {
  bind: function(el, binding, vnode) {
    el.event = function(event) {
      // here I check that click was outside the el and his childrens
      if (!(el === event.target || el.contains(event.target))) {
        // and if it did, call method provided in attribute value
        vnode.context[binding.expression](event);
      }
    };
    document.body.addEventListener("click", el.event);
  },
  unbind: function(el) {
    document.body.removeEventListener("click", el.event);
  }
});

// Vue.options.beforeCreate.pop();
// Vue.options.mounted.pop();

/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
