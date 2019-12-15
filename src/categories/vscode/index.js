import React from "react";
import Categories from "..";
import hotkeys from "hotkeys/vscode/keymap.default.json";

export default function() {
  return (
    <Categories categoriesList={Object.keys(hotkeys)} keymaps={["Default"]} />
  );
}
