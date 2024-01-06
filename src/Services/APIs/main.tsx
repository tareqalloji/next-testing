import axios from "axios";

export const getRequest = async (url: string) => {
  return await axios.get(url, {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const getRequestWithParams = async (url: string, params: any) => {
  return await axios.get(url, {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    params: params,
  });
};

export const addPostRequest = async (url: string, data: any) => {
  return await axios.post(url, data, {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const PostRequest = async (url: string, data: any) => {
  return await axios.post(url, data, {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const editPostImageRequest = async (url: string, data: any) => {
  return await axios.post(url, data, {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
};

export const editPutRequest = async (url: string, data: any) => {
  return await axios.put(url, data, {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};

export const editPutStatus = async (url: string) => {
  return await axios.put(
    url,
    {},
    {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
};

export const postImageRequest = async (url: string, data: any) => {
  return await axios.post(url, data, {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "multipart/form-data",
    },
  });
};

export const deleteRequest = async (url: string) => {
  return await axios.delete(url, {
    headers: {
      Authorization: "Bearer " + sessionStorage.getItem("token"),
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
