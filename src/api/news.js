import ourAxios from "./ourAxios";
import { getWithToken } from "./withToken"

export const getAllNewses = async () =>{
  const response = await ourAxios.get("/api/news");
  return response;
}

export const getNewsDetailP = (newsId) => async () => {
  const response = await getWithToken(`/api/news/${newsId}`);
  return response;
}

export const getNewsesByCategoryP = (category) => async () => {
  const response = await ourAxios.get(`/api/news/category?tag=${category}`);
  return response;
}

export const getNewsesBySearchP = (keyword) => async () => {
  const response = await ourAxios.get(`/api/news/search?q=${keyword}`);
  return response;
}

