import EditPopup from "../components/UI/EditPopup";
import "../assets/css/ManageProperties.css";

const ManageProperties = () => {
  return (
    <div className="main-body">
      <div className="table-div">
        <h1>Property Data</h1>
        <table>
          <thead>
            <tr>
              <th>Property Address</th>
              <th>Rent Amount</th>
              <th>Status</th>
              <th>Property Owner</th>
              <th>Property Tenant</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>House 540, Street no. 5, G-11 / 1, Islamabad, Pakistan</td>
              <td>$1,200.00</td>
              <td>On-rent</td>
              <td>Ibrahim Ahtsham</td>
              <td>Abdullah Shahid</td>
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
              <td>123 Main St</td>
              <td>$1,200.00</td>
              <td>On-rent</td>
              <td>Ibrahim Ahtsham</td>
              <td>Abdullah Shahid</td>
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
              <td>123 Main St</td>
              <td>$1,200.00</td>
              <td>On-rent</td>
              <td>Ibrahim Ahtsham</td>
              <td>Abdullah Shahid</td>
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
              <td>123 Main St</td>
              <td>$1,200.00</td>
              <td>On-rent</td>
              <td>Ibrahim Ahtsham</td>
              <td>Abdullah Shahid</td>
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
              <td>123 Main St</td>
              <td>$1,200.00</td>
              <td>On-rent</td>
              <td>Ibrahim Ahtsham</td>
              <td>Abdullah Shahid</td>
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

export default ManageProperties;
