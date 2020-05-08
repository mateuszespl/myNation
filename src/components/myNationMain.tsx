import React from "react";
import styled from "styled-components";
import { Navigation } from "./Navigation/Navigation";
import DisplaySection from "./DisplaySection/DisplaySection";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Main = styled.main``;

export const MyNationMain: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main data-test="main">
            <Navigation />
            <DisplaySection />
          </Main>
        </Route>
        <Route path="/test">test router</Route>
      </Switch>
    </Router>
  );
};
