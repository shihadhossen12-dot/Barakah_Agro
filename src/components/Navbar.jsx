import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="logo-name">
          <img
          src="/logo.jpeg"
          alt="Barakah Store Logo"
          className="store-logo"
        />
        <h2>Barakah Agro </h2>
      </div>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart 🛒</Link>
      </div>
    </nav>
  );
}

export default Navbar;