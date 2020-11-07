<template>
  <div id="app"> 
    <Menu></Menu>
    <Home></Home> 
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Home from '@/components/Home' 
export default {
  name: 'App',
  components:{
    Menu,
    Home, 
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
}
#app {
  height: 100%;
}
a{
  text-decoration: none;
}
</style>
