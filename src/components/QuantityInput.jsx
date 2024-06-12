import '../styles/QuantityInput.css';
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
      value = Number(value);
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
