import request from './http'
/**
 * 集合所有请求
 */
const axios = {
    // 获取WEBNAVLIST
    async getWebNavList(paramsOst){  
        var timestamp = Date.parse(new Date()); 
        const res = await request({
            method:'get',
            url: '/WebList',
            params:{
                timestamp
            }
        });  
        return res;
    }, 

    // 录入网站接口
    async editWebApi(paramsOst){   
        const res = await request({
            url: '/saveWebSite',
            method:'post', 
            data:paramsOst
        });  
        return res;
    },

}
export default axios;