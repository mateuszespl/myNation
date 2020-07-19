import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import DisplaySection from "features/main/DisplaySection";
import { Navigation } from "features/navigation/Navigation";
import Game from "features/game/Game";
import { GameNavigation } from "features/game/GameNavigation";

export const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Navigation home />
          <DisplaySection home />
        </Route>
        <Route path="/nation/:nationName">
          <Navigation />
          <DisplaySection />
        </Route>
        <Route path="/game">
          <GameNavigation />
          <Game />
        </Route>
      </Switch>
    </Router>
  );
};
