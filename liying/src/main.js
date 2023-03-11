import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible-computer'
Vue.config.productionTip = false
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.$eventBus = new Vue()
Vue.use(ElementUI);
new Vue({
  render: h => h(App),
}).$mount('#app')
