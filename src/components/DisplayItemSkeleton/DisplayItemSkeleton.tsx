import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

const useStyles = makeStyles({
  skeleton: {
    position: "relative",
    height: "160px",
    width: "85vw",
    margin: "20px",
    display: "flex",
    borderRadius: "4px",
    overflow: "hidden",
  },
  skeletonFlag: {
    width: "300px",
    height: "160px",
  },
  skeletonContent: {
    width: "calc(85vw - 300px)",
    height: "160px",
  },
});

export const DisplayItemSkeleton = () => {
  const classes = useStyles();
  return (
    <Grid item>
      <Box className={`${classes.skeleton}`}>
        <Skeleton
          className={`${classes.skeletonFlag}`}
          animation="pulse"
          variant="rect"
          height={160}
          width={300}
        />
        <Skeleton
          className={`${classes.skeletonContent}`}
          animation="wave"
          variant="rect"
          height={160}
        />
      </Box>
    </Grid>
  );
};
