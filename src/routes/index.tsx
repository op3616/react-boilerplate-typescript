import React from 'react';

import { Route, Routes } from 'react-router';

import publicRoutes from './publicRoutes';

const Router = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, component: Component }) => (
        <Route key={path} element={<Component />} path={path} />
      ))}
    </Routes>
  );
};

export default Router;
