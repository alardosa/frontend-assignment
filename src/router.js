import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/company-data',
    },
    {
      path: '/company-data',
      name: 'Company Data',
      component: () => import('./views/company-data.vue'),
    },
    {
      path: '/company-page',
      name: 'Company Page',
      component: () => import('./views/company-page.vue'),
    }
  ]
})
