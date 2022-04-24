import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../views/NotFound'
import SignIn from '../views/SignIn'
import SignUp from '../views/SignUp'
import Restaurants from '../views/Restaurants'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'root',
    redirect: '/restaurants'
  },
  {
    path: '/restaurants',
    name: 'restaurants',
    component: Restaurants
  },
  {
    path: '/restaurants/feeds',
    name: 'restaurants-feeds',
    component: () =>import('../views/RestaurantsFeeds')
  },
  {
    path: '/restaurants/top',
    name: 'restaurants-top',
    component: () =>import('../views/RestaurantsTop')
  },
  {
    path: '/users/top',
    name: 'users-top',
    component: () =>import('../views/UsersTop')
  },
  {
    path: '/signin',
    name: 'signIn',
    component: SignIn
  },
  {
    path: '/signup',
    name: 'signUp',
    component: SignUp
  },
  {
    path: '/restaurants/:id',
    name: 'restaurant',
    component: () =>import('../views/Restaurant')
  },
  {
    path: '/users/:id',
    name: 'user',
    component: () =>import('../views/User')
  },
  {
    path: '/restaurants/:id/dashboard',
    name: 'restaurantDashboard',
    component: () =>import('../views/RestaurantDashboard')
  },
  {
    path: '*',
    name: 'not-found',
    component: NotFound
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'active',
  routes
})

export default router
