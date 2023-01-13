import { useEffect, useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './app/routes';
import { PrivateRoute } from './components/privateRoute';
import { Home } from './views/Home';
import { Login } from './views/Login';

export const App = () => {
  const [key, setKey] = useState<string>('');

  useEffect(() => {
    console.log(key);
  }, [key]);

  return (
    <Routes>
      <Route index element={<Navigate to={ROUTES.login} />} />
      <Route path={ROUTES.login} element={<Login setKey={setKey} />} />
      <Route path={ROUTES.home} element={
        <PrivateRoute sessionKey={key}>
          <Home />
        </PrivateRoute>
      } />
    </Routes>
  )
};
