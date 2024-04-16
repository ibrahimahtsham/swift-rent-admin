import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { icons } from "../../../utils/ImageImports";

const PropertyRowOptions = ({
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

  const handleDelete = () => {
    console.log(`Delete Property ${row.id}`);
  };

  const StyledButton = styled(Button)({
    width: "max-content",
    padding: "4px 8px",
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
        color="error"
        onClick={handleDelete}
        aria-label="Delete"
      >
        <img src={icons.deleteIcon} alt="Delete" />
      </StyledButton>
    </div>
  );
};

export default PropertyRowOptions;
