import { Container } from 'typedi';
import { RouteLocationNormalized } from 'vue-router';
import SessionService from '../services/session/session.service';

export default async (to: RouteLocationNormalized) => {
  const sessionService = Container.get(SessionService);

  if (to.query.token) {
    sessionService.setToken(to.query.token as string);
  } else {
    const token = SessionService.getTokenFromLocalStorage();
    if (token) sessionService.setToken(token);
    else return { path: '/login' };
  }

  return true;
};
