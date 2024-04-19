import { Button } from "@mui/material";
import { styled } from "@mui/system";

export const DataTableButton = styled(Button)({
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
});
