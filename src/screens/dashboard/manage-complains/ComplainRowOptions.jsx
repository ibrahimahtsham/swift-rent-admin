import { DataTableButton } from "../../../components/common/DataTableButton";
import { icons } from "../../../utils/ImageImports";

const ComplainRowOptions = ({ row }) => {
  const handleAcknowledged = (event) => {
    event.stopPropagation();
    console.log(`Acknowledged complain ${row.id}`);
  };

  const handleMarkResolved = (event) => {
    event.stopPropagation();
    console.log(`Mark as resolved for complain ${row.id}`);
  };

  const handleReject = (event) => {
    event.stopPropagation();
    console.log(`Reject complain ${row.id}`);
  };

  const handleMouseDown = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      <DataTableButton
        variant="contained"
        onClick={handleAcknowledged}
        onMouseDown={handleMouseDown}
        startIcon={<img src={icons.checkIcon} alt="Acknowledged" />}
        bgcolor="#1463df"
        sx={{
          color: "white",
        }}
      >
        Acknowledged
      </DataTableButton>

      <DataTableButton
        variant="contained"
        onClick={handleMarkResolved}
        onMouseDown={handleMouseDown}
        startIcon={<img src={icons.checkIcon} alt="Mark Resolved" />}
        bgcolor="#4CAF50"
        sx={{
          color: "white",
        }}
      >
        Resolved
      </DataTableButton>

      <DataTableButton
        variant="contained"
        color="error"
        bgcolor="#f44336"
        onClick={handleReject}
        onMouseDown={handleMouseDown}
        startIcon={<img src={icons.crossIcon} alt="Reject" />}
      >
        Reject
      </DataTableButton>
    </div>
  );
};

export default ComplainRowOptions;
