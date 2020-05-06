import React from "react";
import { Grid } from "@material-ui/core";
import { DisplayItemLink } from "../DisplayItemLink/DisplayItemLink";

export interface DisplayListInterface {
  countriesDataList: Array<{}>;
}

export const DisplayList: React.FC<DisplayListInterface> = ({
  countriesDataList,
}) => {
  return (
    <Grid container alignItems="center" justify="space-around" spacing={3}>
      {countriesDataList.length > 0 &&
        countriesDataList.map((country: any, id) => (
          <DisplayItemLink key={id} country={country} />
        ))}
    </Grid>
  );
};
