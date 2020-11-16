<template>
<!-- 顶部 -->
    <div class="Header_wrapper" 
    :style="$store.state.isCollapse? 'margin-left: 64px':'margin-left: 248px;'"
    >   
        <div class="Head_item">{{Headertime}}</div>
        <a class="Head_item" href="javascript:void(0)" title="欢迎您！">
            <el-avatar size="small" :src="circleUrl"></el-avatar>
            <i>欢迎您！管理员</i>
        </a>
    </div>
</template>

<script>
export default {
    data(){
        return{ 
            timer:0,
            username:'曾jw',
            circleUrl: "https://himg.bdimg.com/sys/portraitn/item/c918cedec3fb76d7d6b4f3b5c18064",
            Headertime:"",
        }
    },
    mounted() {
      this.timer = setInterval(this.getDate, 1000);
    },
    beforeDestroy() {
      clearInterval(this.timer);
    },
    methods: {
        getDate(){  
            let time = new Date();
            let year = time.getFullYear()
            let month = time.getMonth()+1
            let day = time.getDate()
            let hour = time.getHours()>=10? time.getHours():'0'+time.getHours()
            let min = time.getMinutes()>=10? time.getMinutes():'0'+time.getMinutes()
            let second = time.getSeconds()>=10? time.getSeconds():'0'+time.getSeconds() 
            this.Headertime = year+'年'+month+'月'+day+'日'+' '+hour+':'+min + ':'+second 
        } 
    },
}
</script>
<style lang="less" scoped>
    .Header_wrapper{
        position: fixed;
        top: 0;
        left: 0;
        right: 0; 
        height: 60px;  
        transition: all 1s;
        font-size: 14px;
        background-color:#ffffff;    
        color:#666;
        box-shadow: 0 1px 10px 1px rgb(202, 200, 200);
        display: flex;
        justify-content: flex-end;
        align-items: center;
        a{ 
            color:#666;
            i{
                padding-left: 6px;
            }
        }
        .Head_item{   
            height: 60%;
            padding: 0 20px;
            border-left: 1px solid rgb(189, 187, 187);
            display: flex;
            justify-content: center;
            align-items: center;
        } 
        .Head_item:nth-child(1){ 
            border-left: none;
        }
    } 
</style>