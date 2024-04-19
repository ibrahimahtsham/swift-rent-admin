import { DataTableButton } from "../../../components/common/DataTableButton";
import { icons } from "../../../utils/ImageImports";

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

  const handleRemoveManager = (event) => {
    event.stopPropagation();
    console.log(`Remove Manager ${row.id}`);
  };

  const handleMouseDown = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
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
        sx={{
          bgcolor: "#f44336",
          "&:hover": { bgcolor: "#f44336" },
        }}
        onClick={handleDelete}
        onMouseDown={handleMouseDown}
        aria-label="Delete"
      >
        <img src={icons.deleteIcon} alt="Delete" />
      </DataTableButton>

      {row.managerName && (
        <DataTableButton
          variant="contained"
          color="error"
          onClick={handleRemoveManager}
          onMouseDown={handleMouseDown}
          startIcon={<img src={icons.userBanIcon} alt="Ban" />}
        >
          Remove Manager
        </DataTableButton>
      )}
    </div>
  );
};

export default PropertyRowOptions;
