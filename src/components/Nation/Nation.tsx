import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

export interface NationInterface {
  location: any;
}

export const Nation: React.FC<NationInterface> = ({ location }) => {
  const nationName = location.pathname.split("/nation/")[1];
  return (
    <div>
      <h1>{nationName}</h1>
      siemka
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {};
};

const mapDispatchToProps = (dispatch: any) => {
  return {};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nation));
