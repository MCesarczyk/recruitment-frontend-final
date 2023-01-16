import axios from "axios";
import { API_URLS, BASE_URL } from "../app/apiUrls";
import { UserData } from "../app/interfaces";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export const restApi = {
  login: async (user: UserData) => {
    return await axiosInstance.post(API_URLS.login,
      {
        username: user.username,
        password: user.password,
      },
    );
  },

  getData: async (token: string) => {
    return await axiosInstance.get(API_URLS.data, {
      headers: {
        "Authorization": `Token ${token}`
      }
    });
  },

  getSecondary: async (token: string) => {
    return await axiosInstance.get(API_URLS.secondary, {
      headers: {
        "Authorization": `Token ${token}`
      }
    });
  },
};
