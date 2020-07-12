import React, { Suspense } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import InfiniteScroll from "react-infinite-scroller";
import { connect } from "react-redux";

import { updateInfiniteScroll, updateInputValue } from "store/actionCreators";
import { DisplayItemSkeleton } from "features/skeleton/DisplayItemSkeleton";

const DisplayItemLink = React.lazy(() => import("./DisplayItemLink"));

const useStyles = makeStyles({
  grid: {
    minHeight: "calc(100vh - 64px)",
  },
});

export interface DisplayListInterface {
  skeletonDataList: Array<number>;
  filteredNationsDataList: Array<any>;
  fetchedDataSuccessfull: boolean;
  displayMode: string;
  updateInfiniteScroll: () => any;
  updateInputValue: (inputValue: string) => any;
  infiniteScrollNationsList: Array<any>;
  infiniteScrollHasMore: boolean;
}

export const DisplayList: React.FC<DisplayListInterface> = ({
  skeletonDataList,
  fetchedDataSuccessfull,
  displayMode,
  filteredNationsDataList,
  updateInfiniteScroll,
  updateInputValue,
  infiniteScrollHasMore,
  infiniteScrollNationsList,
}) => {
  const classes = useStyles();
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
            <DisplayItemSkeleton displayMode={displayMode} key={key} />
          ))}
        </Grid>
      }
    >
      {fetchedDataSuccessfull && (
        <InfiniteScroll
          pageStart={0}
          loadMore={updateInfiniteScroll}
          hasMore={infiniteScrollHasMore}
          loader={
            <Grid
              className={`${classes.grid}`}
              container
              alignItems={displayMode === "grid" ? "flex-start" : "center"}
              justify={displayMode === "grid" ? "center" : "flex-start"}
              direction={displayMode === "grid" ? "row" : "column"}
            >
              <DisplayItemSkeleton displayMode={displayMode} />
              <DisplayItemSkeleton displayMode={displayMode} />
              <DisplayItemSkeleton displayMode={displayMode} />
              <DisplayItemSkeleton displayMode={displayMode} />
            </Grid>
          }
        >
          <Grid
            className={`${classes.grid}`}
            container
            alignItems={displayMode === "list" ? "center" : undefined}
            justify="center"
            direction={displayMode === "list" ? "column" : "row"}
          >
            {(filteredNationsDataList.length > 0
              ? filteredNationsDataList
              : infiniteScrollNationsList
            ).map((country: any, id: number) => (
              <DisplayItemLink
                handleClick={() => updateInputValue("")}
                displayMode={displayMode}
                key={id}
                country={country}
              />
            ))}
          </Grid>
        </InfiniteScroll>
      )}
    </Suspense>
  );
};

const mapStateToProps = (state: any) => {
  return {
    infiniteScrollNationsList: state.infiniteScrollNationsList,
    filteredNationsDataList: state.filteredNationsDataList,
    skeletonDataList: state.skeletonDataList,
    fetchedDataSuccessfull: state.fetchedDataSuccessfull,
    displayMode: state.displayMode,
    infiniteScrollHasMore: state.infiniteScrollHasMore,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    updateInfiniteScroll: () => dispatch(updateInfiniteScroll()),
    updateInputValue: (inputValue: string) =>
      dispatch(updateInputValue(inputValue)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DisplayList);
