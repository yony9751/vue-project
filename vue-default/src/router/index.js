import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact", webpackPrefetch : true */ '../views/ContactView.vue')
  },
  {
    path: '/basic',
    name: 'basic',
    component: () => import(/* webpackChunkName: "basic" */ '../views/BasicView.vue')
  },
  {
    path: '/databinding',
    name: 'DataBinding',
    component: () => import(/* webpackChunkName: "databinding" */ '../views/DataBinding.vue')
  },
  {
    path: '/databindinghtml',
    name: 'DataBindingHtml',
    component: () => import(/* webpackChunkName: "databindinghtml" */ '../views/DataBindingHtml.vue')
  },
  {
    path: '/example',
    name: 'Example',
    component: () => import(/* webpackChunkName: "example" */ '../views/Example.vue')
  },
  {
    path: '/rendering',
    name: 'Rendering',
    component: () => import(/* webpackChunkName: "rendering" */ '../views/Rendering.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import(/* webpackChunkName: "event" */ '../views/Event.vue')
  },
  {
    path: '/serverdata',
    name: 'ServerData',
    component: () => import(/* webpackChunkName: "serverdata" */ '../views/ServerData.vue')
  },
  {
    path: '/slot',
    name: 'SlotUseModalLayout',
    component: () => import(/* webpackChunkName: "slot" */ '../views/SlotUseModalLayout.vue')
  },
  {
    path: '/provideinject',
    name: 'ProvideInject',
    component: () => import(/* webpackChunkName: "provideinject" */ '../views/ProvideInject.vue')
  },
  {
    path: '/mixin',
    name: 'MixinTest',
    component: () => import(/* webpackChunkName: "mixin" */ '../views/MixinTest.vue')
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: () => import(/* webpackChunkName: "calculator" */ '../views/Calculator.vue')
  },
  {
    path: '/compositionAPI',
    name: 'CompositionAPI',
    component: () => import(/* webpackChunkName: "compositionAPI" */ '../views/CompositionAPI.vue')
  },
  {
    path: '/compositionAPI2',
    name: 'CompositionAPI2',
    component: () => import(/* webpackChunkName: "compositionAPI2" */ '../views/CompositionAPI2.vue')
  },
  {
    path: '/compositionAPI3',
    name: 'CompositionAPI3',
    component: () => import(/* webpackChunkName: "compositionAPI3" */ '../views/CompositionAPI3.vue')
  },
  {
    path: '/compositionAPI4',
    name: 'CompositionAPI4',
    component: () => import(/* webpackChunkName: "compositionAPI4" */ '../views/CompositionAPI3.vue')
  },
  {
    path: '/plugins',
    name: 'Plugins',
    component: () => import(/* webpackChunkName: "plugins" */ '../views/PluginsTest.vue')
  },
  {
    path: '/storeaccess',
    name: 'Store Access',
    component: () => import(/* webpackChunkName: "storeaccess" */ '../views/StoreAccess.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
