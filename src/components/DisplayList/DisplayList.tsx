import React from "react";
import { Grid } from "@material-ui/core";
import { DisplayItemLink } from "../DisplayItemLink/DisplayItemLink";
import { DisplayItemSkeleton } from "../DisplayItemSkeleton/DisplayItemSkeleton";

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
    <Grid
      container
      alignItems="center"
      justify="space-around"
      direction={displayMode === "list" ? "column" : "row"}
      spacing={3}
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
    </Grid>
  );
};
