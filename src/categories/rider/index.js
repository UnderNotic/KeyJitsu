import React from "react";
import Categories from "..";

export default function({ shortcuts }) {
  return (
    <Categories
      categoriesList={Object.keys(shortcuts)}
      keymaps={["Visual Studio", "Intellij"]}
    />
  );
}
