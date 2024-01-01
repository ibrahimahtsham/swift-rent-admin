import { Link } from "react-router-dom";

import SwiftRentLogo from "../../assets/images/swift-rent-logo-white.png";
import "../../assets/css/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar-container">
      <div className="custom-navbar">
        <Link className="dashboard-text" to="/dashboard/main">
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
