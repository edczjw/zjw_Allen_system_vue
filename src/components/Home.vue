<template>
  <div class="Home_wrapper"
  :style="$store.state.isCollapse? 'margin-left: 64px':'margin-left: 248px;'"
  >   
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
    }
  }, 
  methods:{
  }
}
</script>
 
<style lang="less" scoped> 
.Home_wrapper{ 
  height: 100%;
  padding: 20px; 
  transition: all 1s; 
}
</style>
