import { useEffect, useState } from "react";
import DataTable from "../../../components/DataTable";
import EditUserPopup from "./EditUserPopup";
import { editUser, fetchUsers, resetPassword } from "./ManageUsersAPIs";
import ResetPasswordPopup from "./ResetPasswordPopup";
import { getColumns } from "./UsersColumns";

const ManageUsers = () => {
  const [loading, setLoading] = useState(true);
  // Editing Popup
  const [openEditingPopup, setOpenEditingPopup] = useState(false);
  const [editingRow, setEditingRow] = useState(null);

  // Reset Password Popup
  const [openResetPasswordPopup, setOpenResetPasswordPopup] = useState(false);
  const [resetPasswordRowID, setResetPasswordRowID] = useState(null);

  const [rows, setRows] = useState([]);
  const columns = getColumns(
    setOpenEditingPopup,
    setEditingRow,
    setOpenResetPasswordPopup,
    setResetPasswordRowID,
    setRows,
    setLoading
  );

  useEffect(() => {
    fetchUsers(setLoading, setRows);
  }, []);

  // Handlers to close the popups

  const handleEditingClose = () => {
    setOpenEditingPopup(false);
  };

  const handleCloseResetPassword = () => {
    setOpenResetPasswordPopup(false);
  };

  // Handlers to save the data from the popups

  const handleEditingSave = async (values) => {
    editUser(values, setOpenEditingPopup, setLoading, fetchUsers, setRows);
  };

  const handleSaveResetPassword = async (values) => {
    resetPassword(
      { ...values, id: resetPasswordRowID },
      setOpenResetPasswordPopup,
      setLoading,
      fetchUsers,
      setRows
    );
  };

  return (
    <>
      <DataTable
        title="Users"
        rows={rows}
        columns={columns}
        loading={loading}
      />

      <EditUserPopup
        open={openEditingPopup}
        handleClose={handleEditingClose}
        handleSave={handleEditingSave}
        editingRow={editingRow}
      />

      <ResetPasswordPopup
        open={openResetPasswordPopup}
        handleClose={handleCloseResetPassword}
        handleSave={handleSaveResetPassword}
      />
    </>
  );
};

export default ManageUsers;
