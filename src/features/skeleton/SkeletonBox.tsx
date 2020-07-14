import React from "react";
import { Box, Grid } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

import { SkeletonBoxStyles } from "./SkeletonBox.styled";
import { constants } from "./constants";

export interface SkeletonInterface {
  displayMode: string;
}

export const SkeletonBox: React.FC<SkeletonInterface> = ({ displayMode }) => {
  const props = { displayMode: displayMode };
  const classes = SkeletonBoxStyles(props);
  const {
    list: { height: listHeight, width: listWidth },
    card: { height: cardHeight, width: cardWidth },
  } = constants;
  return (
    <Grid item>
      <Box className={`${classes.skeletonList}`}>
        <Skeleton
          className={`${classes.skeletonFlag}`}
          animation="pulse"
          variant="rect"
          height={listHeight}
          width={cardWidth}
        />
        <Skeleton
          className={`${classes.skeletonContent}`}
          animation="wave"
          variant="rect"
          width={displayMode === "grid" ? cardWidth : listWidth}
          height={displayMode === "grid" ? cardHeight : listHeight}
        />
      </Box>
    </Grid>
  );
};
