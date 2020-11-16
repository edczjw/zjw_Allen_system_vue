<template>
  <!-- 数据爬虫 -->
  <div class="webNav_wrapper">  
    <!-- 爬虫数据的模块集合 -->
    <webNavList></webNavList>
  </div>
</template>

<script> 
import webNavList from '../../components/webNavList'
export default {
  name: "webNav",
  data() {
    return {};
  },
  components: { 
      webNavList
  }
};
</script>
 
<style scoped>
.webNav_wrapper {   
    height: auto; 
}
</style>
