import Vue from 'vue'
import Router from 'vue-router'
import mainRoute from '@/components/views/main-route.vue'
import docsRoute from '@/components/views/docs-route.vue'
import dataRoute from '@/components/views/data-route.vue'
import addRoute from '@/components/views/add-route.vue'
import configRoute from '@/components/views/config-route.vue'
import configurationRoute from '@/components/views/configuration-route.vue'
Vue.use(Router)

const routes = [
  { path: '/', component: mainRoute },
  { path: '/data', component: dataRoute },
  { path: '/documentation', component: docsRoute },
  { path: '/configure', component: configRoute },
  { path: '/configuration', component: configurationRoute },
  { path: '/add', component: addRoute }
]

export default new Router({
  routes,
  props: ['deviceList', 'deviceData', 'currentDevice']
})
