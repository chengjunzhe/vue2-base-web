const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const IS_PROD = ['production'].includes(process.env.NODE_ENV)
const defaultSettings = require('./src/config/index.js')
const name = defaultSettings.title || 'base-vue2'

// externals
const externals = IS_PROD
  ? {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
    }
  : {}

// CDN外链，会插入到index.html中
const cdn = {
  // 开发环境
  dev: {
    css: [],
    js: [],
  },
  // 生产环境
  build: {
    css: [],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.2.0/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.24.0/dist/axios.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
    ],
  },
}

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: !IS_PROD,
  productionSourceMap: false, // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  devServer: {
    port: 2021, // 端口号
    open: true, // 启动后打开浏览器
    overlay: {
      //  当出现编译器错误或警告时，在浏览器中显示全屏覆盖层
      warnings: false,
      errors: true,
    },
    proxy: {
      //配置跨域
      '/apis': {
        target: 'http://101.200.76.112', // 接口的域名
        ws: true, // 是否启用websockets
        changOrigin: true, // 开启代理，在本地创建一个虚拟服务端
        pathRewrite: { '^/apis': '' }, //重写路径
      },
    },
  },
  configureWebpack: {
    //   配置别名
    resolve: {
      alias: {
        '@': resolve('src'),
      },
    },
    // 要排除的包名
    // key(是要排除的包名): value(实际上是实际引入的包的全局的变量名 )
    // 因为要排除element-ui 所以后面要引入CDN文件 CDN文件中有ELEMENTUI的全局变量名
    // externals首先会排除掉 定义的包名,空出来的位置  会用变量来替换
    externals: externals,
  },
  chainWebpack: (config) => {
    if (IS_PROD) {
      config.plugin('webpack-report').use(BundleAnalyzerPlugin, [
        {
          analyzerMode: 'static',
        },
      ])
    }

    // it can improve the speed of the first screen, it is recommended to turn on preload
    config.plugin('preload').tap(() => [
      {
        rel: 'preload',
        // to ignore runtime.js
        // https://github.com/vuejs/vue-cli/blob/dev/packages/@vue/cli-service/lib/config/app.js#L171
        fileBlacklist: [/\.map$/, /hot-update\.js$/, /runtime\..*\.js$/],
        include: 'initial',
      },
    ])

    /**
     * 添加CDN参数到htmlWebpackPlugin配置中
     */
    config.plugin('html').tap((args) => {
      if (IS_PROD) {
        args[0].cdn = cdn.build
      } else {
        args[0].cdn = cdn.dev
      }
      args[0].title = name
      return args
    })

    // when there are many pages, it will cause too many meaningless requests 当有很多页面的时候，会造成很多没有必要的请求
    config.plugins.delete('prefetch')

    // svg图标
    config.module.rule('svg').exclude.add(resolve('src/assets/svg')).end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/svg'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]',
      })
      .end()

    config.when(IS_PROD, (config) => {
      config.optimization.splitChunks({
        chunks: 'all',
        cacheGroups: {
          // cacheGroups 下可以可以配置多个组，每个组根据test设置条件，符合test条件的模块
          commons: {
            name: 'chunk-commons',
            test: resolve('src/components'),
            minChunks: 3, //  被至少用三次以上打包分离
            priority: 5, // 优先级
            reuseExistingChunk: true, // 表示是否使用已有的 chunk，如果为 true 则表示如果当前的 chunk 包含的模块已经被抽取出去了，那么将不会重新生成新的。
          },
          libs: {
            name: 'chunk-libs',
            chunks: 'initial', // 只打包初始时依赖的第三方
            test: /[\\/]node_modules[\\/]/,
            priority: 10,
          },
        },
      })
      config.optimization.runtimeChunk('single')
    })
  },
  css: {
    extract: IS_PROD,
    sourceMap: false,
    loaderOptions: {
      less: {},
    },
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        path.resolve(__dirname, './src/style/variables.less'),
        path.resolve(__dirname, './src/style/cjz-used-style.less'),
      ], // 引入全局样式变量
    },
  },
}
