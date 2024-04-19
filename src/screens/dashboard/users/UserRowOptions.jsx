import { DataTableButton } from "../../../components/common/DataTableButton";
import { icons } from "../../../utils/ImageImports";

const UserRowOptions = ({
  row,
  setOpen,
  setEditingRowId,
  setEditingRowData,
}) => {
  const handleEdit = (event) => {
    event.stopPropagation();
    setEditingRowId(row.id);
    setEditingRowData(row);
    setOpen(true);
  };

  const handleResetPassword = (event) => {
    event.stopPropagation();
    console.log(`Reset password for user ${row.id}`);
  };

  const handleBan = (event) => {
    event.stopPropagation();
    console.log(`Ban user ${row.id}`);
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
        bgcolor="#f44336"
        onClick={handleBan}
        onMouseDown={handleMouseDown}
        startIcon={<img src={icons.userBanIcon} alt="Ban" />}
      >
        Ban User
      </DataTableButton>
    </div>
  );
};

export default UserRowOptions;
