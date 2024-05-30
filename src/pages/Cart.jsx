const Cart = ({ items }) => {
  return (
    <div>
      <h1>Cart</h1>
      <div className="cart-items">
        {items.map(item => {
          return [item.id, item.quantity];
        })}
      </div>
    </div>
  );
};

export default Cart;
