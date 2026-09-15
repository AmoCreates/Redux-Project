import unsplash from "./unsplashClient"

export const getImages = async () => {
  const res = await  unsplash.get('/search/photos', { params: { query: 'cats' } });
  return res.data.results;
}