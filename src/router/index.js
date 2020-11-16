import Vue from 'vue'
import Router from 'vue-router'
import webNav from '@/page/Node/webNav' 

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [ 
    {
      path:'/webNav',
      name:'webNav',
      component:webNav
    }
  ]
})
