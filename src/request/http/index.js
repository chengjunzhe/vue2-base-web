import axios from 'axios'
import { apiBasePath, baseApi } from '@/config'
import Qs from 'qs'
import Cookies from 'js-cookie'
const IS_PROD = ['production'].includes(process.env.NODE_ENV)

const $axios = axios.create({
  // 设置超时时间
  timeout: 30000,
  // 基础url，会在请求url中自动添加前置链接
  baseURL: IS_PROD ? baseApi + apiBasePath : apiBasePath,
})

// 请求拦截器
$axios.interceptors.request.use(
  (config) => {
    const token = Cookies.get('token')
    if (token) {
      config.headers.token = token // 请求头部添加token
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
$axios.interceptors.response.use(
  (response) => {
    // 如果返回状态码显示正确，则resolve，反之reject
    return Promise.resolve(response.data)
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          console.log('网络请求不存在')
          break
        case 503:
          console.log('服务器不可用')
          break
        default:
          console.log(error.response.data.message)
      }
    } else {
      // 请求超时或者网络有问题
      if (error.message.includes('timeout')) {
        console.log('网络请求超时')
      } else {
        console.log('请求失败')
      }
    }
    return Promise.reject(error)
  }
)

// get，post请求方法
export default {
  post(url, data) {
    return $axios({
      method: 'post',
      url,
      data: Qs.stringify(data),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    })
  },
  postupload(url, data) {
    return $axios({
      method: 'post',
      url,
      data,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
  },
  jsonpost(url, data) {
    return $axios({
      method: 'post',
      url,
      data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
    })
  },
  get(url, params) {
    return $axios({
      method: 'get',
      url,
      params,
    })
  },
}
