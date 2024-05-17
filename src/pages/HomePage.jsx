import ProductCardDisplay from '../components/ProductCardDisplay';
import Navbar from '../components/Navbar';
const HomePage = () => {
  return (
    <main>
      <Navbar />
      <ProductCardDisplay
        imgSrc="https://picsum.photos/1000/1000
        "
        price={100}
      />
      <h1>Welcome!</h1>
    </main>
  );
};

export default HomePage;
