import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './app/routes';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './views/Login';
import { Home } from './views/Home';
import { Map } from './components/Map';

export const App = () => {
  const [key, setKey] = useState<string>('');

  return (
    <Routes>
      <Route index element={<Navigate to={ROUTES.login} />} />
      <Route path={ROUTES.login} element={<Login setKey={setKey} />} />
      <Route path={ROUTES.home} element={
        <PrivateRoute sessionKey={key}>
          <Home />
        </PrivateRoute>
      } />
      <Route path={ROUTES.map} element={<PrivateRoute sessionKey={key}><Map /></PrivateRoute>}>
        <Route path={ROUTES.primary} element={<h1>PRIMARY</h1>} />
        <Route path={ROUTES.secondary} element={<h1>SECONDARY</h1>} />
        <Route path={ROUTES.data} element={<h1>DATA</h1>} />
      </Route>
    </Routes>
  )
};
