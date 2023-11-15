import axios from 'axios'

const http = axios.create({
    baseURL: "",
    headers: {
        Accept: 'application/json, text/javascript,*/*; q=0.01'
    }
})

http.interceptors.request.use(config => {

    return config
})

http.interceptors.response.use(err => {
    return err.data
})

export default http


