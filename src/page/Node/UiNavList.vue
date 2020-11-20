<template>
    <!-- 爬虫数据的模块集合 -->
    <div class="WebNavList_wrapper"> 
        <ul>
            <li v-for="(item,index) in WebNavList" :key="index" v-if="item.webType===2" > 
                <a :href="item.webUrl" :title="item.webDesc" target="_blank">
                    <img :src="item.webLogo" alt="">
                    <h4>{{item.webName}}</h4>
                    <h6>{{item.webDesc}}</h6>
                </a>
            </li> 
        </ul> 
    </div>
</template>

<script>
export default {
    name:"WebNavList",
    data(){
        return{
            WebNavList:[]
        }
    },
    mounted() {
        this.getList()
    },
    methods: {
        async getList(){ 
            const res = await this.$httpAxios.getWebNavList()
            if(res.code != '0000'){
                alert('出现异常')
            }else{
                this.WebNavList = res.data.webSiteList
            }
        }
    },
}
</script>

<style lang="less" scoped>
.WebNavList_wrapper{ 
    width: 100%;     
        ul{    
            max-width: 1180px; 
            margin: 0 auto;
            display: flex; 
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            li{   
                width: 270px; 
                padding: 20px;
                margin: 10px;  
                box-shadow: 0 0 7px 2px #eee; 
                position: relative;
                transition: all .7s;
                text-align: center;
                display: table;
                background-color: #fff;
                cursor: pointer;
                h4{ 
                    margin-bottom: 10px;
                }
                h6{
                    color: #999;
                    text-align: justify;
                    text-indent: 2em; 
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                a{ 
                    color:#000; 
                    display: table-cell;
                    vertical-align: middle;
                }
                img{
                    position: absolute;
                    right: 0;
                    top: 0;
                    width: 35px;  
                    object-fit: fill;
                    margin-bottom: 10px;
                    opacity: .8;
                }
            } 
            li:hover{  
                transform: translateY(-6px);
            }
        } 
    ul:after{
        content: ' ';
        display: block;
        height: 0;
        clear: both;
        visibility: hidden;
    }
}
</style>