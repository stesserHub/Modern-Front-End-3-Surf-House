import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';
import Router from 'vue-router';
import HomePage from '@/components/HomePage';
import ProductPage from '@/components/ProductPage';
import ContactPage from '@/components/ContactPage';
import VeeValidate from 'vee-validate';
import {Tabs, Tab} from 'vue-tabs-component';
import { Carousel } from 'bootstrap-vue/es/components';

Vue.use(BootstrapVue);
Vue.use(Carousel);

Vue.use(VeeValidate);
Vue.use(Router);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/Product/:id',
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
