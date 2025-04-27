import { Link } from "react-router-dom";
import "./Navbar.css"; // Add styles for the navbar

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">AgriRental</div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/catalog">Machines</Link>
        </li>
        <li>
          <Link to="/features">Features</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
