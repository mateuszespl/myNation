import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { setCurrentNationView } from "../../store/actionCreators";
import { Grid } from "@material-ui/core";
import { NationInfoList } from "../NationInfoList/NationInfoList";

export interface NationInterface {
  location: any;
  setCurrentNationView: (currentNation: string) => any;
  currentNationView: {
    capital: string;
  };
  countriesDataList: Array<any>;
}

export const Nation: React.FC<NationInterface> = ({
  location,
  setCurrentNationView,
  currentNationView,
  countriesDataList,
}) => {
  const nationName = location.pathname.split("/nation/")[1];
  useEffect(() => {
    nationName !== "" && setCurrentNationView(nationName);
  }, []);
  return (
    <>
      {countriesDataList.length === 0 ? (
        <Redirect to="/" />
      ) : (
        <Grid container alignItems="center" justify="center">
          <NationInfoList currentNationView={currentNationView} />
          <h1>{nationName}</h1>
        </Grid>
      )}
    </>
  );
};

const mapStateToProps = (state: any) => {
  return {
    currentNationView: state.currentNationView,
    countriesDataList: state.countriesDataList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setCurrentNationView: (currentNation: string) =>
      dispatch(setCurrentNationView(currentNation)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nation));
