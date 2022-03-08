import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/listview',
    name: 'listview',
    component: () => import('../views/ListView.vue'),
  },
  {
    path: '/Search',
    name: 'search',
    component: () => import('../views/Search'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  },
  {
    path: '/me',
    name: 'me',
    beforeEnter: (to, from, next) => {
      if (store.state.user.isLogin) {
        next();
      } else {
        next('login');
      }
    },
    component: () => import('../views/Me'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
