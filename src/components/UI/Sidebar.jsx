import { NavLink } from "react-router-dom";
import SwiftRentLogoColored from "../../assets/images/swift-rent-logo-color.png";
import "../../assets/css/Sidebar.css";

const Sidebar = ({ isClicked }) => {
  return (
    <div className={isClicked ? "menu-div-open" : "menu-div-close"}>
      <ul className="menu-item-container">
        <NavLink className="menu-item" to="/dashboard/manage-owners">
          <li>Manage Owners</li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard/manage-managers">
          <li>Manage Managers (WIP)</li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard/manage-tenants">
          <li>Manage Tenants</li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard">
          <li>User Complains (WIP)</li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard">
          <li>Manage Maintenance (WIP)</li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard">
          <li>User Reports (WIP)</li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard">
          <li>Financial Statistics (WIP)</li>
        </NavLink>
      </ul>
      <div className="copyright-container">
        <img
          className="copyright-logo"
          src={SwiftRentLogoColored}
          alt="swift rent logo"
        />
        {/*dynamically getting year for copyright*/}
        <p className="copyright">© {new Date().getFullYear()} SwiftRent</p>
      </div>
    </div>
  );
};

export default Sidebar;
