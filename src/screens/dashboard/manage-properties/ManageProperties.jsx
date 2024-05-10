import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "../../../components/DataTable";
import { BASE_URL } from "./../../../utils/db-config";
import EditPropertyPopup from "./EditPropertyPopup";
import { getColumns } from "./PropertiesColumns";

const ManageProperties = () => {
  const [open, setOpen] = useState(false);
  const [rows, setRows] = useState([]);
  const [editingRowId, setEditingRowId] = useState(null);
  const [resetPasswordRowID, setEditingRowData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/admin/view-property-list`)
      .then((response) => {
        setRows(
          response.data.propertyList.map((item) => ({
            ...item,
            id: item.propertyid,
          }))
        );
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Implement your logic to save the changes here
    console.log(`Save changes for property ${editingRowId}`);
    console.log(resetPasswordRowID);
    setOpen(false);
  };

  const columns = getColumns(setOpen, setEditingRowId, setEditingRowData);

  return (
    <>
      <DataTable
        title="Properties"
        rows={rows}
        columns={columns}
        loading={loading}
      />

      <EditPropertyPopup
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        resetPasswordRowID={resetPasswordRowID}
      />
    </>
  );
};

export default ManageProperties;
