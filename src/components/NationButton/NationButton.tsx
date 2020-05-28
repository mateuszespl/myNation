import React from "react";
import { connect } from "react-redux";
import { Fab, Button } from "@material-ui/core";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import { setCurrentNationView } from "./../../store/actionCreators";
import { useHistory } from "react-router-dom";

export interface NationButtonInterface {
  next?: boolean;
  setCurrentNationView: (nation: string) => any;
  nextNationView: string;
  prevNationView: string;
  fab?: boolean;
}

export const NationButton: React.FC<NationButtonInterface> = ({
  fab,
  next,
  setCurrentNationView,
  nextNationView,
  prevNationView,
}) => {
  const history = useHistory();
  const handleClick = (e: any, next?: boolean) => {
    e.preventDefault();
    setCurrentNationView(next ? nextNationView : prevNationView);
    history.push(next ? nextNationView : prevNationView);
  };
  return (
    <>
      {fab ? (
        <Fab>
          {!next ? (
            <NavigateBefore onClick={(e) => handleClick(e)} />
          ) : (
            <NavigateNext onClick={(e) => handleClick(e, next)} />
          )}
        </Fab>
      ) : (
        <>
          {!next ? (
            <Button
              startIcon={<NavigateBefore />}
              onClick={(e) => handleClick(e)}
            >
              Poprzednie
            </Button>
          ) : (
            <Button
              endIcon={<NavigateNext />}
              onClick={(e) => handleClick(e, next)}
            >
              Następne
            </Button>
          )}
        </>
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
    setCurrentNationView: (nation: string) =>
      dispatch(setCurrentNationView(nation)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NationButton);
