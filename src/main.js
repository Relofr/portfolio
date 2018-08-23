// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueSmoothScroll from 'vue-smooth-scroll'
import Splitting from "splitting";

Vue.use(Splitting)
Vue.use(vueSmoothScroll)
Vue.config.productionTip = false
Splitting();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})