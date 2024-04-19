import { Button } from "@mui/material";
import { darken, styled } from "@mui/system";
import { buttonDarkenValue } from "../../utils/constants";

export const DataTableButton = styled(Button)(({ bgcolor = "#1463df" }) => ({
  marginRight: "15px",
  padding: "4px 4px",
  minWidth: 0,
  minHeight: 0,
  lineHeight: 0,
  letterSpacing: 0,
  width: "auto",
  "& .MuiTouchRipple-root": {
    width: "auto",
  },

  background: bgcolor,
  "&:hover": {
    backgroundColor: darken(bgcolor, buttonDarkenValue),
  },
}));
