import Vue from 'vue';
import Router from 'vue-router';
import home from './views/home.vue';
import login from './views/login.vue';
import add from './views/add.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/home',
      name: 'home',
      component: home,
      children: [
        {
          path: 'list',
          name: 'list',
          component: () => import(/* webpackChunkName: "list" */ './views/list.vue'),
        },
        {
          path: 'user',
          name: 'user',
          component: () => import(/* webpackChunkName: "user" */ './views/user.vue'),
        },
      ],
    },
    {
      path: '/add',
      name: 'add',
      component: add,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue'),
    // },
  ],
});
