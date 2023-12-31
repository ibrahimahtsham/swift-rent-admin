import EditUserPopup from "../components/UI/EditUserPopup";
import "../assets/css/UserComplains.css";

const UserComplains = () => {
  return (
    <div className="main-body">
      <div className="table-div">
        <h1>User Complains</h1>
        <table>
          <thead>
            <tr>
              <th>User Type</th>
              <th>Bug Type</th>
              <th>Bug Description</th>
              <th>Bug Status</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-bottom">
              <td>Owner</td>
              <td>Login</td>
              <td>Cant Login Propperly</td>
              <td>Pending</td>
              <td>
                <EditUserPopup
                  editType="Tenant"
                  userID="{tenant.userid}"
                  userName="{tenant.tenantname}"
                  userDOB="{tenant.dob}"
                  userEmail="{tenant.email}"
                  userPhone="{tenant.phone}"
                />
              </td>
            </tr>
            <tr className="border-bottom">
              <td>Owner</td>
              <td>Login</td>
              <td>Cant Login Propperly</td>
              <td>Pending</td>
              <td>
                <EditUserPopup
                  editType="Tenant"
                  userID="{tenant.userid}"
                  userName="{tenant.tenantname}"
                  userDOB="{tenant.dob}"
                  userEmail="{tenant.email}"
                  userPhone="{tenant.phone}"
                />
              </td>
            </tr>
            <tr className="border-bottom">
              <td>Owner</td>
              <td>Login</td>
              <td>Cant Login Propperly</td>
              <td>Pending</td>
              <td>
                <EditUserPopup
                  editType="Tenant"
                  userID="{tenant.userid}"
                  userName="{tenant.tenantname}"
                  userDOB="{tenant.dob}"
                  userEmail="{tenant.email}"
                  userPhone="{tenant.phone}"
                />
              </td>
            </tr>
            <tr className="border-bottom">
              <td>Owner</td>
              <td>Login</td>
              <td>Cant Login Propperly</td>
              <td>Pending</td>
              <td>
                <EditUserPopup
                  editType="Tenant"
                  userID="{tenant.userid}"
                  userName="{tenant.tenantname}"
                  userDOB="{tenant.dob}"
                  userEmail="{tenant.email}"
                  userPhone="{tenant.phone}"
                />
              </td>
            </tr>
            <tr className="border-bottom">
              <td>Owner</td>
              <td>Login</td>
              <td>Cant Login Propperly</td>
              <td>Pending</td>
              <td>
                <EditUserPopup
                  editType="Tenant"
                  userID="{tenant.userid}"
                  userName="{tenant.tenantname}"
                  userDOB="{tenant.dob}"
                  userEmail="{tenant.email}"
                  userPhone="{tenant.phone}"
                />
              </td>
            </tr>
            <tr className="border-bottom">
              <td>Owner</td>
              <td>Login</td>
              <td>Cant Login Propperly</td>
              <td>Pending</td>
              <td>
                <EditUserPopup
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

export default UserComplains;
