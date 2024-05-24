import ProductCard from '../components/ProductCard';
import { UseGetItems } from '../hooks/getItems';
import { useState } from 'react';
const ShopPage = () => {
  let items = UseGetItems(20);
  let [cart, setCart] = useState([]);
  function addToCart(item) {
    setCart([...cart, item]);
  }
  return (
    <div>
      <h1>Shop Page</h1>
      {items.map(item => {
        return (
          <ProductCard
            key={item.id}
            id={item.id}
            price={item.price}
            imgSrc={item.image}
            name={item.title}
            addToCartFunction={function () {
              addToCart(item);
            }}
          />
        );
      })}
    </div>
  );
};
export default ShopPage;
