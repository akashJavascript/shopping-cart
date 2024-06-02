import PropTypes from 'prop-types';
import '../styles/ProductCard.css';
import { useState } from 'react';

const ProductCard = ({ imgSrc, price, name, addToCart, id }) => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
    }
  };

  return (
    <div className="shop-card">
      <div className="card-top">
        <p className="item-name">{name}</p>
      </div>
      <div
        className="card-image"
        style={{ backgroundImage: `url(${imgSrc})` }}
      ></div>
      <div className="card-bottom">
        <p className="shop-price">${price}</p>
        <div className="add-cart-container">
          <div className="quantity-container">
            <button className="decrement-button" onClick={decrementQuantity}>
              -
            </button>
            <input
              type="number"
              name="quantity"
              id="quantity"
              value={quantity}
              onChange={e =>
                setQuantity(e.target.value === '' ? '' : Number(e.target.value))
              }
            />
            <button className="increment-button" onClick={incrementQuantity}>
              +
            </button>
          </div>
          <button
            className="add-cart-button"
            onClick={() =>
              addToCart({
                id: id,
                quantity: Number(quantity),
                price: price,
                imgSrc: imgSrc,
                name: name,
              })
            }
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  addToCart: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};
