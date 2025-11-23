import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router' // <--- 1. IMPORTAR

Vue.config.productionTip = false

new Vue({
  vuetify,
  store,
  router, // <--- 2. INYECTAR
  render: h => h(App)
}).$mount('#app')