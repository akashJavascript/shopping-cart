import '../styles/CartItem.css';
import QuantityInput from './QuantityInput';
const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <img src={item.imgSrc} alt="item" className="item-image" />
      <div className="item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">
          {item.quantity} x ${item.price}
        </div>
      </div>
    </div>
  );
};

export default CartItem;
