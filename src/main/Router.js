import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "home";
import VsCodeCategory from "categories/vscode";
import VsCategory from "categories/vs";
import RiderCategory from "categories/rider";
import VsHeader from "common/header/vs";
import VsCodeHeader from "common/header/vscode";
import RiderHeader from "common/header/rider";
import Game from "game";
import resolve from "hotkeys/hotkeyResolver";
import { VsExcludedListStoreKey } from "./consts";

export default function() {
  return (
    <Router>
      <Switch>
        <Route path="/vscode">
          <VsCodeHeader />
          <Route
            exact
            path="/vscode/:keymap?"
            render={props => (
              <VsCodeCategory
                shortcuts={resolve("vscode", props.match.params.keymap)}
              />
            )}
          />
          <Route
            exact
            path="/vscode/:keymap/game/:encodedCategories"
            render={props => (
              <Game
                shortcuts={resolve("vscode", props.match.params.keymap)}
                excludedListStoreKey={VsExcludedListStoreKey}
              />
            )}
          />
        </Route>
        <Route path="/vs">
          <VsHeader />
          <Route
            exact
            path="/vs/:keymap?"
            render={props => (
              <VsCategory
                shortcuts={resolve("vs", props.match.params.keymap)}
              />
            )}
          />
          <Route
            exact
            path="/vs/:keymap/game/:encodedCategories"
            render={props => (
              <Game
                shortcuts={resolve("vs", props.match.params.keymap)}
                excludedListStoreKey={VsExcludedListStoreKey}
              />
            )}
          />
        </Route>
        <Route path="/rider">
          <RiderHeader />
          <Route
            exact
            path="/rider/:keymap?"
            render={props => (
              <RiderCategory
                shortcuts={resolve("rider", props.match.params.keymap)}
              />
            )}
          />
          <Route
            exact
            path="/rider/:keymap/game/:encodedCategories"
            render={props => (
              <Game
                shortcuts={resolve("rider", props.match.params.keymap)}
                excludedListStoreKey={VsExcludedListStoreKey}
              />
            )}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
