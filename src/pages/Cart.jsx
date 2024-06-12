import NavbarShop from '../components/NavbarShop';
import CartItem from '../components/CartItem';
import { UseGetItems } from '../hooks/getItems';
import '../styles/Cart.css';
const Cart = ({ items }) => {
  return (
    <div>
      <NavbarShop />
      <h1 className='cart-header'>Cart</h1>
      <div className="cart-items">
        {items.length === 0 ? (
          <div className="empty-cart">nothing in cart, add something!</div>
        ) : (
          items.map(item => {
            return <CartItem key={item.id} item={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
