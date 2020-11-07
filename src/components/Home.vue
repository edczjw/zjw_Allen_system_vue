<template>
  <div class="Home_wrapper" ref="HomeRef" @scroll="scrollHome">   
    <router-view/>
    <Backtop v-if="showBkt" @click="goTop"></Backtop>
  </div>
</template>

<script>
import Backtop from './Backtop'
export default {
  name: 'Home',
  data () {
    return {
      showBkt:false,//显示返顶图标
    }
  },
  components:{ 
    Backtop
  }, 
  methods:{
    //返回顶部
    goTop(){
      this.$refs.HomeRef.scrollTop = 0
    },
    //监听元素滚动事件
    scrollHome(e){ 
      e.target.scrollTop>=200? this.showBkt=true:this.showBkt=false;
    }
  }
}
</script>
 
<style lang="less" scoped> 
.Home_wrapper{
  margin-left: 210px;
  height: 100%; 
  background-color: aliceblue;
  overflow-y: auto;
}
</style>
