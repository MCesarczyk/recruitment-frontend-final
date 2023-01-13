import axios from "axios";
import { API_URLS, BASE_URL } from "../app/apiUrls";
import { UserData } from "../app/types";

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
};
