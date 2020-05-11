import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavigationInput from "../NavigationInput/NavigationInput";
import { Grid } from "@material-ui/core";
import NavigationButtonGroup from "../NavigationButtonGroup/NavigationButtonGroup";

export const Navigation: React.FC = () => {
  return (
    <AppBar position="relative" color="primary">
      <Toolbar>
        <Grid container alignItems="center" justify="space-around">
          <Typography variant="h6">myNation</Typography>
          <NavigationInput />
          <NavigationButtonGroup />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
