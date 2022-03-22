import axios from 'axios';
import { Track } from '../../../../shared/models/spotify.model';

export default async (args: any): Promise<Track[]> => {
  const res = await axios.get(`${import.meta.env.VITE_SPOTIFY_BASE_URL}me/top/tracks`, { headers: { Authorization: `Bearer ${args.token}` } });
  const tracks: Track[] = [];
  res.data.items.forEach((element: any, idx: number) => {
    tracks.push({
      rank: idx + 1,
      name: element.name,
      image: element.album.images[1].url,
      artist: element.artists[0].name,
      id: element.id,
    });
  });
  return tracks;
};
