import axios from 'axios'

// let http = axios.create({
//     baseURL: ''
// })

// http.interceptors.request.use(config => {
//     return config
// })

// http.interceptors.response.use(err => {
//     return err
// })

class Requery {
    http: any
    constructor() {
        this.http = axios.create({
            baseURL: "https://api.it120.cc/xiaochengxu/",
            headers:{
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        this.http.interceptors.request.use(config => {

            return config
        })
        this.http.interceptors.response.use(err => {
            return err.data
        })
    }

    get(url: string, data?: any) {
        return this.http.get(url, { params: { data } })
    }
    post(url: string, data?: any) {
        return this.http.post(url, data)
    }
}

export default new Requery()