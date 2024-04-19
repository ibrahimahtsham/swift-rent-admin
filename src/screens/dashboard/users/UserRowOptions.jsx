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
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <DataTableButton
        variant="contained"
        sx={{
          bgcolor: "#1463df",
          "&:hover": { bgcolor: "#1463df" },
        }}
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
        sx={{
          bgcolor: "#FFD93D",
          color: "black",
          "&:hover": { bgcolor: "#FFD93D" },
        }}
      >
        Reset Pass
      </DataTableButton>

      <DataTableButton
        variant="contained"
        color="error"
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
