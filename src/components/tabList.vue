<template>
  <div class="tab_wrap"> 
      <el-tabs tab-position="right" style="height: 100%;">
        <el-tab-pane label="添加网站"><EditWebNav></EditWebNav></el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane> 
    </el-tabs>
  </div>
</template>
<script>
import EditWebNav from '@/components/tabsov/editWebNav'
export default {
name:'tabList',
components:{
    EditWebNav
},
  data() {
    return {
        
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  }
};
</script>

<style lang="less" scoped>
    .tab_wrap{ 
        max-width: 1180px;
        margin: 0 auto;
        background-color: #fff;
        margin-bottom: 140px;
    }
</style>