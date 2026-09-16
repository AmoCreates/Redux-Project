import pexels from "../../lib/pexelsClient";
import unsplash from "../../lib/unsplashClient"

export const getImages = async () => {
  const res = await  unsplash.get('/search/photos', { params: { query: 'cats' } });
  return res.data.results;
}

export const getVideos = async () => {
  const res = await  pexels.get('/videos/search', { params: { query: 'cats', per_page: 6 } });
  return res.data.videos;
}