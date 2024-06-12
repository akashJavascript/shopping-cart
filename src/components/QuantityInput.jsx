function QuantityInput({
  quantity,
  setQuantity,
  incrementQuantity,
  decrementQuantity,
}) {
  const handleChange = (event) => {
    setQuantity(event.target.value === '' ? '' : Number(event.target.value));
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
      />
      <button className="increment-button" onClick={incrementQuantity}>
        +
      </button>
    </div>
  );
}

export default QuantityInput;
