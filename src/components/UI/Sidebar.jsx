import { NavLink, redirect } from "react-router-dom";

import { MdManageAccounts } from "react-icons/md";
import { LuTableProperties } from "react-icons/lu";
import { TbDeviceAnalytics } from "react-icons/tb";
import { GoReport } from "react-icons/go";

import { useEffect, useState } from "react";

import SwiftRentLogoColored from "../../assets/images/swift-rent-logo-color.png";
import "../../assets/css/Sidebar.css";

const Sidebar = () => {
  const [runEffect, setRunEffect] = useState(false);
  useEffect(() => {
    var manageOwnersLinkID = document.getElementById("manageOwnersLink");
    var manageTenantsLinkID = document.getElementById("manageTenantsLink");
    var managePropertiesLinkID = document.getElementById(
      "managePropertiesLink"
    );
    var financialStatisticsLinkID = document.getElementById(
      "financialStatisticsLink"
    );
    var userComplainsLinkID = document.getElementById("userComplainsLink");

    if(window.location.pathname === "/dashboard/main"){
      manageOwnersLinkID.style.backgroundColor = "";
      manageOwnersLinkID.style.color = "";
      manageTenantsLinkID.style.backgroundColor = "";
      manageTenantsLinkID.style.color = "";
      managePropertiesLinkID.style.backgroundColor = "";
      managePropertiesLinkID.style.color = "";
      financialStatisticsLinkID.style.backgroundColor = "";
      financialStatisticsLinkID.style.color = "";
      userComplainsLinkID.style.backgroundColor = "";
      userComplainsLinkID.style.color = "";
    }

    if (window.location.pathname === "/dashboard/manage-owners") {
      manageOwnersLinkID.style.backgroundColor = "#397FED";
      manageOwnersLinkID.style.color = "#ceecff";
    } else {
      manageOwnersLinkID.style.backgroundColor = "";
      manageOwnersLinkID.style.color = "";
    }

    if (window.location.pathname === "/dashboard/manage-tenants") {
      manageTenantsLinkID.style.backgroundColor = "#397FED";
      manageTenantsLinkID.style.color = "#ceecff";
    } else {
      manageTenantsLinkID.style.backgroundColor = "";
      manageTenantsLinkID.style.color = "";
    }

    if (window.location.pathname === "/dashboard/manage-properties") {
      managePropertiesLinkID.style.backgroundColor = "#397FED";
      managePropertiesLinkID.style.color = "#ceecff";
    } else {
      managePropertiesLinkID.style.backgroundColor = "";
      managePropertiesLinkID.style.color = "";
    }

    if (window.location.pathname === "/dashboard/financial-stats") {
      financialStatisticsLinkID.style.backgroundColor = "#397FED";
      financialStatisticsLinkID.style.color = "#ceecff";
    } else {
      financialStatisticsLinkID.style.backgroundColor = "";
      financialStatisticsLinkID.style.color = "";
    }

    if (window.location.pathname === "/dashboard/user-complains") {
      userComplainsLinkID.style.backgroundColor = "#397FED";
      userComplainsLinkID.style.color = "#ceecff";
    } else {
      userComplainsLinkID.style.backgroundColor = "";
      userComplainsLinkID.style.color = "";
    }

    if (runEffect) {
      setRunEffect(false);
    }
  }, [runEffect]);

  const handleClick = () => {
    setRunEffect(true);
  };

  return (
    <div className="menu-div">
      <div className="menu-item-container">
        <NavLink
          onClick={handleClick}
          id="manageOwnersLink"
          className="menu-item"
          to="/dashboard/manage-owners"
        >
          <MdManageAccounts className="me-3 fs-3" />
          Manage Owners
        </NavLink>
        <br />
        {/* <NavLink className="menu-item" to="/dashboard/manage-managers">
          <li>Manage Managers (WIP)</li>
        </NavLink>
        <br /> */}
        <NavLink
          onClick={handleClick}
          id="manageTenantsLink"
          className="menu-item"
          to="/dashboard/manage-tenants"
        >
          <MdManageAccounts className="me-3 fs-3" />
          Manage Tenants
        </NavLink>
        <br />
        <NavLink
          onClick={handleClick}
          id="managePropertiesLink"
          className="menu-item"
          to="/dashboard/manage-properties"
        >
          <LuTableProperties className="me-3 fs-3" />
          Manage Properties
        </NavLink>
        <br />
        <NavLink
          onClick={handleClick}
          id="financialStatisticsLink"
          className="menu-item"
          to="/dashboard/financial-stats"
        >
          <TbDeviceAnalytics className="me-3 fs-3" />
          Financial Statistics
        </NavLink>
        <br />
        <NavLink
          onClick={handleClick}
          id="userComplainsLink"
          className="menu-item"
          to="/dashboard/user-complains"
        >
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
