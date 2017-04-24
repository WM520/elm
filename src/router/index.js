import Vue from 'vue'
import Router from 'vue-router'
import good from '@/components/goods/good.vue'
import seller from '@/components/seller/seller.vue'
import ratings from '@/components/ratings/ratings.vue'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/good',
      name: 'good',
      component: good
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    },
    {
      path: '/good',
      name: 'good',
      component: good
    }
  ]
})
