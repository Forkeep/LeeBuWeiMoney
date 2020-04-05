import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import LayoutNav from '@/components/LayoutNav.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('LayoutNav', LayoutNav);
Vue.component('Icon',Icon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


//谷歌浏览器会奏效，微信无需此代码也可奏效
window.onload = function () {
  setTimeout(function () {
    window.scrollTo(0, 1000);
  });
};