import Vue from 'vue'
import Router from 'vue-router'
import UiNavList from '@/page/Node/UiNavList' 
import webNavList from '@/page/Node/webNavList' 
import myHome from '@/page/Node/myHome' 
import tabList from '@/components/tabList' 

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [ 
    {
      path:'/myHome',
      name:'myHome',
      component:myHome
    },{
      path:'/webNavList',
      name:'webNavList',
      component:webNavList
    },{
      path:'/tabList',
      name:'tabList',
      component:tabList
    },{
      path:'/UiNavList',
      name:'UiNavList',
      component:UiNavList
    }
  ]
})
