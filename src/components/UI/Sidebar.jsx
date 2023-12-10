import { NavLink } from "react-router-dom";
import SwiftRentLogoColored from "../../assets/images/swift-rent-logo-color.png";
import "../../assets/css/Sidebar.css";

const Sidebar = ({ isClicked }) => {
  return (
    <div className={isClicked ? "menu-div-open" : "menu-div-close"}>
      <ul className="menu-item-container">
        <li>
          <NavLink className="menu-item" to="/dashboard/manage-owner">
            Manage Owners
          </NavLink>
        </li>
        <li>
          <a>Lorem Ipsum</a>
        </li>
      </ul>
      <div className="copyright-container">
        <img
          className="copyright-logo"
          src={SwiftRentLogoColored}
          alt="swift rent logo"
        />
        <p className="copyright">© {new Date().getFullYear()} Swift Rent</p>
      </div>
    </div>
  );
};

export default Sidebar;
