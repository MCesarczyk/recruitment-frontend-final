import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './app/routes';
import { Login } from './views/Login';

export const App = () => (
  <Routes>
    <Route index element={<Navigate to={ROUTES.login} />} />
    <Route path={ROUTES.login} element={<Login />} />
  </Routes>
);
