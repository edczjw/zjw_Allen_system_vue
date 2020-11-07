import Vue from 'vue'
import Router from 'vue-router'
import Crawler from '@/page/Node/Crawler'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/Crawler',
      name: 'Crawler',
      component: Crawler
    }
  ]
})
