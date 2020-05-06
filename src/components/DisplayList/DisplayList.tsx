import React from "react";
import { Grid } from "@material-ui/core";
import { DisplayItemLink } from "../DisplayItemLink/DisplayItemLink";
import { DisplayItemSkeleton } from "../DisplayItemSkeleton/DisplayItemSkeleton";

export interface DisplayListInterface {
  countriesDataList: Array<{}>;
  skeletonDataList: Array<number>;
  fetchedDataSuccessfull: boolean;
}

export const DisplayList: React.FC<DisplayListInterface> = ({
  countriesDataList,
  skeletonDataList,
  fetchedDataSuccessfull,
}) => {
  return (
    <Grid container alignItems="center" justify="space-around" spacing={3}>
      {fetchedDataSuccessfull
        ? countriesDataList.map((country: any, id) => (
            <DisplayItemLink key={id} country={country} />
          ))
        : skeletonDataList.map((key) => <DisplayItemSkeleton key={key} />)}
    </Grid>
  );
};
