import axios from 'axios';
import { Artist } from '../../../../shared/models/spotify.model';

export default async (args: any): Promise<Artist[]> => {
  const res = await axios.get(`${import.meta.env.VITE_SPOTIFY_BASE_URL}me/top/artists`, { headers: { Authorization: `Bearer ${args.token}` } });
  const tracks: Artist[] = [];
  res.data.items.forEach((element: any, idx: number) => {
    tracks.push({
      rank: idx + 1,
      name: element.name,
      image: element.images[1].url,
      followers: element.followers.total,
    });
  });
  return tracks;
};
