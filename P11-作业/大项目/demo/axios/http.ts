import requery from './api'

// 获取首页轮播图
export const querybanner = () => requery.get('banner/list')
// 获取首页商品
export const querygoods = (data: {
    page: number
    pageSize: number
}) => requery.post('shop/goods/list/v2', data)

