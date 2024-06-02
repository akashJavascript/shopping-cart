import ProductCardDisplay from '../components/ProductCardDisplay';
import NavbarShop from '../components/NavbarShop';
import CollectionBanner from '../components/CollectionBanner';
import '../styles/HomePage.css';
import { UseGetItems } from '../hooks/getItems';
const HomePage = ({ itemCount }) => {
  const items = UseGetItems(4);
  const prices = items.map(item => item.price);
  const imageUrls = items.map(item => item.image);

  return (
    <div>
      <NavbarShop itemCount={itemCount} />
      <CollectionBanner imageUrl="https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <main>
        <div className="products-header">
          <h2>Browse Products</h2>
          <p>Check out some of our featured products</p>
        </div>
        <div className="item-container">
          <ProductCardDisplay imgSrc={imageUrls[0]} price={prices[0]} />
          <ProductCardDisplay imgSrc={imageUrls[1]} price={prices[1]} />
          <ProductCardDisplay imgSrc={imageUrls[2]} price={prices[2]} />
          <ProductCardDisplay imgSrc={imageUrls[3]} price={prices[3]} />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
