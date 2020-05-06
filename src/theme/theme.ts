import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "rgb(255,255,255)",
      dark: "#002884",
      contrastText: "rgb(0,0,0)",
    },
    secondary: {
      light: "#ff7961",
      main: "rgb(0, 0, 0)",
      dark: "rgb(0, 0, 0)",
      contrastText: "#000",
    },
  },
});
