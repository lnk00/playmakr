import authUrl from './spotify/auth-url.resolver';
import topTracks from './spotify/top-tracks.resolver';
import topArtists from './spotify/top-artists.resolver';

export default {
  spotify: {
    authUrl,
    top: {
      tracks: topTracks,
      artists: topArtists,
    },
  },
};
