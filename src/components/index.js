import SvgIcon from './svgIcon'
import UploadImage from './uploadImage'
import CountMoney from './countMoney'

export default {
  install(Vue) {
    // 组件的注册
    Vue.component('SvgIcon', SvgIcon)
    Vue.component('UploadImage', UploadImage)
    Vue.component('CountMoney', CountMoney)
  },
}
