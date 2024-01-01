import { NavLink } from "react-router-dom";

import { MdManageAccounts } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import { TbDeviceAnalytics } from "react-icons/tb";
import { GoReport } from "react-icons/go";

import SwiftRentLogoColored from "../../assets/images/swift-rent-logo-color.png";
import "../../assets/css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="menu-div">
      <div className="menu-item-container">
        <NavLink className="menu-item" to="/dashboard/manage-owners">
          <MdManageAccounts className="me-3 fs-3" />
          Manage Owners
        </NavLink>
        <br />
        {/* <NavLink className="menu-item" to="/dashboard/manage-managers">
          <li>Manage Managers (WIP)</li>
        </NavLink>
        <br /> */}
        <NavLink className="menu-item" to="/dashboard/manage-tenants">
          <MdManageAccounts className="me-3 fs-3" />
          Manage Tenants
        </NavLink>
        <br />
        <NavLink className="menu-item" to="/dashboard/manage-properties">
          <LuTableProperties className="me-3 fs-3" />
          Manage Properties
        </NavLink>
        <br />
        <NavLink className="menu-item" to="/dashboard/financial-stats">
          <TbDeviceAnalytics className="me-3 fs-3" />
          Financial Statistics
        </NavLink>
        <br />
        <NavLink className="menu-item" to="/dashboard/user-complains">
          <GoReport className="me-3 fs-3" />
          User Complains
        </NavLink>
      </div>
      <div className="copyright-container">
        <img
          className="copyright-logo"
          src={SwiftRentLogoColored}
          alt="swift rent logo"
        />
        {/*dynamically getting year for copyright*/}
        <p className="copyright mt-3">© {new Date().getFullYear()} SwiftRent</p>
      </div>
    </div>
  );
};

export default Sidebar;
