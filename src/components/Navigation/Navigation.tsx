import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import NavigationInput from "../NavigationInput/NavigationInput";
import { Grid, makeStyles, Button, useMediaQuery } from "@material-ui/core";
import NavigationButtonGroup from "../NavigationButtonGroup/NavigationButtonGroup";
import NavigationSelect from "../NavigationSelect/NavigationSelect";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { NavigationModalButton } from "../NavigationModalButton/NavigationModalButton";

const useStyles = makeStyles({
  appBar: {
    background: "rgb(40, 40, 40)",
  },
});

export interface NavigationInterface {
  home?: boolean;
}

export const Navigation: React.FC<NavigationInterface> = ({ home }) => {
  const matches = useMediaQuery("(max-width:710px)");
  const classes = useStyles();
  const history = useHistory();
  const handleClick = (e: any) => {
    e.preventDefault();
    history.push("/");
  };
  return (
    <AppBar className={`${classes.appBar}`} color="default">
      <Toolbar>
        <Grid container alignItems="center" justify="space-around">
          <Typography variant="subtitle1">myNation</Typography>
          {home ? (
            <>
              <NavigationInput matches={matches} />
              {!matches ? (
                <>
                  <NavigationSelect region />
                  <NavigationSelect />
                  <NavigationButtonGroup />
                </>
              ) : (
                <NavigationModalButton />
              )}
            </>
          ) : (
            <Button onClick={handleClick} startIcon={<ArrowBack />}>
              Powrót
            </Button>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
