import '../styles/CartItem.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
import QuantityInput from './QuantityInput';
const CartItem = ({ item, setItemQuantity, deleteItem }) => {
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
        <div className="item-options">
          <QuantityInput
            quantity={quantity}
            incrementQuantity={incrementQuantity}
            setQuantity={setQuantity}
            decrementQuantity={decrementQuantity}
            changeFunction={setItemQuantity}
            itemId={item.id}
          />
          <button className="delete-item" onClick={() => deleteItem(item.id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    imgSrc: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
  setItemQuantity: PropTypes.func.isRequired,
  deleteItem: PropTypes.func.isRequired,
};
