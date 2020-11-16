<template>
    <!-- 返回顶部 -->
    <div class="Backtop_wrapper" @click="goTop"> 
        <i class="el-icon-s-promotion"></i>
    </div>
</template>
<script>
export default {
    name:'Backtop',
    data(){
        return{ 
        }
    }, 
    methods:{
        goTop(){
            //触发父组件方法
            this.$parent.goTop()
        }
    }
}
</script>

<style lang="">
    .Backtop_wrapper{
        position: absolute;
        right: 40px;
        bottom: 40px;
        width: 40px;
        height: 40px;
        text-align: center;
        line-height: 40px;
        border-radius: 50%;
        background-color: #ffffff; 
        color: #ff4040;
        cursor: pointer;
        border: 1px solid #eee;
        z-index: 9;
    }
    .Backtop_wrapper:hover{ 
        animation: fadeIn .5s linear infinite alternate;
    }   
    @keyframes fadeIn {
        from{
            box-shadow: 0 0 1px 1px #eee;
        }to{
            box-shadow: 0 0 10px 1px rgb(60, 158, 196);
        }
    }
</style>