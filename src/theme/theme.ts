import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "rgb(30, 30, 30)",
      main: "rgb(90, 90, 90)",
      dark: "rgb(0, 0, 0)",
      contrastText: "rgb(255, 255, 255)",
    },
    secondary: {
      light: "rgb(255, 255, 255)",
      main: "rgb(255, 255, 255)",
      dark: "rgb(255, 255, 255)",
      contrastText: "rgb(255, 255, 255)",
    },
  },
});
