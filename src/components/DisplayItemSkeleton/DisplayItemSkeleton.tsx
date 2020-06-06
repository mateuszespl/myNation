import React from "react";
import { Box, Grid, makeStyles } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";

interface propsInterface {
  displayMode: string;
}

const useStyles = makeStyles({
  skeletonList: (props: propsInterface) => ({
    position: "relative",
    height: props.displayMode === "grid" ? "280px" : "160px",
    width: props.displayMode === "grid" ? "340px" : "85vw",
    margin: props.displayMode === "grid" ? "0px" : "20px",
    display: "flex",
    flexDirection: props.displayMode === "grid" ? "column" : "row",
    alignItems: props.displayMode && "center",
    justifyContent: props.displayMode && "center",
    borderRadius: "4px",
    overflow: "hidden",
  }),
  skeletonFlag: (props: propsInterface) => ({
    width: "300px",
    height: "160px",
  }),
  skeletonContent: (props: propsInterface) => ({
    width: props.displayMode === "grid" ? "300px" : "calc(85vw - 300px)",
    height: props.displayMode === "grid" ? "72px" : "160px",
  }),
});

export interface DisplayItemSkeletonInterface {
  displayMode: string;
}

export const DisplayItemSkeleton: React.FC<DisplayItemSkeletonInterface> = ({
  displayMode,
}) => {
  const props = { displayMode: displayMode };
  const classes = useStyles(props);
  return (
    <Grid item>
      <Box className={`${classes.skeletonList}`}>
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
          width={displayMode === "grid" ? 300 : undefined}
          height={displayMode === "grid" ? 72 : 160}
        />
      </Box>
    </Grid>
  );
};
