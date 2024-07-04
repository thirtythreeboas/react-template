import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import {RouteNames} from '@/const';
import App from '@/App';
import {Home} from '@/pages/Home/Home';

const routes = [
  {
    path: RouteNames.ROOT,
    element: React.createElement(App),
    // errorElement: React.createElement(ErrorPage),
    children: [
      {index: true, element: React.createElement(Home)},
      //   {
      //     path: `${RouteNames.TEST}/:wordBlock`,
      //     element: React.createElement(Test),
      //   },
      //   {
      //     path: `${RouteNames.WORDS}/:wordBlock`,
      //     element: React.createElement(Dictionary),
      //   },
    ],
  },
];

export const router = createBrowserRouter(routes);
