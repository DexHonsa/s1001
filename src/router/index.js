import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/dashboard'
import Financial from '@/components/financial'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '/financial',
      name: 'financial',
      component: Financial
    },
    
  ]
})
