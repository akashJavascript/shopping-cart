import Proptypes from 'prop-types';
import '../styles/ProductCardDisplay.css';

function ProductCardDisplay({ imgSrc, price }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${imgSrc})` }}>
      <p className="price">${price}</p>
      <p className="shop-text">Go to Shop</p>
    </div>
  );
}
ProductCardDisplay.propTypes = {
  imgSrc: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
};
export default ProductCardDisplay;
