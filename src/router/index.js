import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home/index.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/DiscoverMusic'

  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: "/DiscoverMusic",
        name: "DiscoverMusic",
        component: () => import("@/views/DiscoverMusic/index.vue")
      },
      {
        path: "/songDetails/:id",
        name: "songDetails",
        component: () => import("@/views/songDetails/index.vue")
      },
      {
        path: "/searchDetails/:songName",
        name: "searchDetails",
        component: () => import("@/views/searchDetails/index.vue")
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
});

export default router;

