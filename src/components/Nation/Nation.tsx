import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter, Redirect } from "react-router-dom";
import { setCurrentNationView } from "../../store/actionCreators";

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
  const { capital } = currentNationView;
  useEffect(() => {
    nationName !== "" && setCurrentNationView(nationName);
  }, []);
  return (
    <>
      {countriesDataList.length === 0 ? (
        <Redirect to="/" />
      ) : (
        <div>
          <h1>{nationName}</h1>
          {capital}
        </div>
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
