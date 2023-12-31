import { NavLink } from "react-router-dom";
import { MdManageAccounts } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import { TbDeviceAnalytics } from "react-icons/tb";
import { GoReport } from "react-icons/go";
import SwiftRentLogoColored from "../../assets/images/swift-rent-logo-color.png";
import "../../assets/css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="menu-div">
      <ul className="menu-item-container">
        <NavLink className="menu-item" to="/dashboard/manage-owners">
          <li>
            <MdManageAccounts className="me-3 fs-3" />
            Manage Owners
          </li>
        </NavLink>
        {/* <NavLink className="menu-item" to="/dashboard/manage-managers">
          <li>Manage Managers (WIP)</li>
        </NavLink> */}
        <NavLink className="menu-item" to="/dashboard/manage-tenants">
          <li>
            <MdManageAccounts className="me-3 fs-3" />
            Manage Tenants
          </li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard/manage-properties">
          <li>
            <LuTableProperties className="me-3 fs-3" />
            Manage Properties
          </li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard/user-info">
          <li>
            <FaUsers className="me-3 fs-3" />
            User Info
          </li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard/financial-stats">
          <li>
            <TbDeviceAnalytics className="me-3 fs-3" />
            Financial Statistics
          </li>
        </NavLink>
        <NavLink className="menu-item" to="/dashboard/user-complains">
          <li>
            <GoReport className="me-3 fs-3" />
            User Complains
          </li>
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
