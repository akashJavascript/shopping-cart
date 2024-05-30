import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';


const routes = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/shop',
    element: <ShopPage />,
  },
];

export default routes;
