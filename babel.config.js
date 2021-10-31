const IS_PROD = ['production'].includes(process.env.VUE_APP_ENV)

const plugins = []

// 去除 console.log
if (IS_PROD) {
  plugins.push('transform-remove-console')
}

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins,
}
