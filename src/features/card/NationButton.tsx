import React from "react";
import { connect } from "react-redux";
import { Fab, Chip, Avatar, Grid } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

import { setCurrentNationView } from "store/actionCreators";

interface NationButtonInterface {
  next?: boolean;
  setCurrentNationView: (nation: any) => any;
  nextNationView: {
    name: string;
    flag: string;
  };
  prevNationView: {
    name: string;
    flag: string;
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
  let currentView = next ? nextNationView : prevNationView;
  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <Grid item>
        <Fab
          variant="extended"
          disabled={!currentView}
          onClick={(e) => handleClick(e)}
        >
          {next ? <NavigateNext /> : <NavigateBefore />}
          {next ? "Następny" : "Poprzedni"}
        </Fab>
      </Grid>
      {currentView && (
        <Grid item>
          <Chip
            label={
              currentView.name.length > 10
                ? currentView.name.substring(0, 10) + "..."
                : currentView.name
            }
            avatar={
              <Avatar alt={currentView.name + " flag"} src={currentView.flag} />
            }
          />
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = (state: any) => {
  return {
    nextNationView: state.nextNationView,
    prevNationView: state.prevNationView,
  };
};

const mapDispatchToProps = {
  setCurrentNationView,
};

export default connect(mapStateToProps, mapDispatchToProps)(NationButton);
