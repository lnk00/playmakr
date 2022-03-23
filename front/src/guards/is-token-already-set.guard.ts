import Container from 'typedi';
import SessionService from '../services/session/session.service';

export default async () => {
  const sessionService = Container.get(SessionService);
  const token = localStorage.getItem('playmakr_token');

  if (token) {
    sessionService.setToken(token);
    return { path: '/home' };
  }

  return true;
};
