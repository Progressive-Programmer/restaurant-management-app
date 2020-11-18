
import Dashboard from '../pages/dashboard.jsx';
import HomePage from '../pages/home.jsx';
import LoginPage from '../pages/login'

var routes = [
  {
    path: '/sample/',
    component: HomePage,
  },
  {
    path: '/',
    component: LoginPage,
  },
  {
    path: '/dashboard/',
    component: Dashboard,
  }
];

export default routes;
