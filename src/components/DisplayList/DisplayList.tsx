import React from "react";
import { Grid, styled } from "@material-ui/core";
import { DisplayItemLink } from "../DisplayItemLink/DisplayItemLink";
import { DisplayItemSkeleton } from "../DisplayItemSkeleton/DisplayItemSkeleton";

const StyledGrid = styled(Grid)({
  margin: "20px 0",
});

export interface DisplayListInterface {
  countriesDataList: Array<{}>;
  skeletonDataList: Array<number>;
  fetchedDataSuccessfull: boolean;
  displayMode: string;
}

export const DisplayList: React.FC<DisplayListInterface> = ({
  countriesDataList,
  skeletonDataList,
  fetchedDataSuccessfull,
  displayMode,
}) => {
  return (
    <StyledGrid
      container
      alignItems="center"
      justify="space-around"
      direction={displayMode === "list" ? "column" : "row"}
      spacing={4}
    >
      {fetchedDataSuccessfull
        ? countriesDataList.map((country: any, id) => (
            <DisplayItemLink
              displayMode={displayMode}
              key={id}
              country={country}
            />
          ))
        : skeletonDataList.map((key) => <DisplayItemSkeleton key={key} />)}
    </StyledGrid>
  );
};
