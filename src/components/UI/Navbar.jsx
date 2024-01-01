import { Link, useNavigate } from "react-router-dom";
import { clearCookies } from "../../utils/helpers";
import SwiftRentLogo from "../../assets/images/swift-rent-logo-white.png";
import "../../assets/css/Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  function handleLogout() {
    clearCookies();
    navigate("/", { replace: true });
  }

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
      <button onClick={handleLogout} className="logout-button">
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
