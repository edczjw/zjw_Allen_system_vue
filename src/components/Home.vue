<template>
  <div
    class="Home_wrapper"
    :style="
      $store.state.isCollapse ? 'margin-left: 64px' : 'margin-left: 248px;'
    "
  >
    <router-view />

    <!-- 底部操作工具栏 -->
    <BtnControl></BtnControl>
  </div>
</template>

<script>
import BtnControl from "./controlBtn";
export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    BtnControl
  }
};
</script>
 
<style lang="less" scoped>
.Home_wrapper {
  height: 100%;
  padding: 20px;
  transition: all 1s; 
}
</style>
