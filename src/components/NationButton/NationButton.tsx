import React from "react";
import { connect } from "react-redux";
import {
  Fab,
  Button,
  Chip,
  Avatar,
  makeStyles,
  Grid,
  Box,
} from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { setCurrentNationView } from "./../../store/actionCreators";
import { useHistory } from "react-router-dom";

export interface NationButtonInterface {
  next?: boolean;
  setCurrentNationView: (nation: any) => any;
  nextNationView: {
    name: string;
    flag: any;
  };
  prevNationView: {
    name: string;
    flag: any;
  };
}

export const NationButton: React.FC<NationButtonInterface> = ({
  next,
  setCurrentNationView,
  nextNationView,
  prevNationView,
}) => {
  const history = useHistory();
  const handleClick = (e: any, next?: boolean) => {
    e.preventDefault();
    setCurrentNationView(next ? nextNationView : prevNationView);
    history.push(next ? nextNationView.name : prevNationView.name);
  };
  return (
    <>
      {!next ? (
        <Fab
          variant="extended"
          disabled={!prevNationView}
          onClick={(e) => handleClick(e)}
        >
          <Box p={1}>
            <Grid container direction="column">
              <Grid item container justify="center" alignItems="center">
                <NavigateBefore />
                Poprzedni
              </Grid>
              {prevNationView && (
                <Grid item>
                  <Chip
                    label={
                      prevNationView.name.length > 15
                        ? prevNationView.name.substring(0, 15) + "..."
                        : prevNationView.name
                    }
                    avatar={
                      <Avatar
                        alt={prevNationView.name + " flag"}
                        src={prevNationView.flag}
                      />
                    }
                  />
                </Grid>
              )}
            </Grid>
          </Box>
        </Fab>
      ) : (
        <Fab
          variant="extended"
          disabled={!nextNationView}
          onClick={(e) => handleClick(e, next)}
        >
          <Box p={1}>
            <Grid container direction="column">
              <Grid item container justify="center" alignItems="center">
                Następny
                <NavigateNext />
              </Grid>
              {nextNationView && (
                <Grid item>
                  {" "}
                  <Chip
                    label={
                      nextNationView.name.length > 15
                        ? nextNationView.name.substring(0, 15) + "..."
                        : nextNationView.name
                    }
                    avatar={
                      <Avatar
                        alt={nextNationView.name + " flag"}
                        src={nextNationView.flag}
                      />
                    }
                  />
                </Grid>
              )}
            </Grid>
          </Box>
        </Fab>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    nextNationView: state.nextNationView,
    prevNationView: state.prevNationView,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCurrentNationView: (nation: any) =>
      dispatch(setCurrentNationView(nation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NationButton);
