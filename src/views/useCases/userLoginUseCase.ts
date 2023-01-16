import { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app/routes";
import { UserData } from "../../app/interfaces";
import { restApi } from "../../services/restAPI";

export const useUserLoginUseCase = (setKey: Dispatch<SetStateAction<string>>) => {
  const navigate = useNavigate();

  const loginUser = async (user: UserData) => {
    try {
      const response = await restApi.login(user);
      if (response.status === 200) {
        setKey(response.data.key);
        navigate(ROUTES.home);
      }
    } catch (error: unknown) {
      console.error('Bad news! ', (error as AxiosError).message, '😒');
    }
  };

  return { loginUser };
};
