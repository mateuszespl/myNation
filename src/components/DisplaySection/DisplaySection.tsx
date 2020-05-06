import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchData } from "../../store/actionCreators";
import { DisplayList } from "../DisplayList/DisplayList";

export interface DisplaySectionInterface {
  countriesDataList: Array<{}>;
  fetchData: () => any;
}

export const DisplaySection: React.FC<DisplaySectionInterface> = ({
  countriesDataList,
  fetchData,
}) => {
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box component="section">
      <DisplayList countriesDataList={countriesDataList} />
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    countriesDataList: state.countriesDataList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);
