import { AxiosError } from "axios";
import { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../app/routes";
import { UserData } from "../app/types";
import { LoginBackground } from "../components/LoginBackground";
import { LoginForm } from "../components/LoginForm";
import { LoginSidebar } from "../components/LoginSidebar";
import { restApi } from "../services/restAPI";

interface LoginProps {
  setKey: Dispatch<SetStateAction<string>>
};

export const Login = ({ setKey }: LoginProps) => {
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

  return (
    <>
      <LoginSidebar>
        <LoginForm onSubmit={loginUser} />
      </LoginSidebar>
      <LoginBackground />
    </>
  )
};
