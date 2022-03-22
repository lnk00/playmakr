import { App } from 'vue';
import * as VueRouter from 'vue-router';
import Home from '../components/pages/home/P-Home.vue';
import Login from '../components/pages/login/P-Login.vue';

// eslint-disable-next-line no-unused-vars
const createRouter = (app: App): VueRouter.Router =>
  // eslint-disable-next-line implicit-arrow-linebreak
  VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: [
      {
        path: '/login',
        component: Login,
      },
      {
        path: '/home',
        component: Home,
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
