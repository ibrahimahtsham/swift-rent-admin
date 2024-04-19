import { Button } from "@mui/material";
import { darken, styled } from "@mui/system";
import { buttonDarkenValue } from "../../utils/constants";

const FormButton = styled(Button)(({ bgcolor = "#1463df" }) => ({
  background: bgcolor,
  color: "white",
  "&:hover": {
    backgroundColor: darken(bgcolor, buttonDarkenValue),
  },
}));

export default FormButton;
