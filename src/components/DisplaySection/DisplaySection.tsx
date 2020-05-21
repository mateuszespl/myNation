import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchData } from "../../store/actionCreators";
import { DisplayList } from "../DisplayList/DisplayList";
import Nation from "../Nation/Nation";

export interface DisplaySectionInterface {
  countriesDataList: Array<{}>;
  skeletonDataList: Array<number>;
  fetchData: () => any;
  fetchedDataSuccessfull: boolean;
  displayMode: string;
  filteredNationsDataList: Array<any>;
  home?: boolean;
}

export const DisplaySection: React.FC<DisplaySectionInterface> = ({
  countriesDataList,
  fetchData,
  fetchedDataSuccessfull,
  skeletonDataList,
  displayMode,
  filteredNationsDataList,
  home,
}) => {
  useEffect(() => {
    countriesDataList.length === 0 && fetchData();
  }, []);
  return (
    <Box component="section">
      {home ? (
        <DisplayList
          countriesDataList={
            filteredNationsDataList.length !== 0
              ? filteredNationsDataList
              : countriesDataList
          }
          fetchedDataSuccessfull={fetchedDataSuccessfull}
          skeletonDataList={skeletonDataList}
          displayMode={displayMode}
        />
      ) : (
        <Nation />
      )}
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    countriesDataList: state.countriesDataList,
    skeletonDataList: state.skeletonDataList,
    fetchedDataSuccessfull: state.fetchedDataSuccessfull,
    displayMode: state.displayMode,
    filteredNationsDataList: state.filteredNationsDataList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);
