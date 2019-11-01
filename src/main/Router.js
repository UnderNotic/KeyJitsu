import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "home";
import VsCode from "categories/vscode";
import Vs from "categories/vs";
import Resharper from "categories/resharper";

export default function() {
  return (
    <Router>
      <Switch>
        <Route path="/vscode">
          <VsCode />
        </Route>
        <Route path="/vs">
          <Vs />
        </Route>
        <Route path="/resharper">
          <Resharper />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}
