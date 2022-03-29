import { Artist } from '../../../../shared/models/spotify.model';
import { get } from '../../tools/fetcher.tools';

export default async (args: any): Promise<Artist[]> => {
  const res = await get(`${import.meta.env.VITE_SPOTIFY_BASE_URL}me/top/artists`, args.token);
  const artists: Artist[] = [];
  res?.data.items.forEach((element: any, idx: number) => {
    artists.push({
      rank: idx + 1,
      name: element.name,
      image: element.images[1].url,
      followers: element.followers.total,
    });
  });
  return artists;
};
