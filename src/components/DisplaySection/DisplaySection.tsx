import React, { useEffect, Suspense, useState } from "react";
import { Box, Snackbar, Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchData } from "../../store/actionCreators";
import DisplayList from "../DisplayList/DisplayList";
import { Alert, Skeleton } from "@material-ui/lab";
const Nation = React.lazy(() => import("../Nation/Nation"));

export interface DisplaySectionInterface {
  countriesDataList: Array<{}>;
  fetchData: () => any;
  fetchedDataSuccessfull: boolean;
  home?: boolean;
}

export const DisplaySection: React.FC<DisplaySectionInterface> = ({
  countriesDataList,
  fetchData,
  home,
  fetchedDataSuccessfull,
}) => {
  const [open, setOpen] = useState(false);

  // DO ZMIANY REDUX

  useEffect(() => {
    countriesDataList.length === 0 && fetchData();
  }, []);

  useEffect(() => {
    setOpen(true);
  }, [fetchedDataSuccessfull]);
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
      <Snackbar
        autoHideDuration={4000}
        open={open}
        onClose={() => setOpen(false)}
      >
        <Alert severity="success">Pomyślnie pobrano dane!</Alert>
      </Snackbar>
    </Box>
  );
};

const mapStateToProps = (state: any) => {
  return {
    countriesDataList: state.countriesDataList,
    fetchedDataSuccessfull: state.fetchedDataSuccessfull,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchData: () => dispatch(fetchData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplaySection);
