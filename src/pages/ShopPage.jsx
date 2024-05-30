import ProductCard from '../components/ProductCard';
import { UseGetItems } from '../hooks/getItems';
import NavbarShop from '../components/NavbarShop';
import '../styles/ShopPage.css';

const ShopPage = ({ cart, addToCart, itemCount }) => {
  let items = UseGetItems(20);

  return (
    <div>
      <NavbarShop itemCount={itemCount}></NavbarShop>
      <h1 className="shop-header">Shop</h1>
      <div className="items-container">
        {items.map(item => {
          return (
            <ProductCard
              key={item.id}
              id={item.id}
              price={item.price}
              imgSrc={item.image}
              name={item.title}
              addToCart={addToCart}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ShopPage;
