import NavbarShop from '../components/NavbarShop';
import CartItem from '../components/CartItem';
import '../styles/Cart.css';
const Cart = ({ items, itemCount, setItemQuantity, deleteItem }) => {
  let total = items.reduce(
    (total, item) => total + item.quantity * item.price,
    0,
  );
  let formatted = Intl.NumberFormat(undefined, {
    style: 'currency',
    currency: 'USD',
  }).format(total);
  return (
    <div>
      <NavbarShop itemCount={Number(itemCount)} />
      <h1 className="cart-header">Cart</h1>
      <div className="cart-items">
        {items.length === 0 ? (
          <p className="empty-cart">nothing in cart, add something!</p>
        ) : (
          items.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                setItemQuantity={setItemQuantity}
                deleteItem={deleteItem}
              />
            );
          })
        )}
      </div>
      <section className="checkout-section">
        <div className="total">Total: {formatted}</div>
        <button className="checkout-button">Checkout</button>
      </section>
    </div>
  );
};

export default Cart;
