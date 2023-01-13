import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../app/routes';

type PrivateRouteProps = {
  children: ReactNode;
  sessionKey: string;
};

export const PrivateRoute = ({ children, sessionKey }: PrivateRouteProps) => {
  const location = useLocation();

  if (!sessionKey) {
    return <Navigate to={ROUTES.login} state={{ from: location }} replace />;
  };

  return <>{children}</>;
};
