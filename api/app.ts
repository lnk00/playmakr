import Koa from 'koa';
import Router from 'koa-router';
import Cors from '@koa/cors';
import GraphQl from './src/graphql';
import AuthSpotifyCallbackHandler from './src/handlers/spotify-auth-callback.handler';

const app = new Koa();
const router = new Router();
const cors = Cors();

router.all('/graphql', GraphQl);
router.get('/api/v1/spotify/auth/callback', AuthSpotifyCallbackHandler.bind(this));

app.use(cors);
app.use(router.routes());
app.use(router.allowedMethods());

if (import.meta.env.PROD) {
  app.listen(3000);
}

// eslint-disable-next-line import/prefer-default-export
export const playmakrApp = app;
