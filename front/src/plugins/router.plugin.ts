import { App } from 'vue';
import * as VueRouter from 'vue-router';
import Home from '../components/pages/home/P-Home.vue';
import Login from '../components/pages/login/P-Login.vue';
import Dashboard from '../components/pages/home/dashboard/P-Dashboard.vue';
import isTokenAlreadySetGuard from '../guards/is-token-already-set.guard';
import setTokenGuard from '../guards/set-token.guard';

// eslint-disable-next-line no-unused-vars
const createRouter = (app: App): VueRouter.Router =>
  // eslint-disable-next-line implicit-arrow-linebreak
  VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
      {
        path: '/login',
        component: Login,
        beforeEnter: isTokenAlreadySetGuard.bind(this),
      },
      {
        path: '/home',
        component: Home,
        redirect: '/home/dashboard',
        beforeEnter: setTokenGuard.bind(this),
        children: [
          {
            path: 'dashboard',
            component: Dashboard,
          },
        ],
      },
      {
        path: '/:pathMatch(.*)*',
        redirect: '/login',
      },
    ],
  });

export default {
  install: (app: App) => {
    createRouter(app).install(app);
  },
};
