import http from './api'

// 登录接口
export const requeryLogin = (data) => http.post(`/user/login.do?username=${data.username}&password=${data.password}`)

// 获取用户列表
export const requeryUser = () => http.post(`/user/list.do?pageNum=1`)

// 获取首页数据
export const requeryIndex = () => http.get('/statistic/base_count.do')

// 获取商品列表
export const requeryList = (data) => http.get(`/product/list.do?pageNum=${data}`)

// 获取订单列表
export const requeryOrder = (data) => http.get(`/order/list.do?pageNum=${data}`)