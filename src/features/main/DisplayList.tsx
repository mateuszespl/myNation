import React, { Suspense, useEffect } from "react";
import { Grid, useMediaQuery } from "@material-ui/core";
import { connect } from "react-redux";

import { SkeletonBox } from "features/skeleton/SkeletonBox";
import { DisplayListStyles } from "./DisplayList.styled";
import InfiniteScrollList from "./InfiniteScrollList";
import { initialStateInterface } from "store/reducer";
import { setDisplayMode } from "store/actionCreators";

interface DisplayListInterface {
  skeletonDataList: Array<number>;
  fetchedDataSuccessfull: boolean;
  displayMode: string;
  setDisplayMode: (displayMode: string) => void;
}

export const DisplayList: React.FC<DisplayListInterface> = ({
  skeletonDataList,
  fetchedDataSuccessfull,
  displayMode,
  setDisplayMode,
}) => {
  const classes = DisplayListStyles();
  const matches = useMediaQuery("(max-width:600px)");
  useEffect(() => {
    matches ? setDisplayMode("grid") : setDisplayMode("list");
  }, [matches, setDisplayMode]);
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

const mapStateToProps = (state: initialStateInterface) => {
  return {
    skeletonDataList: state.skeletonDataList,
    fetchedDataSuccessfull: state.fetchedDataSuccessfull,
    displayMode: state.displayMode,
  };
};

const mapDispatchToProps = { setDisplayMode };

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
