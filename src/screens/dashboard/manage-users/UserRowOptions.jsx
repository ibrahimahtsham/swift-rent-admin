import { DataTableButton } from "../../../components/common/DataTableButton";
import { icons } from "../../../utils/ImageImports";
import { banUser, unbanUser } from "./ManageUsersAPIs";

const UserRowOptions = ({
  row,
  setOpenEditingPopup,
  setEditingRow,
  setResetPasswordRowID,
  setOpenResetPasswordPopup,
  setRows,
  setLoading,
}) => {
  const handleEdit = (event) => {
    event.stopPropagation();
    setEditingRow(row);
    setOpenEditingPopup(true);
  };

  const handleResetPassword = (event) => {
    event.stopPropagation();
    setResetPasswordRowID(row.id);
    setOpenResetPasswordPopup(true);
  };

  const handleBan = (event) => {
    event.stopPropagation();
    console.log(`Ban user ${row.id}`);
    console.log(`Can the user be banned? ${!row.isbanned}`);
    row.isbanned
      ? unbanUser(row.id, setRows, setLoading)
      : banUser(row.id, setRows, setLoading);
  };

  const handleMouseDown = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <DataTableButton
        variant="contained"
        bgcolor="#1463df"
        onClick={handleEdit}
        onMouseDown={handleMouseDown}
        aria-label="Edit"
      >
        <img src={icons.editIcon} alt="Edit" />
      </DataTableButton>

      <DataTableButton
        variant="contained"
        onClick={handleResetPassword}
        onMouseDown={handleMouseDown}
        startIcon={<img src={icons.resetPasswordIcon} alt="Reset Password" />}
        bgcolor="#FFD93D"
        sx={{
          color: "black",
        }}
      >
        Reset Pass
      </DataTableButton>

      <DataTableButton
        variant="contained"
        color="error"
        bgcolor={row.isbanned ? "#00bf63" : "#f44336"}
        onClick={handleBan}
        onMouseDown={handleMouseDown}
        // startIcon={<img src={icons.userBanIcon} alt="Ban" />}
        startIcon={
          row.isbanned ? (
            <img src={icons.userUnBanIcon} alt="Unban" />
          ) : (
            <img src={icons.userBanIcon} alt="Ban" />
          )
        }
      >
        {row.isbanned ? "Unban" : "Ban"}
      </DataTableButton>
    </div>
  );
};

export default UserRowOptions;
