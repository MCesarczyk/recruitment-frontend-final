import { AxiosError } from "axios";
import { Dispatch, SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../app/routes";
import { UserData } from "../../app/interfaces";
import { restApi } from "../../services/restAPI";
import { LOADING_DEMO_DELAY } from "../../app/constants";

export const useUserLoginUseCase = (setKey: Dispatch<SetStateAction<string>>) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const loginUser = async (user: UserData) => {
    try {
      const response = await restApi.login(user);
      if (response.status === 200) {
        setKey(response.data.key);
        setLoading(true);
        setTimeout(() => {
          navigate(ROUTES.home);
          setLoading(false);
        }, LOADING_DEMO_DELAY);
      }
    } catch (error: unknown) {
      console.error('Bad news! ', (error as AxiosError).message, '😒');
    }
  };

  return { loginUser, loading };
};
