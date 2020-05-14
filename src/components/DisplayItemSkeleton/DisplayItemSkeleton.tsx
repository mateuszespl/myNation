import React from "react";
import { Box, Grid } from "@material-ui/core";
// import styled from "styled-components";
import { Skeleton } from "@material-ui/lab";

// const StyledBox = styled(Box)`
//   margin: 20px;
//   height: 200px;
//   width: 200px;
//   overflow: hidden;
//   border-radius: 8px;
// `;

export const DisplayItemSkeleton = () => {
  return (
    <Grid item>
      <Box>
        <Skeleton animation="wave" variant="rect" height={130} width={200} />
        <Skeleton animation="pulse" variant="text" height={50} width={180} />
        <Skeleton animation="pulse" variant="text" height={20} width={180} />
      </Box>
    </Grid>
  );
};
