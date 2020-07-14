import React from "react";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import InfiniteScroll from "react-infinite-scroller";

import { updateInfiniteScroll, updateInputValue } from "store/actionCreators";
import { SkeletonBox } from "features/skeleton/SkeletonBox";
import { InfiniteScrollListStyles } from "./InfiniteScrollList.styled";

const DisplayItemLink = React.lazy(() => import("./DisplayItemLink"));

interface InfiniteScrollListInterface {
  displayMode: string;
  filteredNationsDataList: {}[];
  infiniteScrollNationsList: {}[];
  infiniteScrollHasMore: boolean;
  updateInfiniteScroll: () => any;
  updateInputValue: (inputValue: string) => any;
}

export const InfiniteScrollList: React.FC<InfiniteScrollListInterface> = ({
  displayMode,
  filteredNationsDataList,
  infiniteScrollNationsList,
  infiniteScrollHasMore,
  updateInfiniteScroll,
  updateInputValue,
}) => {
  const classes = InfiniteScrollListStyles();
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={updateInfiniteScroll}
      hasMore={infiniteScrollHasMore}
      threshold={300}
      loader={
        <Grid
          className={`${classes.grid}`}
          container
          alignItems={displayMode === "grid" ? "flex-start" : "center"}
          justify={displayMode === "grid" ? "center" : "flex-start"}
          direction={displayMode === "grid" ? "row" : "column"}
        >
          <SkeletonBox displayMode={displayMode} />
          <SkeletonBox displayMode={displayMode} />
          <SkeletonBox displayMode={displayMode} />
          <SkeletonBox displayMode={displayMode} />
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
  );
};

const mapStateToProps = (state: any) => ({
  infiniteScrollNationsList: state.infiniteScrollNationsList,
  filteredNationsDataList: state.filteredNationsDataList,
  displayMode: state.displayMode,
  infiniteScrollHasMore: state.infiniteScrollHasMore,
});

const mapDispatchToProps = {
  updateInfiniteScroll,
  updateInputValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(InfiniteScrollList);
