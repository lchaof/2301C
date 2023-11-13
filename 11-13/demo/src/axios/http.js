import http from './api'

// 登录接口
export const requeryLogin = (data) => http.post(`/user/login.do?username=${data.username}&password=${data.password}`)

// 获取用户列表
export const requeryUser = () => http.post(`/user/list.do?pageNum=1`)

// 获取首页数据
export const requeryIndex = () => http.get('/statistic/base_count.do')