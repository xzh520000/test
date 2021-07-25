import axios from 'axios'
const instance = axios.create({
    baseURL: 'http://www.baidu.com',//接口地址
    timeout: 3000
})
//设置请求拦截器
instance.interceptors.request.use(
    config => {
        // config.headers.token=localStorage.getItem('token')
        return config
    },
    error => {
        return Promise.reject(error)
    }
)
//设置响应拦截器
instance.interceptors.response.use(
    response => {
        return response
    },
    error => {
        return Promise.reject(error)
    }
)

export function get(url, params) {
    return instance.get(url, { params })
}
export function post(url, data) {
    return instance.post(url, data)
}
export function del(url) {
    return instance.delete(url)
}
export function put(url, data) {
    return instance.put(url, data)
}