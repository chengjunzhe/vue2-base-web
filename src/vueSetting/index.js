import Vue from 'vue'

import Cookies from 'js-cookie'
Vue.prototype.$cookies = Cookies

import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
dayjs.locale('zh-cn')

// 注册自定义组件
import Components from '@/components'
Vue.use(Components)

// 全局注册自定义指令
// import * as directives from '@/directives'
// Object.keys(directives).forEach((key) => {
//   Vue.directive(key, directives[key])
// })

// 全局注册自定义过滤器
// import * as filters from '@/filters'
// Object.keys(filters).forEach((key) => {
//   Vue.filter(key, filters[key])
// })

// 自己写的全局方法
import './myFunction'
