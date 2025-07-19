const axios = require('axios');
require('dotenv').config();

let spotifyToken = null;
let tokenExpires = null;

async function getSpotifyToken() {
  if (spotifyToken && tokenExpires && Date.now() < tokenExpires) {
    return spotifyToken;
  }
  const auth = Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64');
  const response = await axios.post('https://accounts.spotify.com/api/token',
    'grant_type=client_credentials',
    {
      headers: {
        'Authorization': `Basic ${auth}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  spotifyToken = response.data.access_token;
  tokenExpires = Date.now() + (response.data.expires_in * 1000) - 60000; // 1 min de margen
  return spotifyToken;
}

async function searchSpotify(query, type) {
  const token = await getSpotifyToken();
  const response = await axios.get('https://api.spotify.com/v1/search', {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
    params: {
      q: query,
      type,
      limit: 10,
    },
  });
  return response.data;
}

module.exports = { getSpotifyToken, searchSpotify }; 