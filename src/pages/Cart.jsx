import NavbarShop from '../components/NavbarShop';
import CartItem from '../components/CartItem';
import { UseGetItems } from '../hooks/getItems';
const Cart = ({ items }) => {
  return (
    <div>
      <NavbarShop />
      <h1>Cart</h1>
      {console.log(items)}
      <div className="cart-items">
        {items.length === 0 ? (
          <div className="empty-cart">nothing in cart, add something!</div>
        ) : (
          items.map(item => {
            return <CartItem key={item.id} item={item} />;
            console.log('b');
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
