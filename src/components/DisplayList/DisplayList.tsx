import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import { DisplayItemLink } from "../DisplayItemLink/DisplayItemLink";
import { DisplayItemSkeleton } from "../DisplayItemSkeleton/DisplayItemSkeleton";

const useStyles = makeStyles({
  grid: {
    margin: "20px 0",
    minHeight: "calc(100vh - 64px)",
  },
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
  const classes = useStyles();
  return (
    <Grid
      className={`${classes.grid}`}
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
    </Grid>
  );
};
