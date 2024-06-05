import '../styles/CartItem.css';
const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imgSrc} alt="item" className='item-image'/>
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="cart-item-price">
          {item.quantity} x ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
