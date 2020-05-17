import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavigationInput from "../NavigationInput/NavigationInput";
import { Grid, makeStyles } from "@material-ui/core";
import NavigationButtonGroup from "../NavigationButtonGroup/NavigationButtonGroup";
import NavigationSelect from "../NavigationSelect/NavigationSelect";

const useStyles = makeStyles({
  appBar: {
    background: "rgb(40, 40, 40)",
  },
});

export const Navigation: React.FC = () => {
  const classes = useStyles();
  return (
    <AppBar className={`${classes.appBar}`} position="relative" color="default">
      <Toolbar>
        <Grid container alignItems="center" justify="space-around">
          <Typography variant="h6">myNation</Typography>
          <NavigationInput />
          <NavigationSelect />
          <NavigationButtonGroup />
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
