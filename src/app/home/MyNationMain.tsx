import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Box, makeStyles } from "@material-ui/core";

import { Navigation } from "../common/Navigation/Navigation";
import DisplaySection from "../common/DisplaySection/DisplaySection";

const useStyles = makeStyles({
  main: {
    background: "rgb(40,40,40)",
    maxWidth: "100vw",
    overflow: "hidden",
  },
});

export const MyNationMain: React.FC = () => {
  const classes = useStyles();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Box className={`${classes.main}`} component="main" data-test="main">
            <Navigation home />
            <DisplaySection home />
          </Box>
        </Route>
        <Route path="/nation/:nationName">
          <Navigation />
          <DisplaySection />
        </Route>
      </Switch>
    </Router>
  );
};
