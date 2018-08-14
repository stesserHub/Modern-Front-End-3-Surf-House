import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import ProductPage from '@/components/ProductPage';
import ContactPage from '@/components/ContactPage';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate);
Vue.use(Router);



export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Product',
      name: 'ProductPage',
      component: ProductPage
    },
    {
      path: '/Contact',
      name: 'ContactPage',
      component: ContactPage
    }
  ]
})
