import ourAxios from "./ourAxios";
import { getWithToken } from "./withToken"

export const getAllNewsesP = (page_number) => async () =>{
  console.log(page_number)
  const response = await ourAxios.get(`/api/news?page=${page_number}`);
  console.log(response)
  return response;
}

export const getNewsDetailP = (newsId) => async () => {
  const response = await getWithToken(`/api/news/${newsId}`);
  return response;
}

export const getNewsesByCategoryP = (category) => async () => {
  console.log(category)
  const response = await ourAxios.get(`/api/news/category?tag=${category}`);
  return response;
}

export const getNewsesBySearchP = (param,pageNum) => async () => {
  const response = await ourAxios.get(`/api/news/search?q=${param}&page=${pageNum}`);
  console.log(response)
  return response;
}

