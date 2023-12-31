import { NavLink } from "react-router-dom";
import SwiftRentLogoColored from "../../assets/images/swift-rent-logo-color.png";
import "../../assets/css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="menu-div">
      <ul className="menu-item-container">
        <NavLink className="menu-item" to="/dashboard/manage-owners">
          <li>Manage Owners</li>
        </NavLink>
        {/* <NavLink className="menu-item" to="/dashboard/manage-managers">
          <li>Manage Managers (WIP)</li>
        </NavLink> */}
        <NavLink className="menu-item" to="/dashboard/manage-tenants">
          <li>Manage Tenants</li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard/manage-properties">
          <li>Manage Properties (WIP)</li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard/user-info">
          <li>User Info (WIP)</li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard/financial-stats">
          <li>Financial Statistics (WIP)</li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard/user-complains">
          <li>User Complains (WIP)</li>
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
