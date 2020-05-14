import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
  overrides: {
    MuiAppBar: {
      root: {
        background: "rgb(40, 40, 40)",
      },
    },
  },
});
