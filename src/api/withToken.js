import ourAxios from "./ourAxios";

export const postWithToken = async (path, data) => {
  const accessToken = localStorage.getItem("accessToken");
  const response = await ourAxios.post(path, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
    withCredentials: true,
  });
  return response;
};

export const getWithToken = async (path) => {
  const accessToken = localStorage.getItem("accessToken");
  const response = await ourAxios.get(path, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
    withCredentials: true,
  });

  return response;
};

export const deleteWithToken = async (path) => {
  const accessToken = localStorage.getItem("accessToken");
  const response = await ourAxios.delete(path, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
    withCredentials: true,
  });

  return response;
};

export const putWithToken = async (path, data) => {
  const accessToken = localStorage.getItem("accessToken");
  const response = await ourAxios.put(path, data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${accessToken}`,
    },
    withCredentials: true,
  });

  return response;
};
