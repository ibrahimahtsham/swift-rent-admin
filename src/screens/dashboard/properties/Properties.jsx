import { useState } from "react";
import DataTable from "../../../components/DataTable";
import { rows } from "../../../utils/data/PropertiesData";
import EditPropertyPopup from "./EditPropertyPopup";
import { getColumns } from "./PropertiesColumns";

const Properties = () => {
  const [open, setOpen] = useState(false);
  const [editingRowId, setEditingRowId] = useState(null);
  const [editingRowData, setEditingRowData] = useState(null);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Implement your logic to save the changes here
    console.log(`Save changes for property ${editingRowId}`);
    setOpen(false);
  };

  const columns = getColumns(setOpen, setEditingRowId, setEditingRowData);

  return (
    <>
      <DataTable title="Properties" rows={rows} columns={columns} />

      <EditPropertyPopup
        open={open}
        handleClose={handleClose}
        handleSave={handleSave}
        editingRowData={editingRowData}
      />
    </>
  );
};

export default Properties;
