import axios from 'axios'

const http = axios.create({
    baseURL: "http://adminv2.happymmall.com/manage"
})

http.interceptors.request.use(config => {
    // config.headers.Accept = 'application/json, text/javascript, */*; q=0.01'
    return config
})

http.interceptors.response.use(err => {
    return err.data
})

export default http

// export const requeryLogin = (data) => http.post('/user/login.do', data)

// // 获取用户列表
// export const requeryUser = (data) => http.post('/user/list.do', data)

