import ourAxios from "./ourAxios";
import { getWithToken } from "./withToken"

export const getAllNewsesP = (page_number) => async () =>{
  const response = await ourAxios.get(`/api/news?page=${page_number}`);
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

export const getNewsesBySearchP = (param,pageNum) => async () => {
  const response = await ourAxios.get(`/api/news/search?q=${param}&page=${pageNum}`);
  return response;
}

