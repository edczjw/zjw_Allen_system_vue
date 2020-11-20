<template>
  <div id="app"  ref="appRef" @scroll="scrollapp"> 
    <Header></Header>
    <Menu></Menu>
    <Home></Home> 
    <Backtop v-if="showBkt" @click="goTop"></Backtop>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Home from '@/components/Home' 
import Header from '@/components/Header' 
import Backtop from '@/components/Backtop'
export default {
  name: 'App',
  data(){
    return{ 
      showBkt:false,//显示返顶图标
    }
  },
  methods:{ 
    //返回顶部
    goTop(){
      this.$refs.appRef.scrollTop = 0
    },
    //监听元素滚动事件
    scrollapp(e){ 
      e.target.scrollTop>=100? this.showBkt=true:this.showBkt=false;
    }
  },
  components:{
    Menu,
    Home, 
    Header,
    Backtop
  }
}
</script>

<style>
@import "./assets/css/style.css";
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html,body{
  height: 100%;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
#app {
  height: 100%;
  margin-top: 60px;
  background-color: aliceblue;
  overflow-y: auto;
}
a{
  text-decoration: none;
}
ul{
  list-style: none;
}
</style>
