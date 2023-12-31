import EditPopup from "../components/UI/EditUserPopup";
import "../assets/css/ManageManagers.css";

const ManageManagers = () => {
  return (
    <div className="main-body">
      <div className="table-div">
        <h1>Manager Data</h1>
        <table>
          <thead>
            <tr>
              <th>Manager Name</th>
              <th>Date Of Birth</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dummy Manager</td>
              <td>yyyy-mm-dd</td>
              <td>dummymanager@gmail.com</td>
              <td>012345678901</td>
              <td>
                <EditPopup
                  editType="Tenant"
                  userID="{tenant.userid}"
                  userName="{tenant.tenantname}"
                  userDOB="{tenant.dob}"
                  userEmail="{tenant.email}"
                  userPhone="{tenant.phone}"
                />
              </td>
            </tr>
            <tr>
              <td>Dummy Manager</td>
              <td>yyyy-mm-dd</td>
              <td>dummymanager@gmail.com</td>
              <td>012345678901</td>
              <td>
                <EditPopup
                  editType="Tenant"
                  userID="{tenant.userid}"
                  userName="{tenant.tenantname}"
                  userDOB="{tenant.dob}"
                  userEmail="{tenant.email}"
                  userPhone="{tenant.phone}"
                />
              </td>
            </tr>
            <tr>
              <td>Dummy Manager</td>
              <td>yyyy-mm-dd</td>
              <td>dummymanager@gmail.com</td>
              <td>012345678901</td>
              <td>
                <EditPopup
                  editType="Tenant"
                  userID="{tenant.userid}"
                  userName="{tenant.tenantname}"
                  userDOB="{tenant.dob}"
                  userEmail="{tenant.email}"
                  userPhone="{tenant.phone}"
                />
              </td>
            </tr>
            <tr>
              <td>Dummy Manager</td>
              <td>yyyy-mm-dd</td>
              <td>dummymanager@gmail.com</td>
              <td>012345678901</td>
              <td>
                <EditPopup
                  editType="Tenant"
                  userID="{tenant.userid}"
                  userName="{tenant.tenantname}"
                  userDOB="{tenant.dob}"
                  userEmail="{tenant.email}"
                  userPhone="{tenant.phone}"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageManagers;
