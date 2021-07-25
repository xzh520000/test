import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/view/index'),
      children: [{
        path: '/index_work', component: () => import('@/view/index_work')
      }]
    },
  ]
})
