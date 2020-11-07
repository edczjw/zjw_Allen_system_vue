<template>
    <div class="Menu_wrapper"> 
        <div class="Menu_Logo">Allen</div>
        <!-- 导航菜单 -->  
        <el-menu
        :router=true 
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-submenu index="1">
            <template slot="title">
            <i class="el-icon-location"></i>
            <span>Node</span>
            </template>
            <el-menu-item-group> 
                <el-menu-item index="Crawler">
                    The Crawler 数据
                </el-menu-item> 
            </el-menu-item-group> 
            </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">其他</span>
        </el-menu-item>  
        </el-menu>

        <div class="Menu_out_footer"> 
            <i class="el-icon-switch-button"></i>
        </div>
    </div> 
</template>
<script> 
export default{
    name:'Menu',
    data(){
        return{

        }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="less" scoped>
    .Menu_wrapper{
        position: relative;
        float: left;
        width: 210px;
        height: 100%; 
        background-color:#545c64;  
        .Menu_Logo{
            width: 100%;
            height: 60px;
            line-height: 60px;
            text-align: center;
            font-size: 32px;
            color: #ffffff; 
            border-bottom: 1px solid #ffffff;
            font-weight: bold;
            font-family: 'Courier New', Courier, monospace;
            background-color: #ff4040;
        }
        .Menu_out_footer{ 
            padding: 10px;
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            font-size: 18px;
            color: #ffffff;
            text-align: center;
            background-color:#d3d6da57;  
        }
    }
    .Menu_wrapper::after{
        content: ' ';
        position: absolute;
        right: -6px;
        top: 50%;  
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 20px solid #000; 
        background-color: #ff4040;
        transform:rotate(-90deg);
        -ms-transform:rotate(-90deg); 	/* IE 9 */
        -moz-transform:rotate(-90deg); 	/* Firefox */
        -webkit-transform:rotate(-90deg); /* Safari 和 Chrome */
        -o-transform:rotate(-90deg); 	/* Opera */
    }
</style>