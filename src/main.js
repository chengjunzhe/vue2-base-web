import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/style/index.less' //引入样式

import '@/vueSetting' //配置和vue有关的一下东西

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
