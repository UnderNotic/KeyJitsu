import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "home";
import VsCode from "categories/vscode";
import Vs from "categories/vs";
import VsHeader from "common/components/headers/vs";
import Game from "game";
import vsShortcuts from "categories/vs/hotkeys.json";

export default function() {
  return (
    <Router>
      <Switch>
        <Route path="/vscode">
          <VsCode />
        </Route>
        <Route path="/vs">
          <VsHeader />
          <Route exact path="/vs" children={<Vs />} />
          <Route
            exact
            path="/vs/game/:encodedCategories"
            children={<Game shortcuts={vsShortcuts} />}
          />
        </Route>
        <Route path="/resharper">
          <Game />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
