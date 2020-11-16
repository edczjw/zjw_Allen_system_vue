import axios from 'axios' 

// 封装请求方法
const request = (params)=> {
    return new Promise((resolve,reject)=>{
        axios({
            ...params
        }).then(res=>{  //axios返回的是一个promise对象
            resolve(res.data)   
        }).catch(err=>{ 
            alert('发生异常')
        })
    })
}

export default request