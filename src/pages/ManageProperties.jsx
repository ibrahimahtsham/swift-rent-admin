import EditPopup from "../components/UI/EditUserPopup";
import "../assets/css/ManageProperties.css";

const ManageProperties = () => {
  return (
    <div className="main-body content-screen">
      <div className="page-border">
        <h1>Property Data</h1>
        <div className="table-container">
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
              <tr className="border-bottom">
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
              <tr className="border-bottom">
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
              <tr className="border-bottom">
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
              <tr className="border-bottom">
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
              <tr className="border-bottom">
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
              <tr className="border-bottom">
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
              <tr className="border-bottom">
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
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageProperties;
