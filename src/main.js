// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAgile from 'vue-agile'
import VueLazyload from 'vue-lazyload'
import VueAnalytics from 'vue-analytics'

import App from './App'
import router from './router'

Vue.config.productionTip = process.env.NODE_ENV === 'production'

Vue.use(VueLazyload)
Vue.use(VueAgile)

if (Vue.config.productionTip) {
  // Google Analytics //
  Vue.use(VueAnalytics, {
    id: 'UA-109251415-1',
    checkDuplicatedScript: true
  })
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
