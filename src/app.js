import Vue from 'vue';
import App from './App.vue';
import router from './router';  // Ensure router is correctly imported

Vue.config.productionTip = false;

new Vue({
  router,  // Make sure the router is passed into the Vue instance
  render: h => h(App)
}).$mount('#app');
