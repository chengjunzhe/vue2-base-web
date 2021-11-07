import SvgIcon from './svgIcon'

// 引入所有的svg
const requireAll = (requireContext) => requireContext.keys().map(requireContext)
const req = require.context('@/assets/svg', false, /\.svg$/)
requireAll(req)

export default {
  install(Vue) {
    // 组件的注册
    Vue.component('SvgIcon', SvgIcon)
  },
}
