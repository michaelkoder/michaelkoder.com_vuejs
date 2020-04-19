import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.config.productionTip = false
Vue.use(VueRouter)
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
