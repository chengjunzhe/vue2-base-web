import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = []

export const asyncRoutes = []

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    // base: '',//添加路由前缀
    // scrollBehavior: () => ({ y: 0 }),//回到顶部
    routes: [...constantRoutes], // 静态路由和动态路由的临时合并
  })

const router = createRouter() // 实例化一个路由

// 重置路由
// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
