import Vue from 'vue'
import router from '@/router'
import DB from '@/services/DB'
import Keyboard from '@/services/Keyboard'
import Wrapper from '@/components/Wrapper'

Vue.config.productionTip = false
Vue.prototype.$db = DB

Vue.filter('key', value => Keyboard.formatKeyCode(value))

new Vue({
  router,
  render: h => h(Wrapper),
}).$mount('#app')
