import Vue from 'vue'
import App from './App'
import vueSmoothScroll from 'vue-smooth-scroll'
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal);
Vue.use(vueSmoothScroll)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})
