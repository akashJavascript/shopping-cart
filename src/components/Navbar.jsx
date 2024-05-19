import '../styles/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
        <svg
          className="logo"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12,1A9.957,9.957,0,0,0,2,10.889a9.791,9.791,0,0,0,3.375,7.4v1.487A3.24,3.24,0,0,0,8.625,23h6.75a3.24,3.24,0,0,0,3.25-3.223V18.29A9.791,9.791,0,0,0,22,10.889,9.957,9.957,0,0,0,12,1Zm5,16.037a1,1,0,0,0-.379.784v1.956A1.239,1.239,0,0,1,15.375,21H15V18a1,1,0,0,0-2,0v3H11V18a1,1,0,0,0-2,0v3H8.625a1.239,1.239,0,0,1-1.25-1.223V17.821A1,1,0,0,0,7,17.037a7.813,7.813,0,0,1-3-6.148,8,8,0,0,1,16,0A7.813,7.813,0,0,1,17,17.037ZM11,13a2,2,0,1,1-2-2A2,2,0,0,1,11,13Zm6,0a2,2,0,1,1-2-2A2,2,0,0,1,17,13Z" />
        </svg>
        <h1 className="nav-header">Dangerware</h1>

        <ul className="links-list">
          <li>
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="nav-link">
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
