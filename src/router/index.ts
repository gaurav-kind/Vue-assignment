import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignupView from '../views/SignupView.vue'
import LoginView from '../views/LoginView.vue'
import WishListView from '../views/WishListView.vue'
import CartView from '../views/CartView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartView,
    meta: { requiresAuth: true }
  }
  ,
  {
    path: '/wishlist',
    name: 'wishlist',
    component: WishListView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('loggedInUser'); 

  if (to.meta.requiresAuth && !isAuthenticated) {
    next('/login'); 
  } else {
    next(); 
  }
});

export default router
