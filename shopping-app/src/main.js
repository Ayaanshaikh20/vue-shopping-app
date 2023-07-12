import Vue from 'vue'
import App from './App.vue'
import Route from './route.js'
// import Store from './store.js'
import BaseBadge from './components/UI/BaseBadge.vue';

Vue.component('base-badge', BaseBadge);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router : Route
}).$mount('#app')
