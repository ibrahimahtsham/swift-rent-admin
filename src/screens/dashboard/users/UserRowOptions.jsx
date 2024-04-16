import { Button } from "@mui/material";
import { styled } from "@mui/system";
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

  const handleBan = () => {
    console.log(`Ban user ${row.id}`);
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
        aria-label="Edit"
      >
        <img src={icons.editIcon} alt="Edit" />
      </StyledButton>

      <StyledButton
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
      </StyledButton>

      <StyledButton
        variant="contained"
        color="error"
        onClick={handleBan}
        startIcon={<img src={icons.userBanIcon} alt="Ban" />}
      >
        Ban User
      </StyledButton>
    </div>
  );
};

export default UserRowOptions;
