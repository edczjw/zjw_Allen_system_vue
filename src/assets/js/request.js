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

    // 上传营业执照
    async uploadLicense(paramsOst){   
        const res = await request({
            url: '/apply/business/license/ocr',
            method:'post', 
            data:{
                outerProcessNo:paramsOst.outerProcessNo,
                imageBase64:paramsOst.imageBase64
            }
        });  
        return res;
    },

}
export default axios;