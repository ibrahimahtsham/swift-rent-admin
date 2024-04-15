import { useState } from "react";
import DataTable from "../../../components/DataTable";
import { rows } from "../../../utils/data/UsersData";
import EditUserPopup from "./EditUserPopup";
import { getColumns } from "./UsersColumns";

const Users = () => {
  const [open, setOpen] = useState(false);
  const [editingRowId, setEditingRowId] = useState(null);
  const [editingRowData, setEditingRowData] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Implement your logic to save the changes here
    console.log(`Save changes for user ${editingRowId}`);
    setOpen(false);
  };

  const columns = getColumns(setOpen, setEditingRowId, setEditingRowData);

  return (
    <>
      <DataTable title="Users" rows={rows} columns={columns} />

      <EditUserPopup
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        editingRowData={editingRowData}
      />
    </>
  );
};

export default Users;
