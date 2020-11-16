import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store = new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态  菜单展开缩进
        isCollapse:false
    },
    mutations:{
        //es6语法，等同edit:funcion(){...}
        edit(state){
            state.isCollapse = !state.isCollapse
        }
    }
})

export default store