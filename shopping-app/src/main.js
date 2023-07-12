import Vue from 'vue'
import App from './App.vue'
import Route from './route.js'
import Store from './store.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  Route,
  Store
}).$mount('#app')
