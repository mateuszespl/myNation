import React from "react";
import { Box } from "@material-ui/core";

import { AppStyles } from "./App.styled";
import { Routes } from "./Routes";

export const App: React.FC = () => {
  const classes = AppStyles();
  return (
    <Box className={`${classes.main}`} component="main" data-test="main">
      <Routes />
    </Box>
  );
};
