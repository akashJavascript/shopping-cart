import NavbarShop from '../components/NavbarShop';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';
const Cart = ({ items, itemCount, addToCart, setItemQuantity }) => {
  return (
    <div>
      <NavbarShop itemCount={Number(itemCount)} />
      <h1 className="cart-header">Cart</h1>
      <div className="cart-items">
        {items.length === 0 ? (
          <div className="empty-cart">nothing in cart, add something!</div>
        ) : (
          items.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                addToCart={addToCart}
                setItemQuantity={setItemQuantity}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
