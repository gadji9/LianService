import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from '../routes'
import VueSocialSharing from 'vue-social-sharing'
import VueTheMask from 'vue-the-mask'
import{BootstrapVue} from 'bootstrap-vue'

Vue.use(VueTheMask)

Vue.use(VueSocialSharing);

Vue.use(BootstrapVue)



//  40647d79-11b8-419c-86c7-b69c51ba1c23


Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app') 