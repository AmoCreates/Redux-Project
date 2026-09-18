import pexels from "../../lib/pexelsClient";
import unsplash from "../../lib/unsplashClient"

export const getImages = async (query: string) => {
  try {
    const res = await  unsplash.get('/search/photos', { params: { query: query, } });
    return res.data.results;
  } catch (error) {
    console.log(error);
    console.log("unsplash fetching photos error");
    return [];
  }
}

export const getVideos = async (query: string) => {
  try {
    const res = await  pexels.get('/videos/search', { params: { query: query, per_page: 6 } });
    return res.data.videos;
  } catch (error) {
    console.log(error);
    console.log("pexels fetching videos error");
    return [];
  }
}