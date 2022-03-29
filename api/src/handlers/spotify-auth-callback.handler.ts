import axios from 'axios';
import { Context } from 'koa';

export default async (ctx: Context) => {
  const tokenResult = await axios.post(
    'https://accounts.spotify.com/api/token',
    new URLSearchParams([
      ['code', ctx.query.code as string],
      ['redirect_uri', import.meta.env.VITE_SPOTIFY_REDIRECT_URI as string],
      ['grant_type', 'authorization_code'],
    ]),
    {
      headers: {
        Authorization: `Basic ${Buffer.from(`${import.meta.env.VITE_SPOTIFY_CLIENT_ID}:${import.meta.env.VITE_SPOTIFY_CLIENT_SECRET}`).toString('base64')}`,
      },
      // eslint-disable-next-line comma-dangle
    }
  );

  ctx.redirect(`${import.meta.env.VITE_APP_BASE_URL}/home/dashboard?token=${encodeURIComponent(tokenResult.data.access_token)}`);
};
