import React from "react";
import Categories from "..";
import hotkeys from "hotkeys/rider/keymap.visualstudio.json";

export default function() {
  return (
    <Categories
      categoriesList={Object.keys(hotkeys)}
      keymaps={["Visual Studio", "Intellij"]}
    />
  );
}
