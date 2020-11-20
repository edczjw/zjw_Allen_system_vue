<template>
    <div :class="[$store.state.isCollapse? 'Menuwidth':'MenuColwidth', 'Menu_wrapper']"> 
        <div class="Menu_Logo">
            <img src="@/assets/image/AI.png" alt="">
            <span :style="$store.state.isCollapse? 'display:none':'display:block'">Allen</span>
        </div>
        <!-- 导航菜单 -->  
        <el-menu
        :collapse="$store.state.isCollapse"
        :router=true 
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"> 
        <el-menu-item index="myHome">
            <i class="el-icon-s-flag"></i>
            <span slot="title">系统首页</span>
        </el-menu-item>  

        <el-submenu>
            <template slot="title">
                <i class="el-icon-s-management"></i>
                <span slot="title">导航</span>
            </template>
            <el-menu-item-group> 
                <el-menu-item index="webNavList">前端技术框架</el-menu-item>
                <el-menu-item index="UiNavList">UI框架</el-menu-item>
            </el-menu-item-group>
        </el-submenu>  

        </el-menu> 
        <div class="Menu_out_footer" @click="logout()"> 
            <i class="el-icon-switch-button"></i>
        </div>
        <div class="MenuCol" title="点我" @click="$store.commit('edit')">
            <i class="el-icon-s-help"></i>
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
        //退出登录
        logout(){
            
        },
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
    .MenuColwidth{
        width: 248px;
    }
    .Menuwidth{
        width: 64px;
    }
    .Menu_wrapper{
        position: fixed; 
        top: 0;
        left: 0;
        height: 100%; 
        background-color:#545c64;  
        transition: all 1s;
        .Menu_Logo{ 
            width: 100%;
            height: 60px; 
            text-align: center;
            font-size: 24px;
            color: #ffffff; 
            border-bottom: 1px solid #ffffff;
            font-weight: bold;
            font-family: 'Courier New', Courier, monospace;
            background-color: #3c5f7c;
            display: flex;
            align-items: center;
            justify-content: center; 
            overflow: hidden;
            img{
                border-radius:50%;
                width: 35px;
                height: 35px; 
            }
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
            cursor: pointer;
        }
        .Menu_out_footer:hover{ 
            background-color:#e0ebfa57;  
        }
    }
    .MenuCol{ 
        position: absolute;
        right: -17.5px;
        top: 50%;   
        width: 35px;
        height: 35px; 
        display: flex;
        justify-content: center;
        align-items: center; 
        border: 1px solid#ffffff;
        background-color:  #3c5f7c; 
        color: #ffffff;
        font-weight: bold;
        cursor: pointer; 
        border-radius: 50%;
    }
    .MenuCol:hover{
        animation: traote 1s ease-in-out infinite alternate;
    }
    @keyframes traote {
        from{
            transform: rotate(360deg);
        }to{ 
            transform: rotate(-360deg);
        }
    }
</style>