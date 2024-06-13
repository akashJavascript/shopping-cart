import '../styles/QuantityInput.css';
import PropTypes from 'prop-types';
import { useState } from 'react';
function QuantityInput({
  quantity,
  setQuantity,
  incrementQuantity,
  decrementQuantity,
  changeFunction = null,
  itemId = null,
}) {
  const [lastValidNumber, setLastValidNumber] = useState(quantity);

  const handleChange = (event) => {
    let value = event.target.value;
    if (value !== '') {
      value = parseInt(Number(value));
      if (value < 1) {
        value = 1;
      }
      setLastValidNumber(value);
    }
    setQuantity(value);
    if (changeFunction && value !== '') {
      changeFunction(itemId, value);
    }
  };

  const handleBlur = (event) => {
    if (event.target.value === '') {
      setQuantity(lastValidNumber);
    }
  };
  return (
    <div className="quantity-container">
      <button className="decrement-button" onClick={decrementQuantity}>
        -
      </button>
      <input
        type="number"
        name="quantity"
        id="quantity"
        value={quantity}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      <button className="increment-button" onClick={incrementQuantity}>
        +
      </button>
    </div>
  );
}

export default QuantityInput;
QuantityInput.propTypes = {
  quantity: PropTypes.number.isRequired,
  setQuantity: PropTypes.func.isRequired,
  incrementQuantity: PropTypes.func.isRequired,
  decrementQuantity: PropTypes.func.isRequired,
  changeFunction: PropTypes.func,
  itemId: PropTypes.number,
};
