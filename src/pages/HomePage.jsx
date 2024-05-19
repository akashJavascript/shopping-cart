import ProductCardDisplay from '../components/ProductCardDisplay';
import Navbar from '../components/Navbar';
import '../styles/HomePage.css';
const HomePage = () => {
  return (
    <div>
      <Navbar />
      <main>
        <div className="item-container">
          <ProductCardDisplay
            imgSrc="https://picsum.photos/1000/1000"
            price={100}
          />
          <ProductCardDisplay
            imgSrc="https://picsum.photos/1000/1000"
            price={100}
          />
          <ProductCardDisplay
            imgSrc="https://picsum.photos/1000/1000"
            price={100}
          />
          <ProductCardDisplay
            imgSrc="https://picsum.photos/1000/1000"
            price={100}
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
