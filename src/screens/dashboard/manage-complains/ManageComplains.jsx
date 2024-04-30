import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../../../../swift-rent-mobile/src/constants";
import DataTable from "../../../components/DataTable";
import { handleApiError, headers } from "../../../utils/helpers";
import { getColumns } from "./ComplainsColumns";

const ManageComplains = () => {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const columns = getColumns(rows, setRows);

  const sendertypeMapping = {
    O: "Owner",
    M: "Manager",
    T: "Tenant",
    G: "General",
  };
  const complaintstatusMapping = {
    P: "Pending",
    I: "In-Progress",
    S: "Solved",
    R: "Rejected",
  };

  // takes in the adminComplaints array and returns a new array with the sendertype and complaintstatus values updated
  function updateComplaints(adminComplaints) {
    return adminComplaints.map((complaint) => ({
      ...complaint,
      sendertype: sendertypeMapping[complaint.sendertype],
      complaintstatus: complaintstatusMapping[complaint.complaintstatus],
    }));
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/admin/complaint-list`,
          {
            headers,
          }
        );
        //prettify json log
        console.log(
          JSON.stringify(
            updateComplaints(response.data.adminComplaints),
            null,
            2
          )
        );
        setRows(updateComplaints(response.data.adminComplaints));
      } catch (error) {
        alert(`Error fetching complains: ${handleApiError(error)}`);
        setRows([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <DataTable
      title="Complains"
      rows={rows}
      columns={columns}
      loading={loading}
    />
  );
};

export default ManageComplains;
