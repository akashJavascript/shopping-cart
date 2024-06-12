import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Cart from './pages/Cart';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = item => {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(
      cartItem => cartItem.id === item.id
    );
    if (existingItemIndex !== -1) {
      // If item already exists, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += item.quantity;
      setCart(updatedCart);
    } else {
      // If item doesn't exist, add it to the cart
      setCart([...cart, item]);
    }
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
    {
      path: '/cart',
      element: <Cart items={cart} itemCount={itemCount} />,
    },
  ]);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};
export default App;
