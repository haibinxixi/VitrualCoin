// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import FastClick from 'fastclick';
import VueRouter from 'vue-router';
import App from './App';
import shorts from './components/shorts/shorts';
import specials from './components/specials/specials';
import 'font-awesome/css/font-awesome.min.css';
import { ConfirmPlugin } from 'vux';

Vue.use(ConfirmPlugin);
Vue.use(VueRouter);

const routes = [
  { path: '/', component: shorts },
  { path: '/specials', component: specials }
];

let router = new VueRouter({
  linkActiveClass: 'active',
  routes
});

FastClick.attach(document.body);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box');
