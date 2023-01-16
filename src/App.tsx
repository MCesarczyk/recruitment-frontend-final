import { useState } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ROUTES } from './app/routes';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './views/Login';
import { Home } from './views/Home';
import { Map } from './components/Map';
import { Data } from './views/Data';
import { Secondary } from './views/Secondary';

export const App = () => {
  const [key, setKey] = useState<string>('');

  return (
    <Routes>
      <Route index element={<Navigate to={ROUTES.home} />} />
      <Route path={ROUTES.login} element={<Login setKey={setKey} />} />
      <Route path={ROUTES.home} element={
        <PrivateRoute sessionKey={key}>
          <Home />
        </PrivateRoute>
      } />
      <Route path={ROUTES.map} element={<PrivateRoute sessionKey={key}><Map /></PrivateRoute>}>
        <Route path={ROUTES.secondary} element={<Secondary sessionKey={key} />} />
        <Route path={ROUTES.data} element={<Data sessionKey={key} />} />
      </Route>
    </Routes>
  )
};
