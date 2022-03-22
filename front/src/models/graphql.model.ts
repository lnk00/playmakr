export interface GraphqlQuery {
  query: string;
  variables?: any;
}

export interface Artist {
  rank: number;
  name: string;
  image: string;
  followers: number;
}

export interface Track {
  rank: number;
  name: string;
  image: string;
  artist: string;
  id: string;
}

export interface Top {
  tracks: Track[];
  artists: Artist[];
}

export interface Spotify {
  authUrl: string;
  top: Top;
}

export interface GraphqlQueryResponse {
  spotify: Spotify;
}
