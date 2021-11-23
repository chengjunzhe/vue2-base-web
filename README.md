# vue2-base-web

## 目录结构
```
├── babel.config.js  // babel的配置文件
├── .prettierrc.js  // 代码格式化
├── eslintrc.js  // 代码格式化
├── package.json //包管理文件
├── src
│   ├── App.vue
│   ├── request // 网络请求
│   |   ├── apis // 接口地址目录
│   |   ├── http // axios请求配置
│   ├── assets  // 存放一些静态文件
│   ├── components // 组件都放在这个文件夹里
│   ├── config  // 环境配置
│   ├── filters  // 自定义过滤器
│   ├── directives  // 自定义指令
│   ├── main.js     // 入口文件
│   ├── router     // vuerouter
│   ├── store      // vuex 
│   ├── style      // 样式
│   ├── utils      // 存放一些插件和工具类函数
│   ├── vueSetting      // 和vue项目有关的配置
└── vue.config.js  // vue配置文件
```

## 配备功能
```
* axios请求配置:引入、拦截器、封装常用请求方法等——详情见request/http/index.js
* dayjs时间库：引入、配置中文——详情见vueSetting/index.js
* js-cookie便捷控制cookie：引入——详情见vueSetting/index.js
* vuex状态管理：引入、生成基本实例——详情见store/index.js
* vueRouter路由：引入、生成基本实例、重置路由方法——详情见store/index.js
* babel按需导入：babel-plugin-import插件——详情见babel.config.js
* eslint/prettier控制代码标准：prettier/eslint插件——详情见.prettierrc.js/eslintrc.js
* 使用less预处理器：less/less-loader插件
* 使用less全局变量：style-resources-loader插件——详情见vue.config.js
* 使用svg：svg-sprite-loader插件——详情见vue.config.js
* 使用svg：svg-sprite-loader插件——详情见vue.config.js
```
