import VueRouter from 'vue-router'
import Vue from 'vue'
import ProductsList from './components/products/ProductsList.vue';
import UserCart from './components/products/UserCart.vue';
import ShopAdmin from './components/products/ShopAdmin.vue';
// import ProductsList from './components/products/ProductsList.vue'
export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', redirect: '/products' },
        { path: '/products', component: ProductsList },
        { path: '/cart', component: UserCart },
        { path: '/admin', component: ShopAdmin },
      ]
})

Vue.use(VueRouter)

