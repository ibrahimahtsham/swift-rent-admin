import { Button } from "@mui/material";
import { icons } from "../../../utils/ImageImports";

const UserRowOptions = ({
  row,
  setOpen,
  setEditingRowId,
  setEditingRowData,
}) => {
  const handleEdit = () => {
    setEditingRowId(row.id);
    setEditingRowData(row);
    setOpen(true);
  };

  const handleResetPassword = () => {
    console.log(`Reset password for user ${row.id}`);
  };

  const handleDelete = () => {
    console.log(`Delete user ${row.id}`);
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
      <Button
        variant="contained"
        sx={{ bgcolor: "#1463df", "&:hover": { bgcolor: "#1463df" } }}
        onClick={handleEdit}
        aria-label="Edit"
      >
        <img src={icons.editIcon} alt="Edit" />
      </Button>

      <Button
        variant="contained"
        onClick={handleResetPassword}
        startIcon={<img src={icons.resetPasswordIcon} alt="Reset Password" />}
        sx={{
          bgcolor: "#FFD93D",
          color: "black",
          "&:hover": { bgcolor: "#FFD93D" },
        }}
      >
        Reset Pass
      </Button>

      <Button
        variant="contained"
        color="error"
        onClick={handleDelete}
        aria-label="Delete"
      >
        <img src={icons.deleteIcon} alt="Delete" />
      </Button>
    </div>
  );
};

export default UserRowOptions;
