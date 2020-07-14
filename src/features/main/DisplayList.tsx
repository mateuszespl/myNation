import React, { Suspense } from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";

import { SkeletonBox } from "features/skeleton/SkeletonBox";
import { DisplayListStyles } from "./DisplayList.styled";
import InfiniteScrollList from "./InfiniteScrollList";

interface DisplayListInterface {
  skeletonDataList: Array<number>;
  fetchedDataSuccessfull: boolean;
  displayMode: string;
}

export const DisplayList: React.FC<DisplayListInterface> = ({
  skeletonDataList,
  fetchedDataSuccessfull,
  displayMode,
}) => {
  const classes = DisplayListStyles();
  return (
    <Suspense
      fallback={
        <Grid
          className={`${classes.grid}`}
          container
          alignItems="center"
          justify="space-around"
          direction={displayMode === "grid" ? "row" : "column"}
        >
          {skeletonDataList.map((key) => (
            <SkeletonBox displayMode={displayMode} key={key} />
          ))}
        </Grid>
      }
    >
      {fetchedDataSuccessfull && <InfiniteScrollList />}
    </Suspense>
  );
};

const mapStateToProps = (state: any) => {
  return {
    skeletonDataList: state.skeletonDataList,
    fetchedDataSuccessfull: state.fetchedDataSuccessfull,
    displayMode: state.displayMode,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
