import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import VueRouter from 'vue-router';
import axios from 'axios';
import './plugins/bootstrap-vue';
import App from './App.vue';
import routes from './routes';
import store from './store/index.js';

Vue.use(VueRouter);

const router = new VueRouter({ routes, mode: 'history' });

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
  provide: {
    baseUrl: 'https://rickandmortyapi.com/api/'
  },
}).$mount('#app');
