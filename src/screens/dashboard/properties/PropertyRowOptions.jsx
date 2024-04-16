import { Button } from "@mui/material";
import { styled } from "@mui/system";
import { icons } from "../../../utils/ImageImports";

const StyledButton = styled(Button)({
  width: "max-content",
  padding: "4px 4px",
  minWidth: "auto",
});

const PropertyRowOptions = ({
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

  const handleDelete = (event) => {
    event.stopPropagation();
    console.log(`Delete Property ${row.id}`);
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
        sx={{
          bgcolor: "#f44336",
          "&:hover": { bgcolor: "#f44336" },
        }}
        onClick={handleDelete}
        onMouseDown={handleMouseDown}
        aria-label="Delete"
      >
        <img src={icons.deleteIcon} alt="Delete" />
      </StyledButton>
    </div>
  );
};

export default PropertyRowOptions;
