import { DataTableButton } from "../../../components/common/DataTableButton";
import { icons } from "../../../utils/ImageImports";

const ComplainRowOptions = ({ row }) => {
  const handleInProgress = (event) => {
    event.stopPropagation();
    console.log(`In-Progress complain ${row.id}`);
  };

  const handleMarkSolved = (event) => {
    event.stopPropagation();
    console.log(`Mark as solved for complain ${row.id}`);
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
        onClick={handleInProgress}
        onMouseDown={handleMouseDown}
        startIcon={<img src={icons.checkIcon} alt="In-Progress" />}
        bgcolor="#1463df"
        sx={{
          color: "white",
        }}
      >
        In-Progress
      </DataTableButton>

      <DataTableButton
        variant="contained"
        onClick={handleMarkSolved}
        onMouseDown={handleMouseDown}
        startIcon={<img src={icons.checkIcon} alt="Mark Solved" />}
        bgcolor="#4CAF50"
        sx={{
          color: "white",
        }}
      >
        Solved
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
