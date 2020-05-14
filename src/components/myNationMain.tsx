import React from "react";
import { Navigation } from "./Navigation/Navigation";
import DisplaySection from "./DisplaySection/DisplaySection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nation from "./Nation/Nation";
import { Box, styled } from "@material-ui/core";

const StyledMain = styled(Box)({
  background: "rgb(40, 40, 40)",
});

export const MyNationMain: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StyledMain component="main" data-test="main">
            <Navigation />
            <DisplaySection />
          </StyledMain>
        </Route>
        <Route path="/test">test router</Route>
        <Route path="/nation/:nationName">
          <Nation />
        </Route>
      </Switch>
    </Router>
  );
};
