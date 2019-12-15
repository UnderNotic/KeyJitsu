import React from "react";
import Categories from "..";
import hotkeys from "hotkeys/vs/keymap.default.json";

export default function() {
  return (
    <Categories categoriesList={Object.keys(hotkeys)} keymaps={["Default"]} />
  );
}
