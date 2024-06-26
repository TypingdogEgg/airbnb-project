/* eslint-disable import/no-anonymous-default-export */
// 对axios二次封装
import axios from "axios";
import { BASE_URL, TIMEOUT } from "./config";

class HYRequest{
    constructor(baseURL, timeout){
        this.instance = axios.create({
            baseURL:baseURL,
            timeout:timeout,
        })
        // 响应拦截
        this.instance.interceptors.response.use(res=>{
            return res.data
        },err=>{
            return err
        })
    }
    
    request(config){
        return this.instance.request(config)
    }
    // 封装get    
    get(config){
        return this.request({...config,method:'get'})
    }
    // 封装post    
    post(config){
        return this.request({...config,method:'post'})
    }
}
// 导出实例
export default new HYRequest(BASE_URL,TIMEOUT)