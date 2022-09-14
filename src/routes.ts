import { IRouterConfig, lazy } from 'ice';
import Layout from '@/Layouts/BasicLayout';

const Home = lazy(() => import('@/pages/Home'));
const NotFound = lazy(() => import('@/components/NotFound'));
const Login = lazy(() => import('@/pages/Login'));
const UserList = lazy(() => import('@/pages/UserList'));
const Components = lazy(() => import('@/pages/market/list'));
const ComponentDetail = lazy(() => import('@/pages/market/detail'))

const routerConfig: IRouterConfig[] = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/',
    component: Layout,
    children: [
      {
        path: '/',
        exact: true,
        component: Home,
      },
      {
        path: '/market/list',
        exact: true,
        component: Components,
      },
      {
        path: '/market/detail',
        exact: true,
        component: ComponentDetail,
      },
      {
        path: '/user',
        exact: true,
        component: UserList,
      },
      {
        component: NotFound,
      },
    ],
  },
];

export default routerConfig;
