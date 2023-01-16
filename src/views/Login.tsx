import { Dispatch, SetStateAction } from "react";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { LoginBackground } from "../components/LoginBackground";
import { LoginForm } from "../components/LoginForm";
import { LoginSidebar } from "../components/LoginSidebar";
import { useUserLoginUseCase } from "./useCases/userLoginUseCase";

interface LoginProps {
  setKey: Dispatch<SetStateAction<string>>;
};

export const Login = ({ setKey }: LoginProps) => {
  const { loginUser, loading } = useUserLoginUseCase(setKey);

  return (
    <>
      {loading ? <LoadingSpinner /> : (
        <LoginSidebar>
          <LoginForm onSubmit={loginUser} />
        </LoginSidebar>
      )}
      <LoginBackground />
    </>
  )
};
