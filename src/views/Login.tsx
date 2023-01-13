import { Loading } from "../components/Loading";
import { LoginBackground } from "../components/LoginBackground";
import { LoginForm } from "../components/LoginForm";
import { LoginSidebar } from "../components/LoginSidebar";

export const Login = () => {
  const isFetching = false;

  if (isFetching) {
    return <Loading />;
  }

  return (
    <>
      <LoginSidebar>
        <LoginForm />
      </LoginSidebar>
      <LoginBackground />
    </>
  );
};
