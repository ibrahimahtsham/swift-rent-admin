import { IoIosMenu } from "react-icons/io";
import { Link } from "react-router-dom";
import SwiftRentLogo from "../../assets/images/swift-rent-logo-white.png";
import "../../assets/css/Navbar.css";

const Navbar = ({ handleMenuClick }) => {
  return (
    <nav className="navbar-container">
      <div className="navbar">
        <IoIosMenu className="bars" onClick={handleMenuClick} id="bars" />
        <Link className="dashboard-text" to="/dashboard">
          <img
            className="nav-logo dashboard-text"
            src={SwiftRentLogo}
            alt="swift rent logo"
          />
          <p className="dashboard-text">Admin Panel</p>
        </Link>
      </div>
      <Link className="logout-button" to="/">
        Logout
      </Link>
    </nav>
  );
};

export default Navbar;
