import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

Vue.prototype.$resolve_html = function (name) {
  return require(`./assets/${name}.html`);
};

Vue.prototype.$resolve_json = function (name) {
  return require(`./assets/${name}.json`);
};

new Vue({
  render: h => h(App),
}).$mount('#app');
