import React from "react";
import { Navigation } from "./Navigation/Navigation";
import DisplaySection from "./DisplaySection/DisplaySection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nation from "./Nation/Nation";
import { Box, makeStyles } from "@material-ui/core";

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
            <Navigation />
            <DisplaySection />
          </Box>
        </Route>
        <Route path="/test">test router</Route>
        <Route path="/nation/:nationName">
          <Nation />
        </Route>
      </Switch>
    </Router>
  );
};
