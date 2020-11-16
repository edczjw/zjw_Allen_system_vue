<template>
    <!-- 爬虫数据的模块集合 -->
    <div class="WebNavList_wrapper"> 
        <ul>
            <li v-for="(item,index) in WebNavList" :key="index"> 
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
                console.log('出现异常')
            }else{
                this.WebNavList = res.data.webSiteList
            }
        }
    },
}
</script>

<style lang="less">
.WebNavList_wrapper{ 
    width: 100%;    
    border: 1px solid #000;
        ul{   
    width: 80%;    
    border: 1px solid #000;
            display: flex; 
            justify-content: flex-start;
            align-items: center;
            flex-wrap: wrap;
            li{  
                width: 260px;
                height: 160px;
                margin: 10px; 
                border-radius: 3px;
                box-shadow: 0 0 10px 2px #eeeeee;  
                position: relative;
                transition: all .2s;
                text-align: center;
                display: table;
                background-color: #fff;
                h4{ 
                    margin-bottom: 10px;
                }
                h6{
                    color: #999;
                    text-align: justify;
                    text-indent: 2em;
                    padding: 0 15px; 
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
                    width: 100px;
                    height: auto; 
                    margin-bottom: 10px;
                }
            }
            li:before{
                position: absolute;
                top:0;
                right: -10px;
                content: ' ';  
                border-left: 20px solid transparent;
                border-right: 20px solid transparent; 
                border-bottom: 20px solid #7d2ec7d3;
                transform: rotate(45deg);
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