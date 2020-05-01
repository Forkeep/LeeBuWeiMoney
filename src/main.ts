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

if (document.documentElement.clientWidth > 500) {
  alert('在手机端操作体验更加~');
  const img = document.createElement('img');
  img.src = 'img/qrCode.png';
  img.style.position = 'fixed';
  img.style.left = '50%';
  img.style.top = '50%';
  img.style.transform = 'translate(-50%,-50%)';
  img.style.boxShadow = '0 0 3px 3px rgba(0,0,0,0.5)';
  document.body.appendChild(img);
}