import React from "react";
import Panels from "..";
import hotkeys from "./hotkeys";

export default function() {
  return <Panels categoriesList={Object.keys(hotkeys)} />;
}
