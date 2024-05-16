import Proptypes from 'prop-types';
import '../styles/ProductCardDisplay.css';

function ProductCardDisplay({ imgSrc, price }) {
  return (
    <div style={{ backgroundImage: `url:(${imgSrc})` }}>
      <p>{price}</p>
    </div>
  );
}
ProductCardDisplay.propTypes = {
  imgSrc: Proptypes.string.isRequired,
  price: Proptypes.number.isRequired,
};
export default ProductCardDisplay;
