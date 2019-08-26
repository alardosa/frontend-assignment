import 'Styles/main.scss'
import Vue from 'vue'
import App from './App'
import router from './router'

import store from './store'
import modal from 'vue-js-modal'

Vue.use(modal)

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
}).$mount('#app');
