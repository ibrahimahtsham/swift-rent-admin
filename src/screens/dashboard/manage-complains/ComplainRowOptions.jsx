import axios from "axios";
import { DataTableButton } from "../../../components/common/buttons/DataTableButton";
import { icons } from "../../../utils/ImageImports";
import { handleApiError, headers } from "../../../utils/helpers";
import { BASE_URL } from "./../../../utils/db-config";

const ComplainRowOptions = ({ row, prevRows, setRows }) => {
  const formattedDate = (date) => {
    return date
      .toLocaleString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(",", "");
  };

  const handleApiCall = async (event, url, status) => {
    //show an are you sure message
    if (
      !window.confirm(
        `Are you sure you want to mark this complain as ${status}?`
      )
    ) {
      return;
    }
    event.stopPropagation();
    try {
      await axios.post(url, { complaintID: row.id }, { headers });
      alert(`Complain marked as ${status}`);
      // Map over the previous rows to create a new array
      const updatedRows = prevRows.map((item) => {
        // If the ID of the current item matches the ID of the row being updated...
        if (item.id === row.id) {
          // ...return a new object that is a copy of the current item, but with complaintstatus updated to the new status
          return {
            ...item,
            complaintstatus: status,
            ...(status === "Solved"
              ? { complaintsolvedon: formattedDate(new Date()) }
              : {}),
          };
        } else {
          // ...otherwise, return the current item unchanged
          return item;
        }
      });

      // Update the rows state with the new array
      setRows(updatedRows);
    } catch (error) {
      alert(
        `Error marking complain as ${status.toLowerCase()}: ${handleApiError(
          error
        )}`
      );
    }
  };

  const handleMouseDown = (event) => {
    event.stopPropagation();
  };

  return (
    <div>
      {row.complaintstatus === "Pending" && (
        <DataTableButton
          variant="contained"
          onClick={(event) =>
            handleApiCall(
              event,
              `${BASE_URL}/api/admin/set-in-progress`,
              "In-Progress"
            )
          }
          onMouseDown={handleMouseDown}
          startIcon={<img src={icons.checkIcon} alt="In-Progress" />}
          bgcolor="#1463df"
          sx={{ color: "white" }}
        >
          {row.complaintstatus === "In-Progress"
            ? "In-Progress"
            : "Mark In-Progress"}
        </DataTableButton>
      )}

      {(row.complaintstatus === "In-Progress" ||
        row.complaintstatus === "Solved") && (
        <DataTableButton
          disabled={row.complaintstatus === "Solved"}
          variant="contained"
          onClick={(event) =>
            handleApiCall(event, `${BASE_URL}/api/admin/set-solved`, "Solved")
          }
          onMouseDown={handleMouseDown}
          startIcon={<img src={icons.checkIcon} alt="Mark Solved" />}
          bgcolor="#4CAF50"
          sx={{ color: "white" }}
        >
          {row.complaintstatus === "Solved" ? "Solved" : "Send To Solved"}
        </DataTableButton>
      )}

      {(row.complaintstatus === "Pending" ||
        row.complaintstatus === "Rejected") && (
        <DataTableButton
          disabled={row.complaintstatus === "Rejected"}
          variant="contained"
          color="error"
          bgcolor="#f44336"
          onClick={(event) =>
            handleApiCall(
              event,
              `${BASE_URL}/api/admin/reject-complaint`,
              "Rejected"
            )
          }
          onMouseDown={handleMouseDown}
          startIcon={<img src={icons.crossIcon} alt="Reject" />}
        >
          {row.complaintstatus === "Rejected" ? "Rejected" : "Reject"}
        </DataTableButton>
      )}
    </div>
  );
};

export default ComplainRowOptions;
