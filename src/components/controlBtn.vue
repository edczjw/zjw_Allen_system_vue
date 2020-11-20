<template>
<!-- 底部操作工具 -->
    <div class="control_wrapper">
        <ul>
            <li v-for="(item,index) in btnToollist" :key="index"> 
                <router-link :to="item.path">
                    <img :src="item.Image" :title="item.name" alt=""> 
                </router-link>
            </li>
        </ul> 
    </div>
</template>

<script>
export default {
    data(){
        return{
            btnToollist:[{
                name:'添加前端导航', 
                path:'/tabList',
                Image:require('../assets/image/edit.png')
            },{
                name:'修改密码', 
                path:'',
                Image:require('../assets/image/psw.png')
            }]
        }
    }
}
</script>

<style lang="less" scoped>
    .control_wrapper{
        position: fixed;
        bottom: 20px;   
        left: 50%;
        transform: translateX(-50%); 
        border-radius: 30px;
        height: 60px; 
        padding: 0 20px;
        background-color: rgba(229, 238, 247, 0.911);
        cursor: pointer;
        transition: all .7s; 
        ul{ 
            height: 100%;
            display: table;
            li{ 
                display: table-cell;
                vertical-align: middle;
                height: 100%;  
                img{
                    width: 40px; 
                    margin: 0 10px;
                    transition: all .7s; 
                } 
                img:hover{ 
                    opacity: 1;
                    transform: translateY(-8px);
                    -webkit-transform: translateY(-8px);
                    -o-transform: translateY(-8px);
                    -ms-transform: translateY(-8px);
                    -moz-transform: translateY(-8px);
                }
            }
            li:nth-child(2n-1){
                border-right: 1px solid #fff;
            }
        }
    }
    .control_wrapper:hover{
        background-color: rgba(161, 207, 247, 0.404);
        box-shadow: 0 0 2px 3px rgb(148, 199, 250) inset;
    }
</style>