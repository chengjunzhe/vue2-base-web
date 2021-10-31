<template>
  <svg :style="[svgicon]" aria-hidden="true" v-on="$listeners" :class="svgClass">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    // svg 的名称
    svgName: {
      type: String,
      required: true,
    },
    // 宽度
    width: {
      type: Number,
      default: 30,
    },
    height: {
      type: Number,
      default: 30,
    },
    fillColor: {
      type: String,
      default: 'currentColor',
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.svgName}`
    },
    svgClass() {
      return 'svg-icon-' + this.svgName
    },
    // 默认样式
    svgicon() {
      const style = {
        width: `${this.width}px`,
        height: `${this.height}px`,
        'vertical-align': ' middle',
        fill: `${this.fillColor}`,
        overflow: 'hidden',
      }
      return style
    },
  },
}
</script>
