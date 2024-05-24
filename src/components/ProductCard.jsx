import PropTypes from 'prop-types';
import '../styles/ProductCard.css';
const ProductCard = ({ imgSrc, price, name, addToCartFunction, id }) => {
  return (
    <div className="shop-card" style={{ backgroundImage: `url(${imgSrc})` }}>
      <p className="item-name">{name}</p>
      <p className="price">${price}</p>
      <div className="add-cart-container">
        <label htmlFor="quantity">Quantity</label>
        <input type="number" name="quantity" id="quantity" />
        <button className="add-cart-button">Add to Cart</button>
      </div>
    </div>
  );
};
export default ProductCard;
ProductCard.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
