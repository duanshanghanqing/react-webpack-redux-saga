import { asyncComponent } from '../components/AsyncComponent';

export default [
  {
    component: asyncComponent(() => import('../containers/Root')),
    routes: [
      {
        path: '/',
        exact: true,
        component: asyncComponent(() => import('../containers/Home')),
      },
      {
        path: '/about',
        exact: true,
        component: asyncComponent(() => import('../containers/About')),
      },
      {
        path: '/counter',
        exact: true,
        component: asyncComponent(() => import('../containers/Counter')),
      },
      {
        path: '/newfeatures',
        exact: true,
        component: asyncComponent(() => import('../containers/NewFeatures')),
      },
    ],
  },
];
