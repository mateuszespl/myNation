import React from "react";
import { TextField, Grid, IconButton } from "@material-ui/core";
import { Search } from "@material-ui/icons";

export const NavigationInput = () => {
  return (
    <Grid container item alignItems="center" xs={4}>
      <Grid item xs>
        <TextField
          fullWidth
          size="small"
          color="secondary"
          type="search"
          label="Wyszukaj państwo"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={1}>
        <IconButton aria-label="search">
          <Search />
        </IconButton>
      </Grid>
    </Grid>
  );
};
