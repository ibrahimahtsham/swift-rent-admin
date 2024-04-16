import { Button } from "@mui/material";
import { styled } from "@mui/system";
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

  const StyledButton = styled(Button)({
    width: "max-content",
    padding: "0px 8px",
    minWidth: "auto",
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        width: "100%",
      }}
    >
      <StyledButton
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
      </StyledButton>

      <StyledButton
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
      </StyledButton>

      <StyledButton
        variant="contained"
        color="error"
        onClick={handleBan}
        onMouseDown={handleMouseDown}
        startIcon={<img src={icons.userBanIcon} alt="Ban" />}
      >
        Ban User
      </StyledButton>
    </div>
  );
};

export default UserRowOptions;
