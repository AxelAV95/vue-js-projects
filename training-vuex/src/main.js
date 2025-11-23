import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import store from './store' // 1. Importamos la store

Vue.config.productionTip = false

new Vue({
  vuetify,
  store, // 2. La inyectamos en la instancia principal
  render: h => h(App)
}).$mount('#app')