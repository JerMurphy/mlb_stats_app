import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
import vuetify from './plugins/vuetify';
import router from './router'
import Vs from 'd3-vs';

Vue.use(BootstrapVue)
Vue.use(Vs);

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
