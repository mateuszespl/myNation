import React, { useEffect, Suspense } from "react";
import { Box } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchData } from "../../store/actionCreators";
import DisplayList from "../DisplayList/DisplayList";
const Nation = React.lazy(() => import("../Nation/Nation"));

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
  home,
}) => {
  useEffect(() => {
    countriesDataList.length === 0 && fetchData();
  }, []);
  return (
    <Box component="section">
      {home ? (
        <DisplayList />
      ) : (
        <Suspense fallback={"Loading..."}>
          {" "}
          <Nation />
        </Suspense>
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
