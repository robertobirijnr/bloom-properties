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
    path: '/add-listing',
    name: 'Add Listings',
    component: () => import( '../components/Add-Listing.vue')
  },
  {
    path:"/view-details/:id",
    name:"Property Details",
    component:() =>import("../views/PropertyDetail.vue")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
