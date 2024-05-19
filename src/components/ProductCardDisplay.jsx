import Proptypes from 'prop-types';
import '../styles/ProductCardDisplay.css';
import { Link } from 'react-router-dom';
function ProductCardDisplay({ imgSrc, price }) {
  return (
    <div className="card" style={{ backgroundImage: `url(${imgSrc})` }}>
      <p className="price">${price}</p>
      <p className="shop-text">
        <Link to="shop" className='shop-link'>Go to Shop</Link>
      </p>
    </div>
  );
}
ProductCardDisplay.propTypes = {
  imgSrc: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
};
export default ProductCardDisplay;
