import ourAxios from "./ourAxios";
import { postWithToken } from "./withToken";

export const postLikeToggle = async ({newsId}) => {
  const response = await postWithToken(`/api/news/${newsId}/like`);
  return response;
}

export const postSubscribe = async ({email, nickname}) => {
  const response = await ourAxios.post("/api/news/subscribe",{email,nickname})
  return response;
}

export const getSubsciberCount = async () => {
  const response = await ourAxios.get("/api/news/subscribe_count");
  return response
}