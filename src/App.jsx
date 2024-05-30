import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    setCart([...cart, item]);
  };
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage itemCount={itemCount} />,
    },
    {
      path: '/shop',
      element: (
        <ShopPage cart={cart} addToCart={addToCart} itemCount={itemCount} />
      ),
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
export default App;
