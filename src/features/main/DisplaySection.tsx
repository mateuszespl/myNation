import React, { useEffect, Suspense } from "react";
import { Box, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { Skeleton } from "@material-ui/lab";

import { fetchData } from "store/actionCreators";
import DisplayList from "./DisplayList";

const Nation = React.lazy(() => import("features/card/Nation"));

interface DisplaySectionInterface {
  countriesDataList: {}[];
  fetchData: () => any;
  fetchedDataSuccessfull: boolean;
  home?: boolean;
}

export const DisplaySection: React.FC<DisplaySectionInterface> = ({
  countriesDataList,
  fetchData,
  home,
}) => {
  useEffect(() => {
    countriesDataList.length === 0 && fetchData();
  }, [countriesDataList.length, fetchData]);
  return (
    <Box marginTop="56px" component="section">
      {home ? (
        <DisplayList />
      ) : (
        <Suspense
          fallback={
            <Grid container alignItems="center" justify="space-around">
              <Skeleton />
            </Grid>
          }
        >
          <Nation />
        </Suspense>
      )}
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    countriesDataList: state.countriesDataList,
    fetchedDataSuccessfull: state.fetchedDataSuccessfull,
  };
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);
