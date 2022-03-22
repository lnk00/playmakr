export default (): string => {
  const CLIENT_ID = encodeURIComponent(import.meta.env.VITE_SPOTIFY_CLIENT_ID as string);
  const REDIRECT_URI = encodeURIComponent(import.meta.env.VITE_SPOTIFY_REDIRECT_URI as string);
  const SCOPE = encodeURIComponent(import.meta.env.VITE_SPOTIFY_SCOPE as string);
  const RESPONSE_TYPE = encodeURIComponent('code');
  const authUrl = `https://accounts.spotify.com/authorize?response_type=${RESPONSE_TYPE}&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URI}`;

  return authUrl;
};
