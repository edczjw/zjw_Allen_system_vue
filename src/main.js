import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'
import store from './store/vuex'  
import httpAxios from './assets/js/request' 

Vue.phro
Vue.config.productionTip = false
Vue.prototype.$httpAxios = httpAxios      //全局注册方法
Vue.use(ElementUI);
 
new Vue({
  el: '#app',
  router,  
  components: { App },
  store,  //store:store 和router一样，将我们创建的Vuex实例挂载到这个vue实例中
  template: '<App/>'
})
