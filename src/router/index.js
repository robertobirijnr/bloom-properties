import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details',
    name: 'Home Details',
    component: () => import(/* webpackChunkName: "about" */ '../components/PropertyDetail.vue')
  },
  {
    path: '/add-listing',
    name: 'Add Listings',
    component: () => import( '../components/Add-Listing.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
