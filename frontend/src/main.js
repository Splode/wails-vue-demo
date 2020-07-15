import 'core-js/stable'
import 'regenerator-runtime/runtime'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.devtools = true

import * as Wails from '@wailsapp/runtime'

Wails.Init(() => {
  new Vue({
    render: (h) => h(App),
    router,
    store,
    mounted() {
      this.$router.replace('/')
    },
  }).$mount('#app')
})
