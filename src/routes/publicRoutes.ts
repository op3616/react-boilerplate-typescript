import React from 'react';
import { Route } from '../types/router.types';

const IndexPage = React.lazy(
  () => import(/* webpackPrefetch: true*/ '../pages/index'),
);

const NotFoundPage = React.lazy(
  () => import(/* webpackPrefetch: true */ '../pages/404'),
);

const routes: Route[] = [
  {
    name: 'Trang chủ',
    path: '/',
    component: IndexPage,
  },
  {
    name: 'Cineflex',
    path: '*',
    component: NotFoundPage,
  },
];

export default routes;
