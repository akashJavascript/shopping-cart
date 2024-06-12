import '../styles/CartItem.css';
import { useState } from 'react';
import QuantityInput from './QuantityInput';
const CartItem = ({ item, addToCart, setItemQuantity }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
    setItemQuantity(item.id, quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
      setItemQuantity(item.id, quantity - 1);
    }
  };
  return (
    <div className="cart-item">
      <img src={item.imgSrc} alt="item" className="item-image" />
      <div className="item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-price">
          {quantity} x ${item.price}
        </div>
        <QuantityInput
          quantity={quantity}
          setQuantity={setQuantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          changeFunction={setItemQuantity}
          itemId={item.id}
        />
      </div>
    </div>
  );
};

export default CartItem;
