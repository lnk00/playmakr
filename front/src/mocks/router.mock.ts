import { RouteLocationRaw } from 'vue-router';

export const routerMock = {
  push: (to: RouteLocationRaw) => new Promise(() => {}),
};
