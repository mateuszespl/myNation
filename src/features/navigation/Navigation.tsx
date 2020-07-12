import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {
  Grid,
  makeStyles,
  Button,
  useMediaQuery,
  IconButton,
} from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import NavigationInput from "./NavigationInput";
import NavigationButtonGroup from "./NavigationButtonGroup";
import NavigationSelect from "./NavigationSelect";
import NavigationModalButton from "./NavigationModalButton";

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
  const matches1 = useMediaQuery("(max-width:500px)");
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
          <NavigationInput matches={matches} home={home} />
          {home ? (
            <>
              {!matches ? (
                <>
                  <NavigationSelect region />
                  <NavigationSelect />
                  <NavigationButtonGroup />
                </>
              ) : (
                <NavigationModalButton matches={matches1} />
              )}
            </>
          ) : !matches1 ? (
            <Button onClick={handleClick} startIcon={<ArrowBack />}>
              Powrót
            </Button>
          ) : (
            <IconButton onClick={handleClick}>
              <ArrowBack />
            </IconButton>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
