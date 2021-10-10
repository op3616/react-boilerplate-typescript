import React from 'react';
import { Route } from '../types/router.type';

const Home = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "home" */ '../pages/Home'
    ),
);

const Error = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "error" */ '../pages/Error'
    ),
);

const routes: Route[] = [
  {
    name: 'Trang chủ',
    path: '/',
    component: Home,
  },
  {
    name: 'Không tìm thấy trang',
    path: '*',
    component: Error,
  },
];

export default routes;
