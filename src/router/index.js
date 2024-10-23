import {
  createRouter,
  createWebHistory
} from 'vue-router'
import IconView from '../views/IconView.vue'

const router = createRouter({
  history: createWebHistory(
    import.meta.env.BASE_URL),
  // 首页是直接加载的，其余组件是按需加载的
  routes: [{
      path: '/',
      name: 'icon',
      component: IconView
    },
    {
      path: '/button',
      name: 'button',
      component: () => import('../views/ButtonView.vue')
    },
    {
      path: '/card',
      name: 'card',
      component: () => import('../views/CardView.vue')
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: () => import('../views/DialogView.vue')
    },
    {
      path: '/collapse',
      name: 'collapse',
      component: () => import('../views/CollapseView.vue')
    },
    {
      path: '/pager',
      name: 'pager',
      component: () => import('../views/PagerView.vue')
    },
    {
      path: '/tooltip',
      name: 'tooltip',
      component: () => import('../views/TooltipView.vue')
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: () => import('../views/DropdownView.vue')
    }
  ],
  // 针对router-link的激活样式设置
  linkActiveClass: 'active'
})

export default router
