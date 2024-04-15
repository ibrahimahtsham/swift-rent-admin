import { Dialog } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useContext } from "react";
import { ThemeContext } from "../../utils/ThemeContext";

const EditUserPopup = ({ open, handleClose, handleSave, editingRowData }) => {
  const { theme } = useContext(ThemeContext);

  const dialogTheme = createTheme({
    palette: {
      mode: theme === "light" ? "light" : "dark",
    },
  });

  return (
    <ThemeProvider theme={dialogTheme}>
      <Dialog open={open} onClose={handleClose}>
        {/* ...rest of the Dialog code... */}
      </Dialog>
    </ThemeProvider>
  );
};

export default EditUserPopup;
