import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Test from '@/pages/home/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    }
  ]
})
