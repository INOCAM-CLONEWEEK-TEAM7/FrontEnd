import ourAxios from "./ourAxios";
import { getWithToken } from "./withToken"

export const getAllNewsesP = (pageNum) => async () =>{
  const response = await ourAxios.get(`/api/news?page=${pageNum}`);
  return response;
}

export const getNewsDetailP = (newsId) => async () => {
  const response = await getWithToken(`/api/news/${newsId}`);
  return response;
}

export const getNewsesByCategoryP = (category, pageNum) => async () => {
  const response = await ourAxios.get(`/api/news/category?tag=${category}&page=${pageNum}`);
  return response;
}

export const getNewsesBySearchP = (keyword, pageNum) => async () => {
  const response = await ourAxios.get(`/api/news/search?q=${keyword}&page=${pageNum}`);
  return response;
}

