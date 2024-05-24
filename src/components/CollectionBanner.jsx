import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/CollectionBanner.css';

const CollectionBanner = ({ imageUrl }) => {
  return (
    <div
      className="collection-banner"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="text-container">
        <h1 className="collection-header">New Collection</h1>
        <p className="collection-description">
          Check out our latest collection of products.
        </p>
        <Link to={'/shop'}>
          <button className="shop-button">Go to Shop</button>
        </Link>   
      </div>
    </div>
  );
};

CollectionBanner.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};

export default CollectionBanner;
