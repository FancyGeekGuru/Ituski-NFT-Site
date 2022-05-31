import { dAppName } from 'config';
import withPageTitle from './components/PageTitle';
import ItuskiHome from './pages';

export const routeNames = {
  home: '/',
};

const routes: Array<any> = [
  {
    path: routeNames.home,
    title: 'Home',
    component: ItuskiHome
  },
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • ${dAppName}`
    : `${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
